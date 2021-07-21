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
import { columns } from "../../../constants/views/loans";
import { useStyles } from "./loansStyles";

const GetLoans = ({ loans }) => {
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
            {loans
              ? loans.map(loan => {
                  const { loanId, client, amount, rate, dateDisbursed, months, interestAmount, totalOwed, comment } =
                    loan;

                  return (
                    <TableRow hover role="checkbox" tabIndex={-1}>
                      <TableCell key={loanId}>{client}</TableCell>
                      <TableCell key={loanId}>{amount}</TableCell>
                      <TableCell key={loanId}>{rate}</TableCell>
                      <TableCell key={loanId}>{`${dateDisbursed}`}</TableCell>
                      <TableCell key={loanId}>{months}</TableCell>
                      <TableCell key={loanId}>{interestAmount}</TableCell>
                      <TableCell key={loanId}>{totalOwed}</TableCell>
                      <TableCell key={loanId}>{comment}</TableCell>
                    </TableRow>
                  );
                })
              : null}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={loans.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default GetLoans;
