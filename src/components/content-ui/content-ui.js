import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
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
import { Grid, Stack } from "@mui/material";
import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  People as PeopleIcon,
  AvTimer as AvTimerIcon,
  AccountCircle as AccountCircleIcon,
  ExitToApp as ExitToAppIcon,
  Apps as AppsIcon
} from "@mui/icons-material";
import Logo from "../logo/logo-view";
import CustomButton from "../customButton";
import { username } from "./utils";
import { useStyles, useStylesBase, StyledSmallScreen, SmallScreenMessage, SmallScreenTitle } from "./contentStyles";
import { SMALL_SCREEN_MESSAGE } from "../../constants/components/contentUI/content-ui";
import { logoutUser } from "../../redux/actions/auth/actions/auth.actions";
import { COLORS } from "../../styles/theme";

const ContentUI = ({ children }) => {
  const [user, setUser] = useState("");
  const [miniScreen, setMiniScreen] = useState(true);
  const classes = useStyles();
  const classesBase = useStylesBase();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const screenSize = window.matchMedia("(max-width: 998px)");
  const history = useHistory();
  const dispatch = useDispatch();

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

  const handleLogout = () => {
    dispatch(logoutUser());
    history.push("/");
  };

  const SmallScreen = (
    <StyledSmallScreen>
      <Stack justifyContent="center">
        <SmallScreenTitle>Sorry your screen is too small.</SmallScreenTitle>
        <SmallScreenMessage>{SMALL_SCREEN_MESSAGE}</SmallScreenMessage>
        <Grid container>
          <CustomButton
            background={COLORS.LIGHT_BLUE}
            fontcolor={COLORS.WHITE}
            hoverbackground={COLORS.LIGHT_BLUE}
            onClick={handleMiniScreen}
          >
            <Typography variant="w1">I understand but let me give it a try anyway!</Typography>
          </CustomButton>
        </Grid>
      </Stack>
    </StyledSmallScreen>
  );

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
                data-testid="drawer"
                color="inherit"
                aria-label="open drawer first"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, {
                  [classes.hide]: open
                })}
              >
                <MenuIcon data-testid="drawer" />
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
                <ListItem button key={index}>
                  <Link to={`/${text.toLowerCase()}`} className={classes.contentLink}>
                    <ListItemIcon className={classesBase.root}>
                      {index === 0 ? (
                        <AvTimerIcon className={classes.sideBarIcons} />
                      ) : index === 1 ? (
                        <PeopleIcon className={classes.sideBarIcons} />
                      ) : (
                        <AppsIcon className={classes.sideBarIcons} />
                      )}
                    </ListItemIcon>{" "}
                    <ListItemText primary={text} />{" "}
                  </Link>
                </ListItem>
              ))}
            </List>
            <List className={classes.sideBarDivider}>
              <ListItem button onClick={handleLogout}>
                <Link to="#" className={classes.contentLink}>
                  <ListItemIcon className={classesBase.root}>
                    <ExitToAppIcon className={classes.sideBarIcons} />
                  </ListItemIcon>
                  <ListItemText primary="Log Out" />
                </Link>
              </ListItem>
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
};

export default ContentUI;
