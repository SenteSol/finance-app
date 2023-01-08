import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
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
  addButtonComponent: {
    display: "inline-block",
    margin: "30px 0px"
  },
  link: {
    textDecoration: "none"
  }
}));
