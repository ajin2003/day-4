import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const rows = [
    {
        name:"1. CID MOOSA",
        poster:"https://upload.wikimedia.org/wikipedia/en/a/a2/C.I.D._Moosa.jpg",
        year:2003,
        dir:"AJIN",
        rating:9.2
    },
    {
        name:"2. VETTOM",
        poster:"https://m.media-amazon.com/images/S/pv-target-images/17984bc8e14ad6e3d97b73490031d8df7a7c9636a53dc0f62f49f243474cb354.jpg",
        year:2000,
        dir:"ALBY",
        rating:9
    },
    {
        name:"3. PANDIPADA",
        poster:"https://upload.wikimedia.org/wikipedia/en/thumb/7/7d/Pandippada.jpg/220px-Pandippada.jpg",
        year:2009,
        dir:"GOVIND",
        rating:9.5
    }
];

function Film() {
  return (
    <div><TableContainer component={Paper}>
    <Table border='' sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead x>
        <TableRow  sx={{ '& td, & th': { border: 2 } }}> 
          <TableCell ><b>movie name</b></TableCell>
          <TableCell align="right"><b>image</b></TableCell>
          <TableCell align="right"><b>year</b></TableCell>
          <TableCell align="right"><b>director</b></TableCell>
          <TableCell align="right"><b>rating</b></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.name}
            sx={{ '& td, & th': { border: 2 } }}
          >
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell align="right">{<img src={row.poster} alt="" width="100" height="100"></img>}</TableCell>
            <TableCell align="right">{row.year}</TableCell>
            <TableCell align="right">{row.dir}</TableCell>
            <TableCell align="right">{row.rating}</TableCell>
            
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  </div>
  )
}

export default Film
