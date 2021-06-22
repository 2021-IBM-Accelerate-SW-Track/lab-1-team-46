import './box.css';
import Row from '../row' 
import TextField from "@material-ui/core/TextField";
import ReactDOM from 'react-dom';
import React, { Component } from "react";
import Checkbox from '@material-ui/core/Checkbox';


function createData(name, date, delbutton,check) 
    {
        return {name, date,delbutton,check};
    }

function printDate(date)
{

    console.log(date.target);
}

class Box extends Component {

    constructor(props) {
        super(props);
        this.genericRows = [createData(<TextField id="standard-basic" label="Task Description" />, Date().toLocaleString(),<button createddate = {Date().toLocaleString()} onClick = { createddate=> printDate(createddate)}>Delete</button>,<Checkbox/>)];
        
    }

    addRow(rowArray,object)
    {
        rowArray.push(createData(<TextField id="standard-basic" label="Task Description" />, Date().toLocaleString(),<button createddate = {Date().toLocaleString()} onClick = { createddate=> printDate(createddate)}>Delete</button>,<Checkbox/>));
        console.log(rowArray.length);
        this.setState(() => {
            console.log('setting state');
            return { unseen: "does not display" }
        });
    }

    clearRows(rowArray)
    {
        rowArray.splice(0); {/*Replace 0 with the index of date to delete*/}
        this.setState(() => {
            console.log('setting state');
            return { unseen: "does not display" }
        });
    }

    removeRow(rowArray,dateToFind)
    {
        console.log(rowArray[0].date);
        this.setState(() => {
            console.log('setting state');
            return { unseen: "does not display" }
        });
    }

    render() {
        return (
            <div>
            <div> {/*This div is ABOVE the box object - just a basic title header on the left side and the add/delete buttons on the right*/}
                <h2 className = "rowText" style = {{marginRight: "70%"}}>To do List</h2>
                <button onClick = {() => this.addRow(this.genericRows)}>Add</button>
                <button onClick = {() => this.clearRows(this.genericRows)}>Clear</button>
            </div>
    
            <div className = "box">
                <Row rows = {this.genericRows} createData = {createData} />
            </div>
           </div>
        );
    }
}
 
export default Box;