import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import { Container, CssBaseline, Typography, Grid } from "@material-ui/core";
import RegisterForm from "./register-form";
import { registerUser } from "../actions/auth.actions";
import { useStyles } from "../authStyles";
import {
  CONFIRM_PASSWORD_REQUIRED,
  EMAIL_REQUIRED,
  FIRST_NAME_REQUIRED,
  INVALID_EMAIL_ADDRESS,
  LAST_NAME_REQUIRED,
  PASSWORD_REQUIRED
} from "../../../constants/views/auth";
import Logo from "../../../components/logo/logo-view";

const RegisterView = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const authState = useSelector(state => state?.authentication);
  useEffect(() => {
    if (Object.keys(authState.error).length > 0) {
      console.warn(Object.values(authState.error)[0]);
    } else if (authState?.isAuthenticated) {
      history.push("/dashboard");
    }
  }, [authState]);

  const classes = useStyles();

  const defaultValues = { firstName: "", lastName: "", email: "", password: "", confirmPassword: "" };

  const yupObject = Yup.object({
    firstName: Yup.string().required(FIRST_NAME_REQUIRED),
    lastName: Yup.string().required(LAST_NAME_REQUIRED),
    email: Yup.string().email(INVALID_EMAIL_ADDRESS).required(EMAIL_REQUIRED),
    password: Yup.string().required(PASSWORD_REQUIRED),
    confirmPassword: Yup.string().required(CONFIRM_PASSWORD_REQUIRED)
  });

  const handleSubmit = values => {
    const { firstName, lastName, email, password, confirmPassword } = values;
    const jsonData = {
      firstName,
      lastName,
      email,
      password,
      confirmPassword
    };
    dispatch(registerUser(jsonData));
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Grid container justify="flex-start">
          <Typography component="h1" variant="h3">
            <Logo size="big" />
          </Typography>
        </Grid>
        <Grid container justify="flex-start">
          <Typography component="h1" variant="h5" className={classes.authTitle}>
            Sign Up
          </Typography>
        </Grid>
        <Grid container justify="flex-start">
          <Typography component="h3" variant="h7" className={classes.authMessage}>
            Register a new account.
          </Typography>
        </Grid>
        <Formik initialValues={defaultValues} validationSchema={yupObject} onSubmit={handleSubmit}>
          {formik => <RegisterForm formik={formik} />}
        </Formik>
      </div>
    </Container>
  );
};

export default RegisterView;
