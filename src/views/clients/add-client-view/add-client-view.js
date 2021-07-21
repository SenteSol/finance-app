import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import { useSnackbar } from "react-simple-snackbar";
import ContentUI from "../../../components/content-ui";
import AddClient from "./add-client";
import { addClient } from "../actions/client.actions";

import {
  ADDRESS_REQUIRED,
  CITY_REQUIRED,
  COUNTRY_REQUIRED,
  CLIENT_EMAIL_REQUIRED,
  CLIENT_NUMBER_REQUIRED,
  CLIENT_NAME_REQUIRED
} from "../../../constants/views/clients";
import { closeOptions } from "../../../utils/snackbar.styles";

const AddClientsView = props => {
  const history = useHistory();
  const [closeSnackbar] = useSnackbar(closeOptions);
  const dispatch = useDispatch();

  const clientError = useSelector(state => state?.clients.error);
  useEffect(() => {
    if (clientError?.message) {
      closeSnackbar(clientError.message);
    }
  }, [clientError]);
  const defaultValues = {
    clientName: "",
    address: "",
    city: "",
    country: "",
    clientContactEmail: "",
    clientContactNumber: ""
  };

  const yupObject = Yup.object({
    clientName: Yup.string().required(CLIENT_NAME_REQUIRED),
    address: Yup.string().required(ADDRESS_REQUIRED),
    city: Yup.string().required(CITY_REQUIRED),
    country: Yup.string().required(COUNTRY_REQUIRED),
    clientContactEmail: Yup.string().required(CLIENT_EMAIL_REQUIRED),
    clientContactNumber: Yup.string().required(CLIENT_NUMBER_REQUIRED)
  });

  const handleSubmit = async values => {
    const { clientName, address, city, country, clientContactEmail, clientContactNumber } = values;

    const jsonData = { clientName, address, city, country, clientContactEmail, clientContactNumber };
    await dispatch(addClient(jsonData));
  };

  const closePage = () => {
    history.push("/clients");
  };

  return (
    <ContentUI props={props}>
      <Formik initialValues={defaultValues} validationSchema={yupObject} onSubmit={handleSubmit}>
        {formik => <AddClient formik={formik} onClick={closePage} />}
      </Formik>
    </ContentUI>
  );
};

export default AddClientsView;