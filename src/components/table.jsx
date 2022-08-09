import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

class Product {
  constructor(name, quantity, discount, total) {
    this.name = name;
    this.quantity = quantity;
    this.discount = discount;
    this.total = total;
  }
}

let cartItems = [
  new Product('Supreme Combo Pack for Rakshya Bandhan', 6, 24, 159),
  new Product('Elite Combo Pack For Raksha Bandhan', 9, 37, 180),
  new Product('Adorable Combo Pack For Raksha Bandhan', 8, 15, 240),
  new Product('Lovable Combo Pack For Raksha Bandhan', 3, 30, 670),
  new Product('OKHAR Light Dial Male Watch Watch Watch', 4, 35, 490),
  new Product('OKHAR Dark Dial Male Watch', 4, 35, 490),
  new Product('Orange', 4, 35, 490),
];

let grandTotal = cartItems.map((el, index) => {
  return el.total
}).reduce((a, b) => a + b, 0);

console.log("My Row Data", cartItems.map(el => el));

export default function CustomizedTables() {
  const [rowsPerPage, setRowsPerPage] = React.useState(3);
  const [page, setPage] = React.useState(0);

  function handleChangeRowsPerPage(event) {
    console.log("handleChangeRowsPerPage Event", event.target.value);

    setRowsPerPage(parseInt(event.target.value), 3);
    setPage(0);
  }

  const handleChangePage = (event, newPage) => {
    console.log("New Page", newPage);
    setPage(newPage);
  };

  return (
    <>
      <Box sx={{ width: '100%' }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700, }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Product</StyledTableCell>
                <StyledTableCell align="right">Quantity</StyledTableCell>
                <StyledTableCell align="right">Discount&nbsp;(D)</StyledTableCell>
                <StyledTableCell align="right">Total&nbsp;(T)</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cartItems.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row" sx={{ color: '#fc5d5d', }}>
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.quantity}</StyledTableCell>
                  <StyledTableCell align="right"> RS. {row.discount}</StyledTableCell>
                  <StyledTableCell align="right">RS. <b>{row.total}</b></StyledTableCell>
                </StyledTableRow>
              ))}
              <TableRow sx={{ width: '100%', }}>
                <td></td>
                <td></td>
                <td></td>
                <StyledTableCell align='right'>Grand Total: <b>Rs. {grandTotal}</b> </StyledTableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          sx={{ fontSize: '1.3rem', marginTop: '1rem', }}
          rowsPerPageOptions={[3, 6, 9]}
          component="div"
          count={cartItems.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
    </>
  );
}
