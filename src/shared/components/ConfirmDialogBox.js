import React from "react";
import styled from "@emotion/styled";
import { spacing } from "@mui/system";
import {
  Button as MuiButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
} from "@mui/material";


const Button = styled(MuiButton)(spacing);

function ConfirmDialogBox(props) {
  const { onClose, open } = props;
  const { dialogDeleteResponse, setDialogDeleteResponse } = props;
  const handleClose = () => {
    onClose(!open);
  };
  return (
    <React.Fragment>
    <Dialog
      onClose={handleClose}
      aria-labelledby="Delete-dialog-title"
      open={dialogDeleteResponse.open}
    >
      <DialogTitle id="Delete-dialog-title">
        {dialogDeleteResponse.title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="Delete-dialog-description">
          {dialogDeleteResponse.message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          color="secondary"
          onClick={() =>
            setDialogDeleteResponse({
              ...dialogDeleteResponse,
              open: false,
            })
          }
        >
          Close
        </Button>

        <Button color="secondary" onClick={dialogDeleteResponse.onConfirm}>
         {dialogDeleteResponse.isMiner? "View":"Confirm"} 
        </Button>
      </DialogActions>
    </Dialog>
    </React.Fragment>
  );
}

export default ConfirmDialogBox;
