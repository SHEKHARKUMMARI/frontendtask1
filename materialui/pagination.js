import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import SearchBar from "./searchbar"
import { useState,useEffect } from 'react';
import Button from '@mui/material/Button';


export default function StickyHeadTable(props) {
  const {rows, columns ,heading} = props;

  const [page, setPage] = React.useState(0);
  const [searchResult,setSearchResult]=useState();
  const [displayData,setDisplayData]=useState();
  const rowsPerPage=10;
    
  

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleSearchResult=(val)=>{
    setSearchResult(val);
  }
  useEffect(()=>{
   if(searchResult)
   setDisplayData(searchResult);
   else{
    setDisplayData(rows);
   }
  },[searchResult,rows])

  return (
    <>
    <SearchBar data={rows} handleSearchResult={handleSearchResult} heading={heading} />

      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 670 }}  >
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    align={column.align}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              { displayData && displayData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row,index) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell  align={column.align}>
                            {value}
                          </TableCell> 
                        );
                      })}
                      <Button variant="contained">Delete</Button>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      <TablePagination
        rowsPerPageOptions={10}
        component="div"
        count={displayData ?.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
      />
    </Paper>
    </>
    
  );
}

