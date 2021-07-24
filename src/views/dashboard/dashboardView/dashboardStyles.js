import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    background: "#eee"
  },
  tableHead: {
    background: "blue"
  },
  section: {
    height: "340px",
    paddingTop: 5,
    borderRadius: "5px",
    backgroundColor: "#fff",
    padding: "0 50px",
    fontSize: "12px"
  }
}));
