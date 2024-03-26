import React, { useState, useCallback, Fragment } from "react";
import PropTypes from "prop-types";
import LoginDialog from "../register_login/LoginDialog";
import TermsOfServiceDialog from "../register_login/TermsOfServiceDialog";
import ChangePasswordDialog from "../register_login/ChangePasswordDialog";
import ModalBackdrop from "../../../shared/components/ModalBackdrop";
function LoginDialogSelector(props) {
    const {
      dialogOpen,
      //openTermsDialog,
      openRegisterDialog,
      openLoginDialog,
      openChangePasswordDialog,
      onClose,
    } = props;
    const [loginStatus, setLoginStatus] = useState(null);
   
  
    const _onClose = useCallback(() => {
      setLoginStatus(null);
     
      onClose();
    }, [onClose, setLoginStatus]);
  
    const printDialog = useCallback(() => {
      switch (dialogOpen) {
        case "termsOfService":
          return <TermsOfServiceDialog onClose={openRegisterDialog} />;
        case "login":
          return (
            <LoginDialog
              onClose={_onClose}
              status={loginStatus}
              setStatus={setLoginStatus}
              openChangePasswordDialog={openChangePasswordDialog}
            />
          );
        case "changePassword":
          return (
            <ChangePasswordDialog
              setLoginStatus={setLoginStatus}
              onClose={openLoginDialog}
            />
          );
        default:
      }
    }, [
      dialogOpen,
      openChangePasswordDialog,
      openLoginDialog,
      _onClose,
      loginStatus,
      setLoginStatus,
      openRegisterDialog
    ]);
  
    return (
      <Fragment>
        {dialogOpen && <ModalBackdrop open />}
        {printDialog()}
      </Fragment>
    );
  }
  
  LoginDialogSelector.propTypes = {
    dialogOpen: PropTypes.string,
    openLoginDialog: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    openTermsDialog: PropTypes.func.isRequired,
    openChangePasswordDialog: PropTypes.func.isRequired,
  };
  
  export default LoginDialogSelector;