
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
import EditNoteIcon from '@mui/icons-material/EditNote';  
import DeleteIcon from '@mui/icons-material/Delete'; // Icono de eliminar  
import VisibilityIcon from '@mui/icons-material/Visibility'; // Icono de ver  
import { Tooltip } from '@mui/material';

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
  '&:last-child td, &:last-child th': {  
    border: 0,  
  },  
}));  

function createData(name, DNI, Teléfono, Dirección, Correo) {  
  return { name, DNI, Teléfono, Dirección, Correo };  
}  
const rows = [  
  createData('Juan Pérez', 20202020, 5, 25, 'mail@email.com'),  
  createData('María Pérez', 23232323, 2, 25, 'mail@email.com'),  
  createData('Carlos Pérez', 18181818, 7, 25, 'mail@email.com'),  
  createData('Ana Pérez', 25252525, 0, 25, 'mail@email.com'),  
];  

// Componente para las acciones  
function Acciones() {  
  return (  
    <div style={{ display: 'flex', justifyContent: 'center', color: 'grey' }}>  
      <Tooltip title="Ver" arrow>  
        <VisibilityIcon color="grey" style={{ cursor: 'pointer', marginRight: 8 }} />  
      </Tooltip>  
      <Tooltip title="Editar" arrow>  
        <EditNoteIcon color="grey" style={{ cursor: 'pointer', marginRight: 8 }} />  
      </Tooltip>  
      <Tooltip title="Eliminar" arrow>  
        <DeleteIcon color="grey" style={{ cursor: 'pointer', marginRight: 8 }} />  
      </Tooltip>  
    </div>  
  );  
}  


function Teachers() {  
  return (  
    <>  
      <NavBar />  
      <SwipeableTemporaryDrawer />  
      <TableContainer component={Paper}>  
        <Table sx={{ minWidth: 700 }} aria-label="customized table">  
          <TableHead>  
            <TableRow>  
              <StyledTableCell>Nombre y apellido</StyledTableCell>  
              <StyledTableCell align="center">DNI</StyledTableCell>  
              <StyledTableCell align="center">Teléfono</StyledTableCell>  
              <StyledTableCell align="center">Dirección</StyledTableCell>  
              <StyledTableCell align="center">Correo</StyledTableCell>  
              <StyledTableCell align="center">Acciones</StyledTableCell>  
            </TableRow>  
          </TableHead>  
          <TableBody>  
            {rows.map((row) => (  
              <StyledTableRow key={row.name}>  
                <StyledTableCell component="th" scope="row">  
                  {row.name}  
                </StyledTableCell>  
                <StyledTableCell align="center">{row.DNI}</StyledTableCell>  
                <StyledTableCell align="center">{row.Teléfono}</StyledTableCell>  
                <StyledTableCell align="center">{row.Dirección}</StyledTableCell>  
                <StyledTableCell align="center">{row.Correo}</StyledTableCell>  
                <StyledTableCell align="center">  
                  <Acciones />  
                </StyledTableCell>  
              </StyledTableRow>  
            ))}  
          </TableBody>  
        </Table>  
      </TableContainer>  
    </>  
  );  
}  

export default Teachers;