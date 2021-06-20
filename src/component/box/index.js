import './box.css';
import Row from '../row' 

export default function Box(props)
{
    <link rel="stylesheet" href="box.css"></link>
    return( 
    <div>
        <div> {/*This div is ABOVE the box object - just a basic title header on the left side and the add/delete buttons on the right*/}
            <h2 className = "title">{props.boxTitle}</h2>
            <button>Add</button>
            <button>Delete</button>
        </div>

        <div className = "box">
            <Row/>
        </div>
    </div>
    );
}