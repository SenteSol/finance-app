import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  form: {
    padding: "80px 100px",
    background: "#fff",
    borderRadius: "5px",
    boxShadow: "0 0px 0 1px rgba(0, 0, 0, 0.2)"
  },
  grid: {
    marginTop: "10px"
  },
  save: {
    background: "#32b8cb",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#32b8cb",
      color: "#fff"
    }
  },
  datePicker: {
    width: "100%"
  },
  close: {
    background: "#B7BCBC",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#B7BCBC",
      color: "#fff"
    }
  },
  formControl: {
    width: "100%"
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));
