import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import VisibilityIcon from "@material-ui/icons/Visibility";
import ContentUI from "../../../components/content-ui";
import { getLoans } from "../actions/loan.actions";
import { useStyles } from "./loansStyles";
import TableList from "../../../components/table";
import { columns, pathname, section } from "../../../constants/views/loans";
import AddButton from "../../../components/addButton";

const GetLoansView = props => {
  const [allLoans, setAllLoans] = useState([]);
  const classes = useStyles();
  const dispatch = useDispatch();
  const loans = useSelector(state => state?.loans.loans);

  useEffect(() => {
    dispatch(getLoans());
  }, []);

  useEffect(() => {
    setAllLoans(cleanTableData(loans));
  }, [loans]);

  const cleanTableData = tableData =>
    tableData.map(data => ({
      id: data.loanId,
      client: data.client,
      amount: data.amount,
      pendingPrinciple: data.pendingPrinciple,
      rate: data.rate,
      dateDisbursed: data.dateDisbursed,
      months: data.months,
      interestAmount: data.interestAmount,
      totalOwed: data.totalOwed,
      comment: data.comment,
      buttons: (
        <>
          <Link to={{ pathname: `/payments/${data.loanId}/` }} className={classes.link}>
            <VisibilityIcon className={classes.actionEditIcons} />
          </Link>
        </>
      )
    }));

  return (
    <ContentUI props={props}>
      {" "}
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        xs={12}
        spacing={3}
        className={classes.clientGrid}
      >
        <AddButton pathname={pathname} section={section} />
        <TableList tableBodies={allLoans} tableHeaders={columns} />
      </Grid>
    </ContentUI>
  );
};

export default GetLoansView;
