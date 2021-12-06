import {
  getMostValuedCustomers,
  calculatePopularCurrency,
  calculateRevenuePerMonth
} from "../../../../views/dashboard/utils";

const loans = [
  {
    _id: "60fac1f73a79da04161573d0",
    loanId: "lYRonEBxk",
    client: "Africa power and equipment LTD",
    managerEmail: "nserekopaul@gmail.com",
    amount: "$2,500.00",
    rate: "5%",
    dateDisbursed: "2020-06-19",
    months: 14,
    interestAmount: "$1,750.00",
    totalOwed: "$50.00",
    comment: "Finance support for APE",
    __v: 0,
    pendingPrinciple: "50"
  },
  {
    _id: "60fac21e90714e041a6b3ae6",
    loanId: "vr2sb54Mb",
    client: "Africa power and equipment LTD",
    managerEmail: "nserekopaul@gmail.com",
    amount: "$3,000.00",
    rate: "5%",
    dateDisbursed: "2021-06-16",
    months: 1,
    interestAmount: "$150.00",
    totalOwed: "$2,315.00",
    comment: "Supporting Finance for APE",
    __v: 0,
    pendingPrinciple: "$2,315.00"
  },
  {
    _id: "60fac4f2245394048402bd90",
    loanId: "qHcD7WiEs",
    client: "Aretha Mayangi",
    managerEmail: "nserekopaul@gmail.com",
    amount: "UGX 2,000,000.00",
    rate: "0%",
    dateDisbursed: "2021-07-23",
    months: 0,
    interestAmount: "UGX 0.00",
    totalOwed: "UGX 2,000,000.00",
    comment: "Land Purchase",
    __v: 0
  },
  {
    _id: "60facad2404a380489a7d65e",
    loanId: "8FxJUOkMq",
    client: "Ivan Nowamukama",
    managerEmail: "nserekopaul@gmail.com",
    amount: "UGX 50,000.00",
    rate: "0%",
    dateDisbursed: "2021-07-02",
    months: 1,
    interestAmount: "UGX 0.00",
    totalOwed: "UGX 50,000.00",
    comment: "Support a friend",
    __v: 0
  },
  {
    _id: "60fc4c55fd45b918920bcfa1",
    loanId: "6HsWY3JDN",
    client: "Test User",
    managerEmail: "nserekopaul@gmail.com",
    amount: "UGX 8,000,000.00",
    rate: "10%",
    dateDisbursed: "2020-01-07",
    months: 20,
    interestAmount: "UGX 16,000,000.00",
    totalOwed: "UGX 24,000,000.00",
    comment: "rand",
    __v: 0
  },
  {
    _id: "60fc5f38fd45b918920bcfca",
    loanId: "V0ejq6c_4",
    client: "Xenic Mark",
    managerEmail: "nserekopaul@gmail.com",
    amount: "€8,000.00",
    rate: "12%",
    dateDisbursed: "2020-03-24",
    months: 17,
    interestAmount: "€16,320.00",
    totalOwed: "€20,720.00",
    comment: "random",
    __v: 0
  },
  {
    _id: "60fc7fe4b8a2ac18969aec0d",
    loanId: "uagmvM5jR",
    client: "Ivan Nowamukama",
    managerEmail: "nserekopaul@gmail.com",
    amount: "UGX 9,000,000.00",
    rate: "16%",
    dateDisbursed: "2021-02-02",
    months: 6,
    interestAmount: "UGX 8,640,000.00",
    totalOwed: "UGX 17,640,000.00",
    comment: "xoxo",
    __v: 0
  },
  {
    _id: "611a50714437c8163d94d834",
    loanId: "OaWdrlAFE",
    client: "Africa Power and Equipment",
    managerEmail: "nserekopaul@gmail.com",
    amount: "$2,500.00",
    pendingPrinciple: "$2,500.00",
    rate: "5%",
    dateDisbursed: "2021-07-12",
    months: 0,
    interestAmount: "$0.00",
    totalOwed: "$2,500.00",
    __v: 0
  },
  {
    _id: "611a5122fd43fa169d790689",
    loanId: "luoA8ZyUo",
    client: "Africa Power and Equipment",
    managerEmail: "nserekopaul@gmail.com",
    amount: "$2,500.00",
    pendingPrinciple: "$2,500.00",
    rate: "5%",
    dateDisbursed: "2020-08-12",
    months: 12,
    interestAmount: "$1,500.00",
    totalOwed: "$4,000.00",
    __v: 0
  }
];
test("Get most valued customers", () => {
  expect(getMostValuedCustomers(loans, 4300, 3500)).toStrictEqual({
    "Africa Power and Equipment": 1500,
    "Africa power and equipment LTD": 1900,
    "Ivan Nowamukama": 2468.5714285714284,
    "Test User": 4571.428571428572,
    "Xenic Mark": 19584
  });
});

test("Calculate currency Popularity", () => {
  expect(calculatePopularCurrency(loans)).toStrictEqual([
    ["USD", 41],
    ["UGX", 21],
    ["EUR", 38]
  ]);
});

test("Calculate Monthly Revenue", () => {
  const expected = [1631, 1631, 2042, 2042, 2042, 2042, 2042, 2192, 1631, 1631, 1631, 1631];
  expect(calculateRevenuePerMonth(loans, 4300, 3500)).toEqual(expect.arrayContaining(expected));
});
