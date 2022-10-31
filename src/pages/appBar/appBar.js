import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Drawer,
  CssBaseline,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { getPageName } from "../../utilities/stringUtilities";
import "./appBar.css";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
    width: 30,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: 0,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    width: drawerWidth,
  },
}));

const ApplicationBar = () => {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const theme = useTheme();
  const location = useLocation();

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const itemsList = [
    {
      text: "Lawn & Garden",
      icon: <InboxIcon />,
      path: "/lawn-garden",
    },
    {
      text: "Hunter Orders",
      icon: <InboxIcon />,
      path: "/order",
    },
    {
      text: "Lastec Order ",
      icon: <MailIcon />,
      path: "/lastec",
    },
    {
      text: "Customers ",
      icon: <MailIcon />,
      path: "/customers",
    },
    {
      text: "Suppliers",
      icon: <MailIcon />,
      path: "/suppliers",
    },
    {
      text: "Forwarders",
      icon: <MailIcon />,
      path: "/forwarders",
    },
    {
      text: "Parts Management",
      icon: <MailIcon />,
      path: "/parts",
    },
    {
      text: "Documents",
      icon: <MailIcon />,
      path: "/documents",
    },
    {
      text: "Commissions ",
      icon: <MailIcon />,
      path: "/commissions",
    },
  ];

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {getPageName(location.pathname)}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={toggleDrawer}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />

        <List className="navBar">
          {itemsList.map((item) => {
            const { text, icon, path } = item;
            return (
              <NavLink to={path} className="navLink">
                <ListItem button key={text}>
                  {icon && <ListItemIcon>{icon}</ListItemIcon>}
                  <ListItemText primary={text} className="pageName" />
                </ListItem>
              </NavLink>
            );
          })}
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
      </main>
    </div>
  );
};

export default ApplicationBar;
