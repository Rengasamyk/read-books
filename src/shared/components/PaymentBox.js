import React, { useState } from "react";
import styled from "@emotion/styled";
import {
  Button,
  CardContent,
  Dialog,
  Grid,
  DialogActions,
  DialogContent,
  Card as MuiCard,
  Paper as MuiPaper,
  InputLabel,
  Typography,
  IconButton,
  // FormControlLabel,
  // Radio,
  // RadioGroup,
} from "@mui/material";
import { spacing } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
// import PaymentWalletIcon from "@mui/icons-material/AccountBalanceWallet";
// import CreditCardIcon from "@mui/icons-material/CreditCard";
import Payment from "../../../src/images/payment.png";

const Card = styled(MuiCard)(spacing);
const Paper = styled(MuiPaper)(spacing);
const MyInputLabel = styled(InputLabel)`
  font-weight: bold;
  display: inline-block;
  margin-right: 8px;
`;

function PaymentBox(props) {
  const [open, setOpen] = useState(false);
  const { formDialogResponse, setFormDialogResponse } = props;
  // const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("vn");
  const handleClose = () => {
    setOpen(!open);
  };

  // const handlePaymentMethodChange = (event) => {
  //   setSelectedPaymentMethod(event.target.value);
  // };

  return (
    <React.Fragment>
      <Card mb={6}>
        <CardContent>
          <Paper mt={4}>
            <Dialog
              onClick={handleClose}
              aria-labelledby="Delete-dialog-title"
              open={formDialogResponse.open}
              maxWidth="md"
              height="100%"
            >
              <IconButton
                aria-label="close"
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  margin: "8px",
                }}
                onClick={() =>
                  setFormDialogResponse({
                    ...formDialogResponse,
                    open: false,
                  })
                }
              >
                <CloseIcon />
              </IconButton>
              <DialogContent>
                <Grid container spacing={2} marginBottom={1}>
                  <div className="modal-header">
                    <img src={Payment} alt="Payment" width="100%" />
                  </div>
                </Grid>
                <Grid container spacing={2} marginTop={3}>
                  <Grid item xs={12} sm={6}>
                    <MyInputLabel>Course Name:</MyInputLabel>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle2">
                      {formDialogResponse.details}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <MyInputLabel>University:</MyInputLabel>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle2">
                      {formDialogResponse.university}
                    </Typography>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <MyInputLabel>Student ID:</MyInputLabel>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography>{formDialogResponse.studentId}</Typography>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <MyInputLabel>Credit Hour:</MyInputLabel>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography>{formDialogResponse.creditHour}</Typography>
                  </Grid>
                  
                  <Grid item xs={12} sm={6}>
                    <MyInputLabel>Total Cost:</MyInputLabel>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography>{formDialogResponse.totalCost}</Typography>
                  </Grid>
                  {/* <Grid item xs={12}>
                    <RadioGroup
                      row
                      aria-label="payment-method"
                      name="payment-method"
                      value={selectedPaymentMethod}
                      onChange={handlePaymentMethodChange}
                    >
                      <FormControlLabel
                        value="vn"
                        control={<Radio />}
                        label={
                          <>
                            <PaymentWalletIcon sx={{ marginRight: "8px" }} />
                            Pay Using ViridiNumu Wallet
                          </>
                        }
                      />
                      <FormControlLabel
                        value="pp"
                        control={<Radio />}
                        label={
                          <>
                            <CreditCardIcon sx={{ marginRight: "8px" }} />
                            Credit Card/Debit Card/Net Banking
                          </>
                        }
                      />
                    </RadioGroup>
                  </Grid> */}
                </Grid>
              </DialogContent>
              <DialogActions>
                <Button
                  color="primary"
                  onClick={formDialogResponse.onConfirm}
                  fullWidth
                  sx={{
                    backgroundColor: "#0070ba",
                    color: "white",
                    fontStyle: "italic",
                    textTransform: "none",
                    "&:hover": { backgroundColor: "#005c9a" },
                  }}
                >
                  Pay
                </Button>
              </DialogActions>
            </Dialog>
          </Paper>
        </CardContent>
      </Card>
    </React.Fragment>
  );
}
export default PaymentBox;
