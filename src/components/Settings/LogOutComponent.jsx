import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Slide from '@mui/material/Slide';
import React, { forwardRef } from "react";
import { Typography } from '@mui/material';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function LogOutComponent({open , handleClose}) {

    return (

        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"

        >
            <DialogContent >
                <DialogContentText sx={{ color: "white", fontSize: "18px", fontWeight: "bold" }} id="alert-dialog-slide-description">
                    Are You Sure You Want To LogOut?
                </DialogContentText>
            </DialogContent>
            <Typography variant='div' component="div" sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "10px 0"
            }}>

                <Button onClick={handleClose}
                    sx={{
                        background: "transparent",
                        border: "1px solid white",
                        padding: "5px 15px",
                        color: "white",
                        marginRight: "10px",
                        fontWeight: "600"
                    }}
                >
                    Cancel
                </Button>
                <Button onClick={handleClose}
                    sx={{
                        background: "#7DB00E",
                        border: "1px solid white",
                        padding: "5px 15px",
                        color: "black",
                        marginLeft: "10px",
                        fontWeight: "600",
                        "&:hover":{
                            color: "white"
                        }
                    }}
                >
                    Yes, Logout
                </Button>
            </Typography>
        </Dialog>
    );
}

export default LogOutComponent