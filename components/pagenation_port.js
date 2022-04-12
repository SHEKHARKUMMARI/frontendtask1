import * as React from 'react';
import { useState,useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
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




//localhost:5050/v1/port?key=Chennai&page=1&count=8

export default function Pagenation({handlePageNumberChange,rows,handleEditClick,count,searchText,handleSearchTextChange}) {
  const [pageData, setPageData] = useState();
  const [pageNumber,setPageNumber]=useState(1);
  const handleChange = (event, value) => {
    setPageNumber(value);
  };
  const  deleteport = async (id) =>{
    console.log("delete id=",id);
    await fetch(`http://localhost:5050/v1/ports/${id}`, {
      method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
      },
    });
    const res=await fetch(`http://localhost:5050/v1/ports?page=${pageNumber}&count=${count}`);
        const data=await res.json();
        if(data){
            setPageData(data);
        }
  
  }
  const handleSearchFieldChange=(e)=>{
        handleSearchTextChange(e.target.value);
  }
  useEffect(()=>{
  console.log("search text=",searchText)
  },[searchText])
  useEffect(()=>{
    setPageData(rows);
  },[rows]);
  const handleEditPortClick=(id)=>{
    handleEditClick(id);
   }
   useEffect(()=>{
       handlePageNumberChange(pageNumber);
   },[pageNumber]);
  return (
      <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell align="left">Name</StyledTableCell>
            <StyledTableCell align="left">Code</StyledTableCell>
            <StyledTableCell align="left">City</StyledTableCell>
            <StyledTableCell align="left">State</StyledTableCell>
            <StyledTableCell align="left">Country</StyledTableCell>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" value={searchText} onChange={handleSearchFieldChange} />
          </TableRow>

        </TableHead>
        <TableBody>
          { pageData&&pageData.Ports.map((row) => (
            <StyledTableRow key={row.ID}>
              <StyledTableCell align="left">{row.Name}</StyledTableCell>
              <StyledTableCell align="left">{row.Code}</StyledTableCell>
              <StyledTableCell align="left">{row.City}</StyledTableCell>
              <StyledTableCell align="left">{row.State}</StyledTableCell>
              <StyledTableCell align="left">{row.Country}</StyledTableCell>
            {/* <Button endIcon={<EditIcon />} sx={{ m: ".5rem"}} variant="contained" onClick={()=>handleEditPortClick(row.ID)} >Edit</Button> */}
            <Button endIcon={<DeleteIcon />} variant="contained" onClick={() => deleteport(row.ID) } >Delete</Button>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Stack spacing={2}>    {/* <Pagination count={10} shape="rounded" /> */}
    <Pagination count={pageData?.totalNumberOfPages} variant="outlined" shape="rounded"  onChange={handleChange} />
    </Stack>
    </>
  );
}

// // const Fun=()=>{
// const [page, setPage] = useState(1);
//   const handleChange = (event, value) => {
//     setPage(value);
//   };
//   useEffect(()=>{
//     console.log("page=",page);
//   })
// //   return (
// //     <Stack spacing={2}>
// //       {/* <Pagination count={10} shape="rounded" /> */}
// //       <Pagination count={10} variant="outlined" shape="rounded" onChange={handleChange} />
// //     </Stack>
// //   );
// // }
// export default Fun
// Name - Port name 
// Code - Port code
// City - Port city
// State - Port state or province
// Country - Port country
