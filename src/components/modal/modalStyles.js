import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: 500,
    borderRadius: "5px",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(5, 5, 3)
  },
  actionDeleteIcons: {
    color: "#54BCCF",
    marginLeft: "20px",
    transition: "color 1000ms",
    "&:hover": {
      cursor: "pointer",
      color: "black"
    }
  },
  modalTitle: {
    position: "absolute",
    color: "#fff",
    borderRadius: "5px 5px 0 0",
    left: "0",
    right: "0",
    top: "-1em",
    background: "#32b8cb",
    padding: "5px 0 5px 40%"
  },
  delete: {
    background: "#32b8cb",
    padding: "8px 18px",
    borderRadius: "5px",
    fontSize: "13px",
    lineHeight: "13px",
    border: "none",
    outline: "none",
    cursor: "pointer",
    color: "#fff",
    margin: "5px 0 5px 30%"
  },
  close: {
    background: "#B7BCBC",
    padding: "8px 18px",
    borderRadius: "5px",
    fontSize: "13px",
    lineHeight: "13px",
    border: "none",
    outline: "none",
    cursor: "pointer",
    color: "#fff",
    margin: "5px 0 5px 5px"
  }
}));
