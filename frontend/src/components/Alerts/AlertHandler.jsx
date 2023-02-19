import React, { useEffect, useState } from "react";
import Alert from '@mui/material/Alert';
// import AlertTitle from '@mui/material/AlertTitle';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import IconButton from '@mui/material/IconButton';
import { Snackbar } from "@mui/material";

function AlertHandler(props) {
  const [show, setShow] = useState(false);
  const [severity , setSeverety] = useState("success");
  
  useEffect(() => {
    setShow(false);
        if (props.alertHandler.hasAlert) {
            setShow(true);
            setSeverety(props.alertHandler.alertType);
        }
  },[props.alertHandler]);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setShow(false);
    }
    const vertical = 'bottom';
    const horizontal = 'center';
  


  return (
    // <div className="fixed z-10 right-0 flex mx-2 mt-[-12px] bg-transparent alert d-flex">
    // {show ? (  
            // <Slide direction="down" in={show}  mountOnEnter unmountOnExit>
            <Snackbar 
                autoHideDuration={3000} 
                open={show}
                onClose={handleClose}
                anchorOrigin={{vertical, horizontal}}
                TransitionComponent={Slide}
                
                >
                <Alert variant="filled" severity={severity}
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setShow(false);
                            }}
                            >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                    >
                    {/* <AlertTitle>{props.alertHandler.alertTitle}</AlertTitle> */}
                    <div>
                        <h3 name="errorMessage">{props.alertHandler.alertMessage}</h3>
                    </div>
                </Alert>
            </Snackbar>
    //     ):(  
    //         <></>
    //         )}
    // </div>
  );
}

export default AlertHandler;
