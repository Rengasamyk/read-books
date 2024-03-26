import React from "react";
import styled from "@emotion/styled";
import {
  CardContent,
  Card as MuiCard,
  Paper as MuiPaper,
  Snackbar,
  Alert,
} from "@mui/material";
import { spacing } from "@mui/system";

const Card = styled(MuiCard)(spacing);
const Paper = styled(MuiPaper)(spacing);


function VdnSnackbar({
  snackbarResponse,
  setSnackbarResponse,
}) {
  // Do not return the snackbar unless open === true to prevent extra space at the bottom of the form.
  if (!snackbarResponse.open) {
    return <></>;
  }

  return (
    <Card mb={6}>
      <CardContent>
        <Paper mt={3}>
          <Snackbar
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            open={snackbarResponse.open}
            autoHideDuration={4000}
            onClose={() =>
              setSnackbarResponse({
                ...snackbarResponse,
                open: false,
              })
            }
            >
                  <Alert
                elevation={6}
                variant="filled"
                onClose={() =>
                    setSnackbarResponse({
                      ...snackbarResponse,
                      open: false,
                    })
                  }
                severity="success"
              >
              {snackbarResponse.message}
              </Alert>
        
            </Snackbar>
        </Paper>
      </CardContent>
    </Card>
  );
}
export default VdnSnackbar;
