import React from "react";
import { Form } from "formik";
import { Button, Grid } from "@material-ui/core";
import TextFieldWrapper from "../../../components/forms-ui/TextField";
import { useStyles } from "./editClientStyles";

const EditClient = ({ onClick, formik }) => {
  const classes = useStyles();
  const {
    values: { clientName, address, city, country, clientContactEmail, clientContactNumber }
  } = formik;
  return (
    <Form className={classes.form}>
      <Grid container spacing={2} className={classes.grid}>
        <Grid item xs={12}>
          <TextFieldWrapper
            id="client"
            label="Client"
            name="clientName"
            defaultValue={clientName || "Client"}
            value={clientName}
          />
        </Grid>
        <Grid item xs={12} className={classes.grid}>
          <TextFieldWrapper
            id="address"
            label="Address"
            defaultValue={address || "Address"}
            name="address"
            value={address}
          />
        </Grid>
        <Grid item xs={12} className={classes.grid}>
          <TextFieldWrapper
            id="city"
            label="City"
            defaultValue={city || "City"}
            name="city"
            variant="filled"
            value={city}
          />
        </Grid>
        <Grid item xs={12} className={classes.grid}>
          <TextFieldWrapper
            id="country"
            label="Country"
            defaultValue={country || "Country"}
            name="country"
            value={country}
          />
        </Grid>
        <Grid item xs={12} className={classes.grid}>
          <TextFieldWrapper
            id="email"
            label="Email Address"
            defaultValue={clientContactEmail || "Email Address"}
            name="clientContactEmail"
            value={clientContactEmail}
          />
        </Grid>
        <Grid item xs={12} className={classes.grid}>
          <TextFieldWrapper
            id="contact"
            label="Tel No"
            defaultValue={clientContactNumber || "Tel No"}
            name="clientContactNumber"
            value={clientContactNumber}
          />
        </Grid>
        <Grid item xs={12} sm={6} className={classes.grid}>
          <Button type="submit" fullWidth variant="contained" className={classes.save} id="save">
            <strong>Save</strong>
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.grid}>
          <Button fullWidth variant="contained" className={classes.close} onClick={onClick} id="close">
            <strong>Close</strong>
          </Button>
        </Grid>
      </Grid>
    </Form>
  );
};

export default EditClient;
