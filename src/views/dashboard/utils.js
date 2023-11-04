import dayjs from "dayjs";

export const getMostValuedCustomers = (loans, euroRate, dollarRate) => {
  const largestClients = {};

  loans.forEach(loan => {
    const { client, interestAmount } = loan;
    const amount = convertCurrencyToInteger(interestAmount, euroRate, dollarRate);
    if (Object.keys(largestClients).includes(loan.client) && amount !== 0) {
      largestClients[client] = Number(Object.values(largestClients)) + Number(amount);
    } else if (amount !== 0) {
      largestClients[client] = amount;
    }
  });

  return Object.fromEntries(Object.entries(largestClients).sort(([, a], [, b]) => b - a));
};

const convertCurrencyToInteger = interestAmount => {
  if (interestAmount.includes("UGX")) {
    return parseInt(interestAmount.replace(/,/g, "").replace(".", "").split("").slice(4, -2).join(""), 10) / 3500;
  }
  if (interestAmount.includes("$")) {
    return parseInt(interestAmount.replace(/,/g, "").replace(".", "").split("").slice(1, -2).join(""), 10);
  }
  return parseInt(interestAmount.replace(/,/g, "").replace(".", "").split("").slice(1, -2).join(""), 10) * 1.2;
};

export const calculatePopularCurrency = loans => {
  const shillingPayments = [0];
  const dollarPayments = [0];
  const euroPayments = [0];

  loans.forEach(loan => {
    const { amount } = loan;
    if (amount.includes("UGX")) {
      shillingPayments.push(
        parseInt(amount.replace(/,/g, "").replace(".", "").split("").slice(4, -2).join(""), 10) / 3500
      );
    }
    if (amount.includes("$")) {
      dollarPayments.push(parseInt(amount.replace(/,/g, "").replace(".", "").split("").slice(1, -2).join(""), 10));
    }

    if (amount.includes("€")) {
      euroPayments.push(parseInt(amount.replace(/,/g, "").replace(".", "").split("").slice(1, -2).join(""), 10) * 1.2);
    }
  });

  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  const totalShillings = shillingPayments.reduce(reducer);
  const totalDollars = dollarPayments.reduce(reducer);
  const totalEuros = euroPayments.reduce(reducer);
  const total = totalShillings + totalDollars + totalEuros;
  const shillingPercentage = Math.round((totalShillings / total) * 100);
  const dollarPercentage = Math.round((totalDollars / total) * 100);
  const euroPercentage = Math.round((totalEuros / total) * 100);

  return [
    ["USD", dollarPercentage],
    ["UGX", shillingPercentage],
    ["EUR", euroPercentage]
  ];
};

export const calculateRevenuePerMonth = (loans, euroRate, dollarRate) => {
  const currentDate = dayjs(Date.now());
  const interestData = [];
  const interestLoans = loans.filter(loan => loan.rate !== "0%");
  interestLoans.forEach(loan => {
    const { interestAmount, months, client, dateDisbursed } = loan;
    const dateDiff = currentDate.diff(dateDisbursed, "month");
    const amount = convertCurrencyToInteger(interestAmount, euroRate, dollarRate);
    interestData.push({
      client,
      months,
      amount: Math.round(amount / months),
      monthsAgo: dateDiff
    });
  });
  const monthlyInterest = getMonthlyInterest(interestData);
  return sumMonthlyInterest(monthlyInterest);
};

const getMonthlyInterest = interestData => {
  const interestArray = [];
  interestData.forEach(interest => {
    const max = 12;
    if (interest && interest?.months < max) {
      const maxDiff = max - interest.monthsAgo;
      // TODO this needs to be cleaned up it is preventing revenue chart from loading
      const isBefore = Array(maxDiff < 0 ? 0 : maxDiff).fill(0);
      const isCurrent = Array(Number(interest.months)).fill(interest.amount);

      interestArray.push([...isBefore, ...isCurrent]);
    } else {
      interestArray.push(Array(Number(max)).fill(interest.amount));
    }
  });
  return interestArray;
};
const sumMonthlyInterest = array => {
  const newArray = [];
  array.forEach(sub => {
    sub.forEach((num, index) => {
      if (newArray[index]) {
        newArray[index] += num;
      } else {
        newArray[index] = num;
      }
    });
  });
  return newArray;
};
