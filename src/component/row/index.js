import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { render } from '@testing-library/react';

{/* For future me:
  1)Creates the rows object by creating each index in the createData function
   2) Creates two types of table rows: editable and non-editable
  3)After typing in whatever to the Name or Editable Table component, handleTextFieldChange is called
  TODO: Make the date added text update in handleTextFieldChange
        Make the Delete button remove the current tableBody component???
        Make the checkmark copy the current tableBody component(?) into a new box object
        Make the Add button add a tablebody(?)
        Make the clear button remove everything*/}



function createData(name, date) {
  return {name, date}; {/*Obviously later this should access the array stored in the web browser*/}
}


{/*This is the custom editableTableCell object, used for the Task Name where you can type and stuff */}
const EditableTableCell = ({ row, fieldName, onCellValueChange }) => {
  const handleTextFieldChange = e => {
    onCellValueChange({
      fieldValue: e.target.value,
      fieldName: fieldName
    });
  };

  return (
    <TableCell>
      <TextField
        onChange={handleTextFieldChange}
        id={fieldName}
        defaultValue={row[fieldName]}
        margin="normal"
      />
    </TableCell>
  );
};

{/* This is kind of a pseduo fucntion: It gathers all of the rows by calling createData("Data1", "Data2", "Data3"...) */}
{/*TO DO: Change the dummy edit and delete buttons to ones that actually do what they say, while getting the correct data */}

const rows = [ 
  createData('Wash Dishes', 'June 10, 2021 12:51 PM'),
  createData('Clean Disposal', 'June 10, 2021 9:00 PM'),
];



{/*The rest of this just seems like rendering?*/}
const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});


{/*This function executes a few moments after the user finishes typing in their task name*/}
function handleTextFieldChange(rowIndex,change) 
{
  
}

export default function StickyHeadTable() {
  
  const classes = useStyles();
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
    <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>&nbsp;</TableCell>
              <TableCell>Task Name</TableCell>
              <TableCell>Date Added</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => {
              return (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    <Button
                      onClick={() => this.handleSave.bind(this,index)}
                      variant="outlined"
                      className={classes.button}
                    >
                      CheckBox
                    </Button>
                  </TableCell>
                  {/*TODO: simply edit the handelTextFieldChange into adding the current time to Date Added, and modify the name variable to prepare for checkbox*/}
                  <EditableTableCell
                    row={row}
                    fieldName="name"
                    onCellValueChange={handleTextFieldChange.bind(row,index)} 
                  />
                  <TableCell row={row}
                    fieldName="name"> {/*The date table cell: TODO make it update to the current date */}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <Button
                      onClick={() => this.handleSave.bind(this,index)}
                      variant="outlined"
                      className={classes.button}
                    >
                      DELETE
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
  );
}
