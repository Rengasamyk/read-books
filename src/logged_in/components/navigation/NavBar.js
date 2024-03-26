import React, { Fragment, useRef, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "classnames";
import {
  AppBar,
  Toolbar,
  //Typography,
  Avatar,
  Drawer,
  List,
  IconButton,
  ListItem,
  ListItemIcon,
  Menu,
  MenuItem,
  //ListItemText,
  Hidden,
  Tooltip,
  Box,
} from "@mui/material";
import Badge from "@mui/material/Badge";
import { useHistory } from "react-router-dom";
import NotificationsIcon from "@mui/icons-material/Notifications";
import withStyles from "@mui/styles/withStyles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ImageIcon from "@mui/icons-material/Image";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import PeopleIcon from "@mui/icons-material/People";
import SchoolIcon from "@mui/icons-material/School";
import ShieldIcon from "@mui/icons-material/Shield";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
// import MenuIcon from "@mui/icons-material/Menu";
//import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
//import MessagePopperButton from "./MessagePopperButton";
//import SideDrawer from "./SideDrawer";
//import Balance from "./Balance";
import NavigationDrawer from "../../../shared/components/NavigationDrawer";
//import useMediaQuery from "@mui/material/useMediaQuery";
import VnLogo from "../../../images/VN_Logo_Final_White-2-01.png";

const styles = (theme) => ({
  appBar: {
    boxShadow: theme.shadows[6],
    // backgroundColor: theme.palette.common.darkblue,
    backgroundColor: "#000000f7 !important",
    color: "#fff",
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      marginLeft: 0,
    },
  },
  appBarToolbar: {
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    [theme.breakpoints.up("md")]: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
    },
    [theme.breakpoints.up("lg")]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
  },
  accountAvatar: {
    backgroundColor: theme.palette.secondary.main,
    height: 24,
    width: 24,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(1.5),
      marginRight: theme.spacing(1.5),
    },
  },
  drawerPaper: {
    height: "100%vh",
    whiteSpace: "nowrap",
    border: 0,
    width: theme.spacing(7),
    overflowX: "hidden",
    marginTop: theme.spacing(8),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
    //backgroundColor: theme.palette.common.black,
    backgroundColor: "#000000f7 !important",
  },
  logo: {
    maxWidth: 200,
    height: "50px",
    // width:"100px",
    //sizes:"220x50px",
  },
  smBordered: {
    [theme.breakpoints.down("sm")]: {
      borderRadius: "50% !important",
    },
  },
  menuLink: {
    textDecoration: "none",
    color: theme.palette.text.primary,
  },
  iconListItem: {
    width: "auto",
    borderRadius: theme.shape.borderRadius,
    paddingTop: 11,
    paddingBottom: 11,
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  textPrimary: {
    color: theme.palette.primary.main,
  },
  mobileItemSelected: {
    backgroundColor: `${theme.palette.primary.main} !important`,
  },
  brandText: {
    fontFamily: "'Baloo Bhaijaan', cursive",
    fontWeight: 400,
  },
  username: {
    paddingLeft: 0,
    paddingRight: theme.spacing(2),
  },
  justifyCenter: {
    justifyContent: "center",
  },
  permanentDrawerListItem: {
    justifyContent: "center",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
});

