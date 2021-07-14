import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  root: {
    width: "100%"
  },
  container: {
    maxHeight: 440,
    borderRadius: "4px"
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
  tableHead: {
    background: "blue"
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
  clientGrid: {
    marginLeft: "10px"
  },
  actionEditIcons: {
    color: "#54BCCF",
    marginRight: "20px",
    "&:hover": {
      cursor: "pointer",
      color: "black"
    }
  }
}));
