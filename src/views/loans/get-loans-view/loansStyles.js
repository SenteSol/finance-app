import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  clientGrid: {
    marginLeft: "10px"
  },
  actionEditIcons: {
    color: "#54BCCF",
    marginRight: "20px",
    transition: "color 1000ms",
    "&:hover": {
      cursor: "pointer",
      color: "black"
    }
  }
}));
