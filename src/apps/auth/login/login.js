import React from "react";
import { Link } from "react-router-dom";
import { Form } from "formik";
import { Grid, Button } from "@material-ui/core";
import TextFieldWrapper from "../../../components/FormsUI/TextField";
import { useStyles } from "../authStyles";

const Login = ({ formik }) => {
  const { email, password } = formik;
  const classes = useStyles();

  return (
    <Form id="loginForm">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextFieldWrapper label="Email Address" name="email" value={email} id="email" />
        </Grid>
        <Grid item xs={12}>
          <TextFieldWrapper label="Password" name="password" value={password} type="password" id="password" />
        </Grid>
        <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
          LogIn
        </Button>
        <Grid container justify="flex-start">
          <Grid item>
            <Link to="/register" variant="body2" className={classes.authLink}>
              Do not have an account? Sign Up
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Form>
  );
};

export default Login;
