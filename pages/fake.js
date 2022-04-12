import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
// import SearchBar from "./searchbar"
import { makeStyles } from '@mui/styles';
import { useState,useEffect } from 'react';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import DoneIcon from '@mui/icons-material/Done';

import DeleteIcon from '@mui/icons-material/Delete';

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    // marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 650
  },
  selectTableCell: {
    width: 60
  },
  tableCell: {
    width: 130,
    height: 40
  },
  input: {
    width: 130,
    height: 40
  }
}));

const createData = (name, calories, fat, carbs, protein) => ({
  id: name.replace(" ", "_"),
  name,
  calories,
  fat,
  carbs,
  protein,
  isEditMode: false
});

const CustomTableCell = ({ row, name, onChange }) => {
  const classes = useStyles();
  const { isEditMode } = row;
  return (
    <TableCell align="left" className={classes.tableCell}>
      {isEditMode ? (
        <Input
          value={row[name]}
          name={name}
          onChange={e => onChange(e, row)}
          className={classes.input}
        />
      ) : (
        row[name]
      )}
    </TableCell>
  );
};

 const Fake = () =>{
  const [rows, setRows] = React.useState([
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0)
  ]);
  const [previous, setPrevious] = React.useState({});
  const classes = useStyles();

  const onToggleEditMode = id => {
    setRows(state => {
      return rows.map(row => {
        if (row.id === id) {
          return { ...row, isEditMode: !row.isEditMode };
        }
        return row;
      });
    });
  };

  const onChange = (e, row) => {
    if (!previous[row.id]) {
      setPrevious(state => ({ ...state, [row.id]: row }));
    }
    const value = e.target.value;
    const name = e.target.name;
    const { id } = row;
    const newRows = rows.map(row => {
      if (row.id === id) {
        return { ...row, [name]: value };
      }
      return row;
    });
    setRows(newRows);
  };

  const onRevert = id => {
    const newRows = rows.map(row => {
      if (row.id === id) {
        return previous[id] ? previous[id] : row;
      }
      return row;
    });
    setRows(newRows);
    setPrevious(state => {
      delete state[id];
      return state;
    });
    onToggleEditMode(id);
  };

  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="caption table">
        <caption>A barbone structure table example with a caption</caption>
        <TableHead>
          <TableRow>
            <TableCell align="left" />
            <TableCell align="left">Dessert (100g serving)</TableCell>
            <TableCell align="left">Calories</TableCell>
            <TableCell align="left">Fat&nbsp;(g)</TableCell>
            <TableCell align="left">Carbs&nbsp;(g)</TableCell>
            <TableCell align="left">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell className={classes.selectTableCell}>
                {row.isEditMode ? (
                  <>
                    <IconButton
                      aria-label="done"
                      onClick={() => onToggleEditMode(row.id)}
                    >
                      <DoneIcon />
                    </IconButton>
                    <IconButton
                      aria-label="revert"
                      onClick={() => onRevert(row.id)}
                    >
                      {/* <RevertIcon /> */}
                    </IconButton>
                  </>
                ) : (
                  <IconButton
                    aria-label="delete"
                    onClick={() => onToggleEditMode(row.id)}
                  >
                    <EditIcon />
                  </IconButton>
                )}
              </TableCell>
              <CustomTableCell {...{ row, name: "name", onChange }} />
              <CustomTableCell {...{ row, name: "calories", onChange }} />
              <CustomTableCell {...{ row, name: "fat", onChange }} />
              <CustomTableCell {...{ row, name: "carbs", onChange }} />
              <CustomTableCell {...{ row, name: "protein", onChange }} />
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default Fake;