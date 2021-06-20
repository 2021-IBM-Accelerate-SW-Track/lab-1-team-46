import box from './box.css';

export default function Box(props)
{
    return( 
    <div>
        <div>
            <h2 className = "title">{props.boxTitle}</h2>
            <button>Add</button>
            <button>Delete</button>
        </div>

        <div className = "box">
            This is a test row
        </div>
    </div>
    );
}