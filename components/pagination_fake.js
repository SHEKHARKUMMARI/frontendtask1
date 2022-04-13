import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {useEffect,useState} from 'react';
// import * as React from 'react';
// import { useState,useEffect } from 'react';
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
// function getFullName(params) {
//   return `${params.row.firstName || ''} ${params.row.lastName || ''}`;
// }

// function setFullName(params) {
//   const [firstName, lastName] = params.value.toString().split(' ');
//   return { ...params.row, firstName, lastName };
// }

// function parseFullName(value) {
//   return String(value)
//     .split(' ')
//     .map((str) => (str.length > 0 ? str[0].toUpperCase() + str.slice(1) : ''))
//     .join(' ');
// }

export default function ValueParserSetterGrid({columns,rows}) {
    const [disp,setDisp]=useState();
    useEffect(()=>{
       const data=rows.Ports.map((ele)=>{
           return {id:ele["ID"],Name:ele["Name"],Code:ele["Code"],State:ele["State"],Country:ele["Country"],City:ele["City"]}
       });
       if(data){
           setDisp(data);
       }
    },[rows]);
    useEffect(()=>{
        console.log("rows in fake=",rows);
    })
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={disp} columns={columns}  />
      <Stack spacing={2}>    {/* <Pagination count={10} shape="rounded" /> */}
    </Stack>
    </div>
  );
}

// const columns = [
//   { field: 'firstName', headerName: 'First name', width: 130, editable: true },
//   { field: 'lastName', headerName: 'Last name', width: 130, editable: true },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     width: 160,
//     editable: true,
//     valueGetter: getFullName,
//     valueSetter: setFullName,
//     valueParser: parseFullName,
//     sortComparator: (v1, v2) => v1.toString().localeCompare(v2.toString()),
//   },
// ];

// const defaultRows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon' },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei' },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime' },
//   { id: 4, lastName: 'Stark', firstName: 'Arya' },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys' },
// ];
