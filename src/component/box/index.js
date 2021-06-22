import './box.css';
import Row from '../row' 
import TextField from "@material-ui/core/TextField";
import ReactDOM from 'react-dom';
import React, { Component } from "react";

function createData(checkbox, name, date, delbutton) 
    {
        return {checkbox, name, date,delbutton};
    }

class Box extends Component {

    constructor(props) {
        super(props);
        this.genericRows = [createData(<button>Check</button>,<TextField id="standard-basic" label="Task Description" />, Date().toLocaleString(),<button>Delete</button>)];
        
    }

    addRow(rowArray,object)
    {
        rowArray.push(createData(<button>Check</button>,<TextField id="standard-basic" label="Task Description" />, Date().toLocaleString(),<button>Delete</button>));
        console.log(rowArray.length);
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
                <button>Delete</button>
            </div>
    
            <div className = "box">
                <Row rows = {this.genericRows} createData = {createData} />
            </div>
           </div>
        );
    }
}
 
export default Box;