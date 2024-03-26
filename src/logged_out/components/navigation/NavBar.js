import React, { memo } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Button,
  Hidden,
  IconButton,
  Box,
} from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import withStyles from "@mui/styles/withStyles";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import BookIcon from "@mui/icons-material/Book";
import NavigationDrawer from "../../../shared/components/NavigationDrawer";
import logo from "../../../images/logo.jpg"

const styles = (theme) => ({
  appBar: {
    boxShadow: theme.shadows[6],
    backgroundColor: "#000000f7 !important",
    color: "#fff !important",
    height: "100px",
    // backgroundColor: theme.palette.common.white
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  menuButtonText: {
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.h6.fontWeight,
  },
  brandText: {
    fontFamily: "'Baloo Bhaijaan', cursive",
    fontWeight: 400,
  },
  noDecoration: {
    textDecoration: "none !important",
  },
});

function NavBar(props) {
  const {
    classes,
    openRegisterDialog,
    openLoginDialog,
    handleMobileDrawerOpen,
    handleMobileDrawerClose,
    mobileDrawerOpen,
    selectedTab,
  } = props;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const menuItems = [
    {
      link: "/",
      name: "Home",
      icon: <HomeIcon className="text-white" />,
    },

    {
      link: "/",
      name: "Blog",
      icon: <BookIcon className="text-white" />,
    },
      {
        name: "Sign Up",
        onClick: openRegisterDialog,
        icon: <HowToRegIcon className="text-white" />
      },
    {
      name: "Login",
      onClick: openLoginDialog,
      icon: <LockOpenIcon className="text-white" />,
    },
  ];

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Box display="flex" alignItems="center">
            <Box mr={1}>
              <IconButton
                aria-label="Open Navigation"
                color="primary"
                onClick={() => (window.location.href = "/")}
              >
                <img src={logo} alt="logo" className={classes.logo} />
              </IconButton>
            </Box>
          </Box>
          <div>
            <Hidden mdUp>
              <IconButton
                className={classes.menuButton}
                onClick={handleMobileDrawerOpen}
                aria-label="Open Navigation"
                size="large"
              >
                <MenuIcon color="primary" />
              </IconButton>
            </Hidden>
            <Hidden mdDown>
              {menuItems.map((items, index) => {
                if (
                  items.submenu === undefined &&
                  items.onClick === undefined
                ) {
                  return (
                    <Link
                      key={items.name}
                      to={items.link}
                      className={classes.noDecoration}
                      onClick={handleMobileDrawerClose}
                    >
                      <Button
                        style={{ color: "#fff" }}
                        size="large"
                        classes={{ text: classes.menuButtonText }}
                      >
                        {items.name}
                      </Button>
                    </Link>
                  );
                } else if (
                  items.submenu === undefined &&
                  items.onClick !== undefined
                ) {
                  return (
                    <Button
                      style={{ color: "#fff" }}
                      size="large"
                      onClick={items.onClick}
                      classes={{ text: classes.menuButtonText }}
                      key={items.name}
                    >
                      {items.name}
                    </Button>
                  );
                } else {
                  return (
                    <>
                      <Button
                        style={{ color: "#fff" }}
                        size="large"
                        classes={{ text: classes.menuButtonText }}
                        id="basic-button"
                        aria-controls={open ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleClick}
                        key={items.name}
                      >
                        {items.name}
                      </Button>
                      <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                          "aria-labelledby": "basic-button",
                        }}
                        PaperProps={{
                          style: {
                            width: "15ch",
                            height: "15ch",
                            backgroundColor: "#000000f7",
                            color: "#FFFFFF",
                          },
                        }}
                      >
                        {items.submenu.map((sub) => {
                          return (
                            <MenuItem
                              key={sub.name}
                              component={Link}
                              to={sub.link}
                              onClick={handleClose}
                            >
                              {sub.name}
                            </MenuItem>
                          );
                        })}
                      </Menu>
                    </>
                  );
                }
              })}
            </Hidden>
          </div>
        </Toolbar>
      </AppBar>
      <NavigationDrawer
        menuItems={menuItems}
        anchor="right"
        open={mobileDrawerOpen}
        selectedItem={selectedTab}
        onClose={handleMobileDrawerClose}
      />
    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  handleMobileDrawerOpen: PropTypes.func,
  handleMobileDrawerClose: PropTypes.func,
  mobileDrawerOpen: PropTypes.bool,
  selectedTab: PropTypes.string,
  openRegisterDialog: PropTypes.func.isRequired,
  openLoginDialog: PropTypes.func.isRequired,
};

export default withStyles(styles, { withTheme: true })(memo(NavBar));
