import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { spacing } from "@mui/system";
import { Grid, Typography, CardContent, Card as MuiCard, } from "@mui/material";
//import FeaturedBooks from "../student/FeaturedBooks";
import Books from "./Books";

const Card = styled(MuiCard)(spacing);

function Dashboard(props) {
  const { selectDashboard } = props;

  useEffect(selectDashboard, [selectDashboard]);

  return (
    <Fragment>
      <div style={{ textAlign: "center" }}>
        <Typography variant="h4" gutterBottom display="inline">
          My Books
        </Typography>
      </div>
      <Grid container spacing={6} mt={1}>
        
        <Grid item xs={12} sm={12}>
          <Card mb={4}>
            <CardContent>
              <Books />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}

Dashboard.propTypes = {
  targets: PropTypes.arrayOf(PropTypes.object).isRequired,
  setTargets: PropTypes.func.isRequired,
  selectDashboard: PropTypes.func.isRequired,
};

export default Dashboard;
