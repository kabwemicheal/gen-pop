import React, { useContext, useState } from "react";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { BorrowersContext } from "../../data-access/BorrowersContext";
import { COLLECTION_KEYS } from "../../utils/CollectionKeys";

const initialValues = {
  salutation: "",
  firstName: "",
  lastName: "",
  amount: "",
  tenure: "",
  date: "",
  address: "",
};

const SALUTATION_VALUES = {
  Male: "Male",
  Female: "Female",
  Other: "Other"
}

const BorrowerModal = ({ borrowerParams }) => {
  const {
    createBorrowerContext,
    setIsEditing,
    editBorrowerContext,
    isEditing,
    open,
    setOpen,
    setLoader
  } = useContext(BorrowersContext);

  const valuesToInialize =
    isEditing && !!borrowerParams.borrower
      ? borrowerParams.borrower
      : initialValues;

  const [formFields, setFormFields] = useState({ ...valuesToInialize });
 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isEditing) {
      setIsEditing(!isEditing);
      editBorrowerContext(
        borrowerParams.id,
        COLLECTION_KEYS.BORROWERS,
        formFields
      );
    }
    if (open) {
      setOpen(!open);
      createBorrowerContext(formFields, COLLECTION_KEYS.BORROWERS);
    }
    setLoader(true)
  };

  const handleClose = () => {
    setIsEditing(false);
    setOpen(false);
  };

  return (
    <>
      <Dialog
        maxWidth={"md"}
        fullWidth
        open={open || isEditing}
        onClose={handleClose}
      >
        <DialogTitle>Create Borrower</DialogTitle>
        <DialogContent>
          <div className="space-y-2">
            <div className="flex space-x-2 items-center justify-center">
              <FormControl sx={{ minWidth: 120 }} variant="standard">
                <InputLabel id="demo-simple-select-standard-label">
                  Salutation
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  label="Salutation"
                  name="salutation"
                  required
                  onChange={handleChange}
                  value={formFields.salutation}
                  defaultValue={formFields.salutation}
                >
                  <MenuItem value={SALUTATION_VALUES.Male}>Male</MenuItem>
                  <MenuItem value={SALUTATION_VALUES.Female}>Female</MenuItem>
                  <MenuItem value={SALUTATION_VALUES.Other}>Other</MenuItem>
                </Select>
              </FormControl>
              <TextField
                id="FirstName"
                label="First Name"
                name="firstName"
                type="text"
                fullWidth
                required
                variant="standard"
                onChange={handleChange}
                value={formFields.firstName}
              />
              <TextField
                id="LastName"
                name="lastName"
                label="Last Name"
                type="text"
                fullWidth
                required
                variant="standard"
                onChange={handleChange}
                value={formFields.lastName}
              />
            </div>
            <div className="flex items-center space-x-2">
              <TextField
                id="AmountToBorrow"
                label="Amount to borrow"
                name="amount"
                type="number"
                fullWidth
                required
                variant="standard"
                onChange={handleChange}
                value={formFields.amount}
              />
              <TextField
                id="Tenure"
                label="Tenure in months"
                name="tenure"
                type="number"
                fullWidth
                variant="standard"
                required
                onChange={handleChange}
                value={formFields.tenure}
              />
              <TextField
                id="Date"
                name="date"
                type="date"
                fullWidth
                required
                label="Date"
                InputLabelProps={{ shrink: true }}
                variant="standard"
                onChange={handleChange}
                value={formFields.date}
              />
            </div>
            <div>
              <TextField
                id="Address"
                label="Address"
                name="address"
                type="address"
                required
                fullWidth
                variant="standard"
                onChange={handleChange}
                value={formFields.address}
              />
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleSubmit}>
            Save
          </Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default BorrowerModal;
