import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SwipeableTemporaryDrawer from '../components/sidebar';
import NavBar from '../components/Navbar';



      const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#121621',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, asistencias, inasistencias, dias) {
  return { name, asistencias, inasistencias, dias};
}
const rows = [
  createData('Juan Pérez', 20, 5, 25),
  createData('María Pérez', 23, 2, 25),
  createData('Carlos Pérez', 18, 7, 25),
  createData('Ana Pérez', 25, 0, 25),
];

function Asistencias() {
  return (
    <>
    <NavBar />
    <SwipeableTemporaryDrawer />
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Alumno</StyledTableCell>
            <StyledTableCell align="right">Asistencias</StyledTableCell>
            <StyledTableCell align="right">Inasistencias</StyledTableCell>
            <StyledTableCell align="right">Dias de clases</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.asistencias}</StyledTableCell>
              <StyledTableCell align="right">{row.inasistencias}</StyledTableCell>
              <StyledTableCell align="right">{row.dias}</StyledTableCell>

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}


export default Asistencias;
