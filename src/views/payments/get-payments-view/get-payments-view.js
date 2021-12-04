import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import ContentUI from "../../../components/content-ui";
import { getPayments } from "../actions/payments.actions";
import { useStyles } from "./paymentStyles";
import TableList from "../../../components/table";
import { columns, section } from "../../../constants/views/payments";
import AddButton from "../../../components/addButton";

const GetPaymentsView = props => {
  const {
    match: {
      params: { id }
    }
  } = props;
  const [allPayments, setAllPayments] = useState([]);
  const classes = useStyles();
  const dispatch = useDispatch();
  const payments = useSelector(state => state?.payments.payments);

  useEffect(() => {
    dispatch(getPayments(id));
  }, []);

  useEffect(() => {
    if (payments.isArray && payments.length > 0) {
      setAllPayments(cleanTableData(payments));
    }
  }, [payments]);

  const cleanTableData = tableData =>
    tableData.map(data => ({
      id: data.paymentId,
      amountPending: data.amountPending,
      previousPendingAmount: data.previousPendingAmount,
      amountPaid: data.amountPaid,
      datePaid: data.datePaid,
      comment: data.comment
    }));
  return (
    <ContentUI props={props}>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        xs={12}
        spacing={3}
        className={classes.clientGrid}
      >
        <AddButton pathname={`/payments/add-payment/${id}`} section={section} />
        <TableList tableBodies={allPayments} tableHeaders={columns} />
      </Grid>
    </ContentUI>
  );
};

export default GetPaymentsView;
