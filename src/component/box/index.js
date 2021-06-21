import './box.css';
import Row from '../row' 
import TextField from "@material-ui/core/TextField";
import React, {useState} from 'react';
import ReactDOM from 'react-dom';

export default function Box(props)
{
    function createData(name, date) 
    {
        return { name, date};
    }

    function addRow(rowArray)
    {
        rowArray.push(createData(<TextField id="standard-basic" label="Task Description" />, Date().toLocaleString()));
        console.log(rowArray.length);
    }

    <link rel="stylesheet" href="box.css"></link>
    const genericRows = [createData(<TextField id="standard-basic" label="Task Description" />, Date().toLocaleString())];

    const[showRows,updateRowHandler] = useState(true);
    return( 
    <div>
        <div> {/*This div is ABOVE the box object - just a basic title header on the left side and the add/delete buttons on the right*/}
            <h2 className = "rowText" style = {{marginRight: "70%"}}>{props.boxTitle}</h2>
            <button onClick = {() => addRow(genericRows)}>Add</button>
            <button>Delete</button>
        </div>

        <div className = "box">
            <Row rows = {genericRows} createData = {createData} />
        </div>
    </div>
    );
}