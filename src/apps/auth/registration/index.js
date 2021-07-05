import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import { useSnackbar } from "react-simple-snackbar";
import { Container, CssBaseline, Typography, Grid } from "@material-ui/core";
import Register from "./register";
import { openOptions, closeOptions } from "../../../utils/snackbar.styles";
import { registerUser } from "../actions/auth.actions";
import { useStyles } from "../authStyles";
import {
  CONFIRM_PASSWORD_REQUIRED,
  EMAIL_REQUIRED,
  FIRST_NAME_REQUIRED,
  INVALID_EMAIL_ADDRESS,
  LAST_NAME_REQUIRED,
  PASSWORD_REQUIRED
} from "../../../constants/apps/auth";

const RegisterView = () => {
  const [openSnackbar] = useSnackbar(openOptions);
  const [closeSnackbar] = useSnackbar(closeOptions);
  const dispatch = useDispatch();
  const registerState = useSelector(state => state?.authentication);
  useEffect(() => {
    if (Object.keys(registerState.error).length > 0) {
      closeSnackbar(Object.values(registerState.error)[0]);
    } else if (registerState?.createUser?.message) {
      openSnackbar(registerState.createUser.message);
    }
  }, [registerState]);

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
          <Typography component="h1" variant="h3" className={classes.companyLogo}>
            $enteSol
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
          {formik => <Register formik={formik} />}
        </Formik>
      </div>
    </Container>
  );
};

export default RegisterView;
