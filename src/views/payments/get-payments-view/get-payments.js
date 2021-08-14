import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow
} from "@material-ui/core";
import { columns } from "../../../constants/views/payments";
import { useStyles } from "../../loans/get-loans-view/loansStyles";

const GetPayments = ({ payments }) => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container} id="viewLoans">
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow className={classes.tableHead}>
              {columns.map(column => (
                <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {payments.isArray ? (
              payments.map(payment => {
                const { paymentId, amountPaid, comment, datePaid, previousPendingAmount, amountPending } = payment;

                return (
                  <TableRow hover role="checkbox" tabIndex={-1}>
                    <TableCell key={paymentId}>{amountPending}</TableCell>
                    <TableCell key={paymentId}>{previousPendingAmount}</TableCell>
                    <TableCell key={paymentId}>{amountPaid}</TableCell>
                    <TableCell key={paymentId}>{datePaid}</TableCell>
                    <TableCell key={paymentId}>{comment}</TableCell>
                  </TableRow>
                );
              })
            ) : (
              <></>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={payments.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default GetPayments;