function NavBar(props) {
  const { selectedTab, classes } = props;
  // Will be use to make website more accessible by screen readers
  const links = useRef([]);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [anchorMenu, setAnchorMenu] = React.useState(null);
  const history = useHistory();

  const toggleMenu = (event) => {
    setAnchorMenu(event.currentTarget);
  };
  const closeMenu = () => {
    setAnchorMenu(null);
  };

  const openMobileDrawer = useCallback(() => {
    setIsMobileOpen(true);
  }, [setIsMobileOpen]);

  const closeMobileDrawer = useCallback(() => {
    setIsMobileOpen(false);
  }, [setIsMobileOpen]);

 
  let menuItems = [];
  
    menuItems = [
      {
        link: "/good-reads/mybooks",
        name: "Dashboard",
        // onClick: closeMobileDrawer,
        icon: {
          desktop: (
            <DashboardIcon
              className={
                selectedTab === "Dashboard" ? classes.textPrimary : "text-white"
              }
              fontSize="small"
            />
          ),
          mobile: <DashboardIcon className="text-white" />,
        },
      },
     
      
      {
        link: "/good-reads/updateprofile",
        name: "Update Profile",
        // onClick: closeMobileDrawer,
        icon: {
          desktop: (
            <Avatar
              alt="profile picture"
              src={`${process.env.PUBLIC_URL}/images/logged_in/profilePicture.jpg`}
              className={classNames(classes.accountAvatar)}
            />
          ),
          mobile: <AccountBalanceIcon className="text-white" />,
        },
      },
      {
        link: "/",
        name: "Logout",
        icon: {
          desktop: (
            <PowerSettingsNewIcon className="text-white" fontSize="small" />
          ),
          mobile: <PowerSettingsNewIcon className="text-white" />,
        },
      },
    ];
  
  return (
    <Fragment>
      <AppBar position="sticky" className={classes.appBar}>
        <Toolbar className={classes.appBarToolbar}>
          <Box display="flex" alignItems="left">
         
          </Box>
          <Box display="flex" alignItems="center">
            <Box mr={1}>
              <IconButton
                aria-label="Open Navigation"
                onClick={openMobileDrawer}
                color="primary"
              >
                <img src={VnLogo} alt="logo" className={classes.logo} />
              </IconButton>
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            width="100%"
          >
           
              <>
            <Tooltip title="Notification">
              <IconButton
                aria-owns={Boolean(anchorMenu) ? "menu-appbar" : undefined}
                aria-haspopup="true"
                onClick={toggleMenu}
                color="inherit"
                size="large"
              >
                <Badge badgeContent={1} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Tooltip>
            <Menu
              id="menu-appbar"
              anchorEl={anchorMenu}
              open={Boolean(anchorMenu)}
              onClose={closeMenu}
            >
          
              <MenuItem
                onClick={() =>
                  history.push("/good-reads/mybooks")
                }
              >
                 Ronaldo requested for a course approval
              </MenuItem>
            </Menu>
            </>
           
          
            {/* {isWidthUpSm && (
              <Box mr={3}>
                <Balance
                  balance={2573}
                  openAddBalanceDialog={openAddBalanceDialog}
                />
              </Box>
            )} */}
            {/* <MessagePopperButton messages={messages} /> */}
            {/* <ListItem
              disableGutters
              className={classNames(classes.iconListItem, classes.smBordered)}
            >
              <Avatar
                alt="profile picture"
                src={`${process.env.PUBLIC_URL}/images/logged_in/profilePicture.jpg`}
                className={classNames(classes.accountAvatar)}
              />
              {isWidthUpSm && (
                <ListItemText
                  className={classes.username}
                  primary={
                    <Typography color="textPrimary">Username</Typography>
                  }
                />
              )}
            </ListItem> */}
          </Box>
          {/* <IconButton
            onClick={openDrawer}
            color="primary"
            aria-label="Open Sidedrawer"
            size="large"
          >
            <SupervisorAccountIcon />
          </IconButton>
          <SideDrawer open={isSideDrawerOpen} onClose={closeDrawer} /> */}
        </Toolbar>
      </AppBar>
      <Hidden smDown>
        <Drawer //  both drawers can be combined into one for performance
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          open={false}
        >
          <List>
            {menuItems.map((element, index) => (
              <Link
                to={element.link}
                className={classes.menuLink}
                onClick={element.onClick}
                key={index}
                ref={(node) => {
                  links.current[index] = node;
                }}
              >
                <Tooltip
                  title={element.name}
                  placement="right"
                  key={element.name}
                >
                  <ListItem
                    selected={selectedTab === element.name}
                    button
                    divider={index !== menuItems.length - 1}
                    className={classes.permanentDrawerListItem}
                    onClick={() => {
                      links.current[index].click();
                    }}
                    aria-label={
                      element.name === "Logout"
                        ? "Logout"
                        : `Go to ${element.name}`
                    }
                  >
                    <ListItemIcon className={classes.justifyCenter}>
                      {element.icon.desktop}
                    </ListItemIcon>
                  </ListItem>
                </Tooltip>
              </Link>
            ))}
          </List>
        </Drawer>
      </Hidden>
      <NavigationDrawer
        menuItems={menuItems.map((element) => ({
          link: element.link,
          name: element.name,
          icon: element.icon.mobile,
        }))}
        // menuItems={menuItems}
        anchor="left"
        open={isMobileOpen}
        selectedItem={selectedTab}
        onClose={closeMobileDrawer}
      />
    </Fragment>
  );
}

NavBar.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedTab: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(NavBar);
