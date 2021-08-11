import React from "react";
import { Link } from "react-router-dom";
import { Form } from "formik";
import { Grid, Button } from "@material-ui/core";
import TextFieldWrapper from "../../../components/forms-ui/TextField";
import { useStyles } from "../authStyles";

const RegisterForm = props => {
  const { firstName, lastName, email, password, confirmPassword } = props;
  const classes = useStyles();

  return (
    <Form>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextFieldWrapper id="firstName" label="First Name" name="firstName" value={firstName} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextFieldWrapper id="lastName" label="Last Name" name="lastName" value={lastName} />
        </Grid>
        <Grid item xs={12}>
          <TextFieldWrapper id="email" label="Email Address" name="email" value={email} />
        </Grid>
        <Grid item xs={12}>
          <TextFieldWrapper id="password" label="Password" name="password" value={password} type="password" />
        </Grid>
        <Grid item xs={12}>
          <TextFieldWrapper
            id="confirmPassword"
            label="Confirm Password"
            name="confirmPassword"
            value={confirmPassword}
            type="password"
          />
        </Grid>
        <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
          Sign Up
        </Button>
        <Grid container justify="flex-start">
          <Grid item>
            <Link to="/" variant="body2" className={classes.authLink}>
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Form>
  );
};

export default RegisterForm;
