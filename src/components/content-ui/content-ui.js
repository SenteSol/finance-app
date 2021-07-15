import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import clsx from "clsx";
import { useTheme } from "@material-ui/core/styles";
import {
  Drawer,
  AppBar,
  Toolbar,
  List,
  CssBaseline,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Grid,
  Button
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import PeopleIcon from "@material-ui/icons/People";
import AvTimerIcon from "@material-ui/icons/AvTimer";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AppsIcon from "@material-ui/icons/Apps";
import Logo from "../logo/logo-view";
import { username } from "./utils";
import checkForToken from "../../utils/getToken";
import { useStyles, useStylesBase } from "./contentStyles";
import { SMALL_SCREEN_MESSAGE } from "../../constants/components/contentUI/content-ui";

export default function ContentUI({ children, props: { history } }) {
  const [user, setUser] = useState("");
  const [miniScreen, setMiniScreen] = useState(true);
  const classes = useStyles();
  const classesBase = useStylesBase();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const screenSize = window.matchMedia("(max-width: 1080px)");

  const authState = useSelector(state => state?.authentication);
  useEffect(() => {
    if (screenSize.matches) {
      setOpen(false);
    }
    screenSize.addEventListener("change", e => {
      if (e.matches) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    });
    if (!authState?.isAuthenticated) {
      history.push("/");
    }
    setUser(username(authState));
  }, [authState, user]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleMiniScreen = () => {
    setMiniScreen(!miniScreen);
  };
  const SmallScreen = (
    <div className={classesBase.smallScreen}>
      <Typography className={classesBase.smallScreenTitle}>Sorry your screen is too small.</Typography>
      <Typography className={classesBase.smallScreenMessage}>{SMALL_SCREEN_MESSAGE}</Typography>
      <Grid container justify="center">
        <Button
          variant="contained"
          color="secondary"
          className={classesBase.smallScreenButton}
          onClick={handleMiniScreen}
        >
          I understand but let me give it a try anyway!
        </Button>
      </Grid>
    </div>
  );

  checkForToken();

  return (
    <>
      {screenSize.matches && miniScreen ? (
        <>{SmallScreen}</>
      ) : (
        <div className={classes.root} id="content-ui">
          <CssBaseline />
          <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
              [classes.appBarShift]: open
            })}
          >
            <Toolbar className={classesBase.contentToolBar}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, {
                  [classes.hide]: open
                })}
              >
                <MenuIcon />
              </IconButton>
              <span className={classesBase.contentToolBarItems}>
                <Logo />
                <span className={classesBase.avatar}>
                  <AccountCircleIcon />
                  <span className={classesBase.user}>{user}</span>
                </span>
              </span>
            </Toolbar>
          </AppBar>
          <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open
            })}
            classes={{
              paper: clsx(
                {
                  [classes.drawerOpen]: open,
                  [classes.drawerClose]: !open
                },
                classesBase.root
              )
            }}
          >
            <div className={classes.sideBar}>
              <IconButton onClick={handleDrawerClose} className={classes.icon}>
                {theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
              </IconButton>
            </div>
            <Divider />
            <List>
              {["Dashboard", "Clients", "Loans"].map((text, index) => (
                <ListItem button key={text}>
                  <Link to={`/${text.toLowerCase()}`} className={classes.contentLink}>
                    <ListItemIcon className={classesBase.root}>
                      {index === 0 ? <AvTimerIcon /> : index === 1 ? <PeopleIcon /> : <AppsIcon />}
                    </ListItemIcon>{" "}
                    <ListItemText primary={text} />{" "}
                  </Link>
                </ListItem>
              ))}
            </List>
            <Divider />
          </Drawer>
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Typography paragraph>{children}</Typography>
          </main>
        </div>
      )}
    </>
  );
}
