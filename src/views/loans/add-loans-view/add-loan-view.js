import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { Formik } from "formik";
import dayjs from "dayjs";
import * as Yup from "yup";
import ContentUI from "../../../components/content-ui";
import AddLoan from "./add-loan";
import {
  CLIENT_REQUIRED,
  AMOUNT_REQUIRED,
  RATE_REQUIRED,
  DATE_DISBURSED_REQUIRED
} from "../../../constants/views/loans";
import { addLoan } from "../actions/loan.actions";
import { getClients } from "../../clients/actions/client.actions";

const AddLoanView = props => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState(Date.now());
  const [clientValues, setClientValues] = useState({
    clientName: "",
    currency: ""
  });

  const loanError = useSelector(state => state?.loans.error);
  const loans = useSelector(state => state?.clients.clients);
  useEffect(() => {
    if (loanError?.message) {
      console.warn(loanError.message);
    }
    dispatch(getClients());
  }, []);

  const defaultValues = {
    client: clientValues.clientName,
    amount: "",
    rate: "",
    comment: "",
    date: "",
    selectedDate,
    currency: clientValues.currency
  };

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const yupObject = Yup.object({
    client: Yup.string().min(3).required(CLIENT_REQUIRED),
    amount: Yup.string().required(AMOUNT_REQUIRED),
    rate: Yup.string().required(RATE_REQUIRED),
    selectedDate: Yup.string().required(DATE_DISBURSED_REQUIRED),
    comment: Yup.string()
  });

  const handleChange = e => {
    const { value } = e.target;
    setClientValues({
      ...clientValues,
      [e.target.name]: value
    });
  };

  const handleSubmit = async (values, onSubmitProps) => {
    const { client, amount, rate, comment, currency } = values;
    const dateDisbursed = dayjs(selectedDate).format("YYYY-MM-DD");

    const jsonData = { client, amount, rate, comment, dateDisbursed, currency };
    await dispatch(addLoan(jsonData));
    onSubmitProps.resetForm();
  };

  const closePage = () => {
    history.push("/loans");
  };

  return (
    <ContentUI props={props}>
      <Formik enableReinitialize initialValues={defaultValues} validationSchema={yupObject} onSubmit={handleSubmit}>
        {formik => (
          <AddLoan
            formik={formik}
            onClick={closePage}
            handleDateChange={handleDateChange}
            clients={loans}
            handleSelectChange={handleChange}
            clientValues={clientValues}
          />
        )}
      </Formik>
    </ContentUI>
  );
};

export default AddLoanView;
