import React from "react";
import { Table, TableBody, TableCell, TableHead, TablePagination, TableRow } from "@mui/material";

import { StyledPaper, StyledTableContainer } from "./tableStyles";

const TableList = ({ tableBodies, tableHeaders }) => {
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
    <StyledPaper>
      <StyledTableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {tableHeaders.map((column, i) => (
                <TableCell key={i} align={column.align} style={{ minWidth: column.minWidth }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableBodies.map(body => (
              <TableRow hover role="checkbox" tabIndex={-1} key={body.id}>
                {Object.values(body)
                  .slice(1)
                  .map(tableData => (
                    <TableCell>{tableData}</TableCell>
                  ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </StyledTableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={tableBodies.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </StyledPaper>
  );
};

export default TableList;
