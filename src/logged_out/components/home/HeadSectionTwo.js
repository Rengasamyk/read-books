import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Grid, Typography} from "@mui/material";
import withStyles from "@mui/styles/withStyles";
import useMediaQuery from "@mui/material/useMediaQuery";
import book from "../../../images/book-home.jpg";


const styles = (theme) => ({
  extraLargeButtonLabel: {
    fontSize: theme.typography.body1.fontSize,
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.h6.fontSize,
    },
  },
  extraLargeButton: {
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
  },
  card: {
    boxShadow: theme.shadows[4],
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(5.5),
      paddingBottom: theme.spacing(5.5),
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5),
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
    },
    [theme.breakpoints.down("xl")]: {
      width: "auto",
    },
  },
  wrapper: {
    //backgroundColor: theme.palette.secondary.main,
    backgroundImage: `url(${book})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: 650,
    position:"cover",
    backgroundPosition: "center",
    paddingBottom: theme.spacing(2),
  },  
  image: {
    maxWidth: "100%",
    verticalAlign: "middle",
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[4],
  },
  container: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(12),
    [theme.breakpoints.down("lg")]: {
      marginBottom: theme.spacing(9),
    },
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(6),
    },
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(3),
    },
  },
  containerFix: {
    [theme.breakpoints.up("md")]: {
      maxWidth: "none !important",
    },
  },
  waveBorder: {
    paddingTop: theme.spacing(4),
  },
});
function HeadSectionTwo(props) {
  const { classes, theme } = props;
  const isWidthUpLg = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <Fragment>
      <div className={classes.wrapper}>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center">
                <Grid item xs={12} mt={30} pl={6} pr={6}>
                      <Typography variant={isWidthUpLg ? "h4" : "h4"}style={{textAlign: "center",fontWeight:"900"}} >
                        <strong>A book is a dream that you hold in your hand</strong>
                      </Typography>
                 </Grid>
                  
                 <Grid item xs={12} mt={2} pl={6} pr={6} style={{textAlign: "center"}}>
                        <Typography
                          variant={isWidthUpLg ? "h4" : "h5"}
                         
                        >
              "Welcome to our book app!<br/>
              Continue exploring and dive into the world of literature.<br/>
              Sign up now to unlock unlimited reading experiences!"
                        </Typography>
                     </Grid>
                </Grid>
            </div>
    </Fragment>
  );
}

HeadSectionTwo.propTypes = {
  classes: PropTypes.object,
  theme: PropTypes.object,
};

export default withStyles(styles, { withTheme: true })(HeadSectionTwo);
