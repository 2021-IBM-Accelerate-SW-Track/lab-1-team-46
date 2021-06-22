import './box.css';
import Row from '../row' 
import TextField from "@material-ui/core/TextField";
//import ReactDOM from 'react-dom';
import React, { Component } from "react";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';


function createData(checkbox, name, date, delbutton) 
    {
        return {checkbox, name, date,delbutton};
    }
    var arr = [];

function hasDuplicates(arr) {
        return new Set(arr).size !== arr.length;
    }

class Box extends Component {

    constructor(props) {
        super(props);
        this.genericRows = [];
        
    }

    addRow(rowArray,object)
    {
        rowArray.push(createData(<TextField id="standard-basic" label="Task Description" />, Date().toLocaleString(),<button>Delete</button>), <button>Check</button>);
        console.log(rowArray.length);
        this.setState(() => {
            console.log('setting state');
            return { unseen: "does not display" }
        });
    }

    clearRows(rowArray)
    {
        rowArray.splice(0);
        this.setState(() => {
            console.log('setting state');
            return { unseen: "does not display" }
        });
    }

    submit = () => {
            confirmAlert({
              title: 'Confirm to submit',
              message: 'This task already exists',
              buttons: [
                {
                  label: 'Ok',
                  onClick: () => alert('Click Yes')
                },
              ]
            });
        };

    render() {
        if (hasDuplicates(arr)) {
            return (
                <div>
                    <button onClick= {() => this.submit()}></button>
                </div>
                )
        } else {
            return (
                <div>
                <div>
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


    constructor(props) {
        super(props);

        this.state = {
            items: []
        };
     
        this.addTask = this.addTask.bind(this);
    }
       
    addTask(e) {
        if (this._inputElement.value !== "") {
            var addedTask = {
                taskDescription: this._inputElement.value,
                timeAdded: Date().toLocaleString()
            };
         
            this.setState((prevState) => {
                return { 
                    items: prevState.items.concat(addedTask) 
                };
            });
           
            this._inputElement.value = null;
        }
             
        e.preventDefault();
     
    }

    render() {
        return (
            <div className="pageLayout">
                <div className="inputBox">
                    <form onSubmit={this.addTask}>
                        <input ref={(input) => this._inputElement = input} placeholder="Please enter a new task!"></input>
                        <button type="submit">Add Task</button>
                    </form>
                </div>
                <Items entries={this.state.items}/>
            </div>
        );
    }
}
 
export default Box;