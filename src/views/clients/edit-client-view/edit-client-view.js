import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import ContentUI from "../../../components/content-ui";
import EditClient from "./edit-client";
import { getClient, editClient } from "../actions/client.actions";

const EditClientView = props => {
  const {
    match: {
      params: { id }
    }
  } = props;
  const history = useHistory();
  const dispatch = useDispatch();
  const client = useSelector(state => state?.clients.client);

  useEffect(() => {
    if (Object.keys(client).length === 0) {
      dispatch(getClient(id));
    }
  }, [client]);

  const defaultValues = {
    clientName: client.clientName,
    address: client.address,
    city: client.city,
    country: client.country,
    clientContactEmail: client.clientContactEmail,
    clientContactNumber: client.clientContactNumber
  };

  const yupObject = Yup.object({
    clientName: Yup.string(),
    address: Yup.string(),
    city: Yup.string(),
    country: Yup.string(),
    clientContactEmail: Yup.string(),
    clientContactNumber: Yup.string()
  });

  const handleSubmit = async values => {
    const { clientName, address, city, country, clientContactEmail, clientContactNumber } = values;

    const jsonData = { clientName, address, city, country, clientContactEmail, clientContactNumber };

    dispatch(editClient(jsonData, id));
  };

  const closePage = () => {
    history.push("/clients");
  };
  return (
    <ContentUI props={props}>
      <Formik enableReinitialize initialValues={defaultValues} validationSchema={yupObject} onSubmit={handleSubmit}>
        {formik => <EditClient formik={formik} onClick={closePage} />}
      </Formik>
    </ContentUI>
  );
};

export default EditClientView;
