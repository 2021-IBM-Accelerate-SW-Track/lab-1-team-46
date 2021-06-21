import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

export default function DeleteButton(props){
    return (
    <IconButton onClick={props.onClick}>
        <DeleteIcon/>
        {props.text}
    </IconButton> 
    );
}