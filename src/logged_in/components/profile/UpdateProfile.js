import React, { useContext, useState } from "react";
import {
  Box,
  TextField,
  Button,
  Grid,
  Typography,
  Snackbar,
  Alert,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
} from "@mui/material";
import withStyles from "@mui/styles/withStyles";
import { number } from "prop-types";
import { useHistory } from "react-router-dom";
import mockdata from "../../../shared/data/mockdata";
import FormDataContext from "../../../shared/context/FormDataContext";

const styles = (theme) => ({
  formContentWrapper: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(4),
      marginRight: theme.spacing(4),
    },
    maxWidth: 1280,
    width: "70%",
  },
  wrapper: {
    minHeight: "60vh",
  },
  noDecoration: {
    textDecoration: "none !important",
  },
});

const UpdateProfile = (props) => {
  const { classes } = props;
  const history = useHistory();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const { formData, setFormData } = useContext(FormDataContext);

  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPasswordError("");
    if (formData.password !== formData.confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }
    else {
      setOpenSnackbar(true);
        
        setTimeout(() => {
         history.push("/good-reads/mybooks")
        }, 1000);
      }
    
    
     
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackbar(false);
  };

  return (
    <Box display="flex" justifyContent="center">
      <div className={classes.formContentWrapper}>
        <Grid container spacing={2}>
          <Box mb={3}>
            <Typography
              variant="h4"
              align="center"
              gutterBottom
              marginBottom={5}
            >
              Update Profile
            </Typography>
            <Snackbar
              open={openSnackbar}
              autoHideDuration={5000}
              onClose={handleCloseSnackbar}
              anchorOrigin={{ vertical: "top", horizontal: "center" }}
            >
              <Alert
                elevation={6}
                variant="filled"
                onClose={handleCloseSnackbar}
                severity="success"
              >
                Profile Updated Successfully!
              </Alert>
            </Snackbar>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={5}>

                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email || "renga@sami.com"}
                    onChange={handleChange}
                    required
                    fullWidth
                    InputProps={{ style: { height: "45px" } }}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Password"
                    name="password"
                    type="password"
                    value={formData.password || "******"}
                    onChange={handleChange}
                    required
                    fullWidth
                    InputProps={{ style: { height: "45px" } }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword || "******"}
                    onChange={handleChange}
                    required
                    fullWidth
                    InputProps={{ style: { height: "45px" } }}
                    error={passwordError !== ""}
                    helperText={passwordError}
                  />
                </Grid>
                {/* <Grid item xs={12} sm={6} />*/}
                <Grid item xs={12} sm={6} /> 
                <Grid item xs={12} sm={6}>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={() =>
                      history.push("/good-reads/mybooks")
                    }
                  >
                    Cancel
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Save
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </div>
    </Box>
  );
};

export default withStyles(styles, { withTheme: true })(UpdateProfile);
