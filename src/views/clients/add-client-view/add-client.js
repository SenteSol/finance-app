import React from "react";
import { Form } from "formik";
import { Button, Grid } from "@material-ui/core";
import TextFieldWrapper from "../../../components/forms-ui/TextField";
import { useStyles } from "./addClientStyles";

const AddClient = props => {
  const { clientName, address, city, country, clientContactEmail, clientContactNumber, onClick } = props;
  const classes = useStyles();
  return (
    <Form className={classes.form}>
      <Grid container spacing={2} className={classes.grid}>
        <Grid item xs={12}>
          <TextFieldWrapper id="client" label="Client" name="clientName" value={clientName} />
        </Grid>
        <Grid item xs={12} className={classes.grid}>
          <TextFieldWrapper id="address" label="Address" name="address" value={address} />
        </Grid>
        <Grid item xs={12} className={classes.grid}>
          <TextFieldWrapper id="city" label="City" name="city" value={city} />
        </Grid>
        <Grid item xs={12} className={classes.grid}>
          <TextFieldWrapper id="country" label="Country" name="country" value={country} />
        </Grid>
        <Grid item xs={12} className={classes.grid}>
          <TextFieldWrapper id="email" label="Email Address" name="clientContactEmail" value={clientContactEmail} />
        </Grid>
        <Grid item xs={12} className={classes.grid}>
          <TextFieldWrapper id="contact" label="Tel No" name="clientContactNumber" value={clientContactNumber} />
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

export default AddClient;
