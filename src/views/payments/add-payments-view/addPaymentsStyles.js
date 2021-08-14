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
  },
  clientGrid: {
    marginLeft: "10px"
  },
  addButtonComponent: {
    display: "inline-block",
    margin: "30px 0px"
  },
  addButton: {
    background: "#fff",
    color: "#97a2a2",
    paddingLeft: "40px",
    "&:hover": {
      backgroundColor: "#ffffff",
      color: "black"
    }
  },
  addIcon: {
    color: "#fff",
    background: "#97a2a2",
    position: "absolute",
    left: "0",
    height: "100%",
    width: "30px",
    borderRadius: "4px 0 0 4px"
  },
  link: {
    textDecoration: "none"
  }
}));
