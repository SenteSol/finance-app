import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";
import GetPayments from "./get-payments";
import ContentUI from "../../../components/content-ui";
import { getPayments } from "../actions/payments.actions";
import { useStyles } from "./paymentStyles";

const GetPaymentsView = props => {
  const {
    match: {
      params: { id }
    }
  } = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  const payments = useSelector(state => state?.payments.payments);

  useEffect(() => {
    dispatch(getPayments(id));
  }, []);
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
        <span className={classes.addButtonComponent}>
          <Link to={{ pathname: `/payments/add-payment/${id}` }} className={classes.link}>
            <Button variant="contained" className={classes.addButton}>
              <AddIcon className={classes.addIcon} />
              <strong>Add Payment</strong>
            </Button>
          </Link>
        </span>
        <GetPayments payments={payments} />
      </Grid>
    </ContentUI>
  );
};

export default GetPaymentsView;
