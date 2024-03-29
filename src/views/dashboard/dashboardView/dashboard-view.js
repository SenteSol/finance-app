import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLoans } from "../../../redux/actions/loans/actions/loan.actions";
import ContentUI from "../../../components/content-ui";
import { getMostValuedCustomers, calculatePopularCurrency, calculateRevenuePerMonth } from "../utils";
import { getCurrencyRates } from "../../../api/currencyConverter";
import Dashboard from "./dashboard";

const DashboardView = props => {
  const dispatch = useDispatch();
  const [valuedCustomers, setValuedCustomers] = useState([]);
  const [euroRate, setEuroRate] = useState(undefined);
  const [dollarRate, setDollarRate] = useState(undefined);
  const [currencyDemand, setCurrencyDemand] = useState([]);
  const [monthlyRevenue, setMonthlyRevenue] = useState([]);
  const loans = useSelector(state => state?.loans.loans);
  const loader = useSelector(state => state?.loans.loading);

  useEffect(() => {
    (async () => {
      if (loans.length) {
        const euro = await getCurrencyRates("EUR", "USD");
        const dollar = await getCurrencyRates("USD", "UGX");
        setValuedCustomers(getMostValuedCustomers(loans, euroRate === undefined, dollarRate === undefined));
        setCurrencyDemand(calculatePopularCurrency(loans, euroRate === undefined, dollarRate === undefined));
        setMonthlyRevenue(calculateRevenuePerMonth(loans, euroRate === undefined, dollarRate === undefined));
        setEuroRate(euro);
        setDollarRate(dollar);
      }
    })();
  }, [loans]);

  useEffect(() => {
    (async () => {
      await dispatch(getLoans());
    })();
  }, []);

  return (
    <ContentUI props={props}>
      {!loader ? (
        <Dashboard clients={valuedCustomers} currency={currencyDemand} monthlyRevenue={monthlyRevenue} />
      ) : (
        <>Loading</>
      )}
    </ContentUI>
  );
};

export default DashboardView;
