import React from "react";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import { Form } from "formik";
import { Button, Grid, FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import { useStyles } from "./addLoanStyles";
import TextFieldWrapper from "../../../components/forms-ui/TextField";
import { CURRENCIES } from "../../../constants/views/loans";

const AddLoan = ({ formik, handleDateChange, onClick, handleSelectChange, clientValues, clients }) => {
  const {
    values: { rate, amount, comment, selectedDate }
  } = formik;
  const classes = useStyles();

  return (
    <Form className={classes.form}>
      <Grid container spacing={2} className={classes.grid}>
        <Grid item xs={12}>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">Client</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={clientValues.clientName}
              onChange={handleSelectChange}
              label="Client"
              name="clientName"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {clients.map(client => (
                <MenuItem value={client.clientName}>{client.clientName}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              margin="normal"
              id="date-picker-dialog"
              label="Date picker dialog"
              inputVariant="outlined"
              format="MM/dd/yyyy"
              value={selectedDate}
              onChange={handleDateChange}
              className={classes.datePicker}
              KeyboardButtonProps={{
                "aria-label": "change date"
              }}
            />
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid item xs={12}>
          <TextFieldWrapper id="rate" label="Rate" name="rate" value={rate} />
        </Grid>
        <Grid item xs={2}>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">Currency</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={clientValues.currency}
              onChange={handleSelectChange}
              label="Currency"
              name="currency"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {CURRENCIES.map(currency => (
                <MenuItem value={currency}>{currency}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={10}>
          <TextFieldWrapper id="amount" label="Amount" name="amount" value={amount} />
        </Grid>
        <Grid item xs={12}>
          <TextFieldWrapper id="comment" label="Comment" name="comment" value={comment} />
        </Grid>
        <Grid item xs={12} sm={6} className={classes.grid}>
          <Button type="submit" fullWidth variant="contained" className={classes.save} id="save">
            <strong>Save</strong>
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.grid}>
          <Button fullWidth variant="contained" className={classes.close} onClick={onClick} id="close">
            <strong>Close</strong>
          </Button>
        </Grid>
      </Grid>
    </Form>
  );
};

export default AddLoan;
