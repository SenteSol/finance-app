import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import { CssBaseline, Typography, Container, Grid } from "@material-ui/core";
import LoginForm from "./login-form";
import Logo from "../../../components/logo";
import { loginUser } from "../../../redux/actions/auth/actions/auth.actions";
import { useStyles } from "../authStyles";
import { EMAIL_REQUIRED, INVALID_EMAIL_ADDRESS, PASSWORD_REQUIRED } from "../../../constants/views/auth";

const LoginView = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const authState = useSelector(state => state?.authentication);
  useEffect(() => {
    if (authState?.error && Object.keys(authState?.error).length > 0) {
      console.warn(Object.values(authState.error)[0]);
    } else if (authState?.isAuthenticated) {
      history.push("/dashboard");
    }
  }, [authState]);

  const classes = useStyles();
  const defaultValues = { email: "", password: "" };

  const yupObject = Yup.object({
    email: Yup.string().email(INVALID_EMAIL_ADDRESS).required(EMAIL_REQUIRED),
    password: Yup.string().required(PASSWORD_REQUIRED)
  });

  const handleSubmit = values => {
    const { email, password } = values;
    const jsonData = {
      email,
      password
    };
    dispatch(loginUser(jsonData));
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Grid container justifyContent="flex-start">
          <Typography component="h1" variant="h3">
            <Logo size="big" />
          </Typography>
        </Grid>
        <Grid container justifyContent="flex-start">
          <Typography component="h1" variant="h5" className={classes.authTitle}>
            Welcome back
          </Typography>
        </Grid>
        <Typography component="h3" variant="h6" className={classes.authMessage}>
          Please enter your email address and password to access your dashboard.
        </Typography>
        <Formik initialValues={defaultValues} validationSchema={yupObject} onSubmit={handleSubmit}>
          {formik => <LoginForm formik={formik} />}
        </Formik>
      </div>
    </Container>
  );
};

export default LoginView;
