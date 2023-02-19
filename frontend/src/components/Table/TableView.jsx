
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'venderId', label: 'Vender Id', minWidth: 150 },
  { id: 'venderName', label: 'Vender Name', minWidth: 150 },
  {
    id: 'location',
    label: 'Location',
    minWidth: 150,
    align: 'center',
  },
  {
    id: 'companyName',
    label: 'Company Name',
    minWidth: 150,
    align: 'center',
    
  },
  {
    id: 'contactNo',
    label: 'Contact No.',
    minWidth: 150,
    align: 'center',
   
  },
];

function createData(venderId,venderName, location, companyName, contactNo) {
 
  return { venderId,venderName, location, companyName, contactNo };
}

const rows = [
  createData(101,'India', 'IN', 1324171354, 3287263),
  createData(102,'China', 'CN', 1403500365, 9596961),
  createData(103,'Italy', 'IT', 60483973, 301340),
  createData(104,'United States', 'US', 327167434, 9833520),
  createData(105,'Canada', 'CA', 37602103, 9984670),
  createData(106,'Australia', 'AU', 25475400, 7692024),
  createData(107,'Germany', 'DE', 83019200, 357578),
  
];

export default function TableView() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: 'auto'}}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 57, minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}