
import withStyles from "@mui/styles/withStyles";
import icons from "../src/logged_in/components/icon/arrow-drop-down.svg"
const styles = (theme) => ({
  "@global": {
    /**
     * Disable the focus outline, which is default on some browsers like
     * chrome when focusing elements
     */
    "*:focus": {
      outline: 0,
    },
    ".text-white": {
      color: theme.palette.common.white,
    },
    ".listItemLeftPadding": {
      paddingTop: `${theme.spacing(1.75)} !important`,
      paddingBottom: `${theme.spacing(1.75)} !important`,
      paddingLeft: `${theme.spacing(4)} !important`,
      [theme.breakpoints.down("md")]: {
        paddingLeft: `${theme.spacing(4)} !important`,
      },
      "@media (max-width:  420px)": {
        paddingLeft: `${theme.spacing(1)} !important`,
      },
    },
    ".container": {
      width: "100%",
      paddingRight: theme.spacing(4),
      paddingLeft: theme.spacing(4),
      marginRight: "auto",
      marginLeft: "auto",
      [theme.breakpoints.up("sm")]: {
        maxWidth: 540,
      },
      [theme.breakpoints.up("md")]: {
        maxWidth: 720,
      },
      [theme.breakpoints.up("lg")]: {
        maxWidth: 1170,
      },
    },
    ".header": {
      display: "block important",
      backgroundColor: "#4682B4",
      height: "50px",
      width: "100%",
      color: "white",
      fontSize: "1.5rem",
      paddingTop: "9px",
      paddingLeft: "10px",
      textAlign:"center",
      borderTopLeftRadius: "4px",
      borderTopRightRadius: " 4px",
    },
    ".row": {
      display: "flex",
      flexWrap: "wrap",
      marginRight: -theme.spacing(2),
      marginLeft: -theme.spacing(2),
    },
    ".container-fluid": {
      width: "100%",
      paddingRight: theme.spacing(2),
      paddingLeft: theme.spacing(2),
      marginRight: "auto",
      marginLeft: "auto",
      maxWidth: 1370,
    },
    ".lg-mg-top": {
      marginTop: `${theme.spacing(20)} !important`,
      [theme.breakpoints.down("lg")]: {
        marginTop: `${theme.spacing(18)} !important`,
      },
      [theme.breakpoints.down("md")]: {
        marginTop: `${theme.spacing(16)} !important`,
      },
      [theme.breakpoints.down("sm")]: {
        marginTop: `${theme.spacing(14)} !important`,
      },
    },
    ".lg-mg-bottom": {
      marginBottom: `${theme.spacing(20)} !important`,
      [theme.breakpoints.down("lg")]: {
        marginBottom: `${theme.spacing(18)} !important`,
      },
      [theme.breakpoints.down("md")]: {
        marginBottom: `${theme.spacing(16)} !important`,
      },
      [theme.breakpoints.down("sm")]: {
        marginBottom: `${theme.spacing(14)} !important`,
      },
    },
    ".lg-p-top": {
      paddingTop: `${theme.spacing(20)} !important`,
      [theme.breakpoints.down("lg")]: {
        paddingTop: `${theme.spacing(18)} !important`,
      },
      [theme.breakpoints.down("md")]: {
        paddingTop: `${theme.spacing(16)} !important`,
      },
      [theme.breakpoints.down("sm")]: {
        paddingTop: `${theme.spacing(14)} !important`,
      },
    },
    ".list-books-content": {
    padding: "0 0 80px",
    flex: 1,
    },
    ".bookshelf": {
    padding: "0 10px 20px"
    },
    ".bookshelf-title": {
    borderBottom: "1px dotted #4285f4",
    fontFamily: "sans-serif",
    fontSize: "1.2em",
    },
    ".bookshelf-books": {
    textAlign: "center"
    },
    ".books-grid": {
    listStyleType: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    },
    ".books-grid li": {
    padding: "10px 15px",
    textAlign: "left",
    },
    ".book" :{
  width: "140px",
    },
    ".book-title" :{
    fontSize: "0.8em",
    },
        ".book-authors" :{
    fontSize: "0.8em",
    },
        ".book-title": {
    marginTop: "10px",
},

".book-authors": {
    color: "#999",
    },
".book-top": {
    position: "relative",
    height: "200px",
    display: "flex",
    alignItems: "flex-end",
    },
".book-shelf-changer": {
    position: "absolute",
    right: 0,
    bottom: "-10px",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    background: "#2485f4",
    backgroundImage:`url(${icons})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "20px",
    boxShadow: "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)",
    },
".book-shelf-changer select": {
    width: "100%",
    height: "100%",
    opacity: 0,
    cursor: "pointer",
    },
".book-cover": {
    boxShadow: "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)",
    background: "#eee",
},

".book-cover-title": {
    padding: "20px 10px 0",
    textAlign: "center",
    fontSize: "0.8em",
}
  },
});

function globalStyles() {
  return null;
}

export default withStyles(styles, { withTheme: true })(globalStyles);
