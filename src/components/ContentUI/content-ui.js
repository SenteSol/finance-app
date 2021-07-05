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
  ListItemText
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import PeopleIcon from "@material-ui/icons/People";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import AvTimerIcon from "@material-ui/icons/AvTimer";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Logo from "../Logo/logo-view";
import { username } from "./utils";
import { useStyles, useStylesBase } from "./contentStyles";

export default function ContentUI({ children, props: { history } }) {
  const [user, setUser] = useState("");
  const classes = useStyles();
  const classesBase = useStylesBase();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const authState = useSelector(state => state?.authentication);
  useEffect(() => {
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

  return (
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
              {user}
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
                  {index === 0 ? <AvTimerIcon /> : index === 1 ? <PeopleIcon /> : <AttachMoneyIcon />}
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
  );
}
