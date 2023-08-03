import React, { useContext} from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { BorrowersContext } from "../data-access/BorrowersContext";

export default function ConfirmationDialog({
  title,
  content,
  action,
  open,
  setOpen,
  actionCallBack,
  params,
}) {
  const {setLoader} = useContext(BorrowersContext)

  const handleAction = async () => {
    setOpen(false);
    setLoader(true)
    params ? await actionCallBack({ ...params }) : await actionCallBack();
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {content}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAction}>{action}</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
