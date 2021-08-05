import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

export const useStylesBase = makeStyles({
  root: {
    textDecoration: "none",
    background: "#333",
    color: "#00aba6"
  },
  listItems: {
    "&:hover": {
      color: "#fff"
    }
  },
  contentToolBar: {
    background: "#fff",
    color: "#ee475b;"
  },
  contentToolBarItems: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between"
  },
  avatar: {
    width: "130px",
    display: "flex",
    paddingTop: "5px",
    justifyContent: "space-between"
  },
  user: {
    marginTop: "2px"
  },
  smallScreen: {
    padding: "80px 60px",
    background: "#eee",
    height: "100vh"
  },
  smallScreenTitle: {
    fontSize: "36px",
    marginBottom: "30px",
    fontWeight: "lighter",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  smallScreenMessage: {
    color: "#777",
    fontSize: "14px",
    marginBottom: "20px",
    alignItems: "center",
    justifyContent: "center"
  },
  smallScreenButton: {
    background: "#32b8cb",
    color: "#fff",
    fontSize: "13px",
    lineHeight: "13px",
    textTransform: "none"
  }
});
export const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  paper: {
    background: "black",
    color: "white"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar
  },
  sideBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    overflow: "hidden",
    ...theme.mixins.toolbar
  },
  sideBarTitle: {
    color: "#fff",
    paddingLeft: "30px",
    fontStyle: "italic"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    background: "#eee",
    height: "100vh"
  },
  contentLink: {
    display: "flex",
    justifyContent: "space-between",
    textDecoration: "none",
    color: "#00aba6"
  },
  sideBarDivider: {
    position: "absolute",
    bottom: "100px",
    left: 0,
    right: 0
  },
  sideBarIcons: {
    position: "absolute",
    bottom: "12px"
  },
  icon: {
    color: "#00aba6"
  }
}));
