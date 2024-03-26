import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  IconButton,
  Typography,
  Toolbar,
} from "@mui/material";
import withStyles from "@mui/styles/withStyles";
import CloseIcon from "@mui/icons-material/Close";
import Collapse from "@mui/material/Collapse";
import MenuItem from "@mui/material/MenuItem";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import useMediaQuery from "@mui/material/useMediaQuery";

const styles = (theme) => ({
  closeIcon: {
    marginRight: theme.spacing(0.5),
  },
  headSection: {
    width: 200,
  },
  blackList: {
    backgroundColor: theme.palette.common.black,
    height: "100%",
  },
  noDecoration: {
    textDecoration: "none !important",
  },
});

function NavigationDrawer(props) {
  const { open, onClose, anchor, classes, menuItems, selectedItem, theme } =
    props;
  const isWidthUpSm = useMediaQuery(theme.breakpoints.up("sm"));

  window.onresize = () => {
    if (isWidthUpSm && open) {
      onClose();
    }
  };
 
  const [Open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Drawer variant="temporary" open={open} onClose={onClose} anchor={anchor}>
      <Toolbar className={classes.headSection}>
        <ListItem
          style={{
            paddingTop: theme.spacing(0),
            paddingBottom: theme.spacing(0),
            height: "100%",
            justifyContent: anchor === "left" ? "flex-start" : "flex-end",
          }}
          disableGutters
        >
          <ListItemIcon className={classes.closeIcon}>
            <IconButton
              onClick={onClose}
              aria-label="Close Navigation"
              size="large"
            >
              <CloseIcon color="primary" />
            </IconButton>
          </ListItemIcon>
        </ListItem>
      </Toolbar>
      <List className={classes.blackList}>
        {menuItems.map((element) => {
          if (element.submenu === undefined && element.onClick === undefined) {
            return (
              <Link
                key={element.name}
                to={element.link}
                className={classes.noDecoration}
                onClick={onClose}
              >
                <ListItem
                  button
                  selected={selectedItem === element.name}
                  /**
                   * We disable ripple as it will make a weird animation
                   * with primary and secondary color
                   */
                  disableRipple
                  disableTouchRipple
                >
                  <ListItemIcon>{element.icon.mobile?element.icon.mobile:element.icon}</ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="subtitle1" className="text-white">
                        {element.name}
                      </Typography>
                    }
                  />
                </ListItem>
              </Link>
            );
          } else if (
            element.submenu === undefined &&
            element.onClick !== undefined
          ) {
            return (
              <ListItem button key={element.name} onClick={element.onClick}>
                <ListItemIcon>{element.icon}</ListItemIcon>
                <ListItemText
                  primary={
                    <Typography variant="subtitle1" className="text-white">
                      {element.name}
                    </Typography>
                  }
                />
              </ListItem>
            );
          } else {
            return (
              <>
                <ListItem button onClick={handleClick}>
                  <ListItemIcon>{element.icon}</ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="subtitle1" className="text-white">
                        {element.name}
                      </Typography>
                    }
                  />
                   {Open ? <ExpandLessIcon color="primary" fontSize="large" /> : <ExpandMoreIcon color="primary" fontSize="large"/>} 
                </ListItem>

                <Collapse in={Open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {element.submenu.map((sub) => {
                      return (
                        <ListItem>
                           <ListItemIcon>{sub.icon}</ListItemIcon>
                          <ListItemText
                            primary={
                              <MenuItem
                              divider={true}
                                className="text-white"
                                key={sub.name}
                                component={Link}
                                to={sub.link}
                                onClick={onClose}
                              >
                                {sub.name}
                              </MenuItem>
                            }
                          />
                        </ListItem>
                      );
                    })}
                  </List>
                </Collapse>
              </>
            );
          }
        })}
      </List>
    </Drawer>
  );
}

NavigationDrawer.propTypes = {
  anchor: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  menuItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  classes: PropTypes.object.isRequired,
  selectedItem: PropTypes.string,
};

export default withStyles(styles, { withTheme: true })(NavigationDrawer);
