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
import CreateIcon from "@material-ui/icons/Create";
import SimpleModal from "../../../components/modal/modal";
import { columns } from "../../../constants/apps/clients";
import { useStyles } from "../clientStyles";

export default function GetClients({ clients }) {
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
      <TableContainer className={classes.container}>
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
            {clients.map(client => {
              const { clientId, clientName, clientContactEmail, address, city, country, clientContactNumber } = client;

              return (
                <TableRow hover role="checkbox" tabIndex={-1}>
                  <TableCell key={clientId} align={client.align}>
                    {clientName}
                  </TableCell>
                  <TableCell key={clientId} align={client.align}>
                    {clientContactEmail}
                  </TableCell>
                  <TableCell key={clientId} align={client.align}>
                    {clientContactNumber}
                  </TableCell>
                  <TableCell key={clientId} align={client.align}>
                    {`${address} ,${city}`}
                  </TableCell>
                  <TableCell key={clientId} align={client.align}>
                    {country}
                  </TableCell>
                  <TableCell key={clientId} align={client.align}>
                    <CreateIcon className={classes.actionEditIcons} />
                    <SimpleModal clientId={clientId} clientName={clientName} />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={clients.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
