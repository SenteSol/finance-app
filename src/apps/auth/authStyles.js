import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(13),
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
  btn: {
    backgroundColor: "#dd4b39",
    color: "white",
    width: "100%",
    padding: "9px",
    border: "none",
    borderRadius: "4px",
    margin: "5px 0",
    opacity: "0.85",
    display: "inline-block",
    fontsize: "0.875rem",
    lineHeight: "20px",
    textDecoration: "none",
    textAlign: "center"
  },
  companyLogo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    color: "#ee475b",
    margin: "30px 0",
    fontWeight: 800
  },
  authTitle: {
    color: "#808080",
    fontWeight: 400
  },
  authLink: {
    color: "#4a90e2"
  },
  authMessage: {
    color: "black",
    fontWeight: 400,
    margin: "30px 0"
  }
}));
