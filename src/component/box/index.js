import './box.css';
import Row from '../row' 

export default function Box(props)
{
    <link rel="stylesheet" href="box.css"></link>
    return( 
    <div>
        <div> {/*This div is ABOVE the box object - just a basic title header on the left side and the add/delete buttons on the right*/}
            <h2 className = "rowText" style = {{marginRight: "70%"}}>{props.boxTitle}</h2>
            <button>Add</button>
            <button>Delete</button>
        </div>

        <div className = "box">
            <p className = "rowText" style = {{marginRight:"20%"}}>Task</p>
            <p className = "rowText" style = {{marginLeft:"20%"}}>Date Added</p>
            <hr/>
            <Row/>
        </div>
    </div>
    );
}