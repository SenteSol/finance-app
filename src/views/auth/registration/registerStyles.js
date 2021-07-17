import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: "#4a90e2"
  },
  companyLogo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    color: "#ee475b",
    margin: "30px 0",
    fontWeight: 800
  },
  signUp: {
    color: "#808080",
    fontWeight: 400
  },
  signIn: {
    color: "#4a90e2"
  },
  signUpMessage: {
    color: "black",
    fontWeight: 400,
    margin: "30px 0"
  }
}));
