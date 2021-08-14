import React from "react";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import { Form } from "formik";
import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { Button, FormControl, Grid, InputLabel, MenuItem, Select } from "@material-ui/core";
import TextFieldWrapper from "../../../components/forms-ui/TextField";
import { useStyles } from "./addPaymentsStyles";
import { CURRENCIES } from "../../../constants/views/payments";

const AddPayments = ({ formik, onClick, paymentValues, handleSelectChange, handleDateChange }) => {
  const {
    values: { comment, amount, datePaid }
  } = formik;
  const classes = useStyles();
  return (
    <Form className={classes.form}>
      <Grid container spacing={2} className={classes.grid}>
        <Grid item xs={2}>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">Currency</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={paymentValues.currency}
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
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              margin="normal"
              id="date-picker-dialog"
              label="Date picker dialog"
              inputVariant="outlined"
              format="MM/dd/yyyy"
              value={datePaid}
              onChange={handleDateChange}
              className={classes.datePicker}
              KeyboardButtonProps={{
                "aria-label": "change date"
              }}
            />
          </MuiPickersUtilsProvider>
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

export default AddPayments;
