import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import { Button, Grid } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import AddPayments from "./add-payments";
import ContentUI from "../../../components/content-ui";
import { useStyles } from "./addPaymentsStyles";

import { AMOUNT_REQUIRED, CURRENCY_REQUIRED, DATE_PAID_REQUIRED } from "../../../constants/views/payments";
import { addPayment } from "../../../redux/actions/payments/actions/payments.actions";

const AddPaymentsView = props => {
  const {
    match: {
      params: { id }
    }
  } = props;
  const history = useHistory();
  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState(Date.now());
  const [paymentValues, setPaymentValues] = useState({
    currency: ""
  });
  const classes = useStyles();

  const paymentError = useSelector(state => state?.payments.error);
  useEffect(() => {
    if (paymentError?.message) {
      console.warn(paymentError.message);
    }
  }, [paymentError]);

  const defaultValues = {
    amount: 0,
    comment: "",
    datePaid: selectedDate,
    currency: paymentValues.currency
  };

  const yupObject = Yup.object({
    amount: Yup.string().required(AMOUNT_REQUIRED),
    comment: Yup.string(),
    datePaid: Yup.string().required(DATE_PAID_REQUIRED),
    currency: Yup.string().required(CURRENCY_REQUIRED)
  });

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const handleChange = e => {
    const { value } = e.target;
    setPaymentValues({
      ...paymentValues,
      [e.target.name]: value
    });
  };

  const handleSubmit = async (values, onSubmitProps) => {
    const { amount, comment, datePaid, currency } = values;

    const jsonData = { amount, comment, datePaid, currency };
    await dispatch(addPayment(jsonData, id));
    onSubmitProps.resetForm();
  };

  const closePage = () => {
    history.push(`/payments/${id}`);
  };

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
          <Link to={{ pathname: `/payments/${id}` }} className={classes.link}>
            <Button variant="contained" className={classes.addButton}>
              <ArrowBackIcon className={classes.addIcon} />
              <strong>Go Back</strong>
            </Button>
          </Link>
        </span>
        <Formik enableReinitialize initialValues={defaultValues} validationSchema={yupObject} onSubmit={handleSubmit}>
          {formik => (
            <AddPayments
              pageId={id}
              formik={formik}
              onClick={closePage}
              handleDateChange={handleDateChange}
              handleSelectChange={handleChange}
              paymentValues={paymentValues}
            />
          )}
        </Formik>
      </Grid>
    </ContentUI>
  );
};

export default AddPaymentsView;
