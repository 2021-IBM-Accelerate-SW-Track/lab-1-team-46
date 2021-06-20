import Header from "./component/header"
import Box from "./component/box"
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import './App.css';

function App() {

  return (
    <div className="App">
    <Header/>
    <Box boxTitle = "To-do List"/>
    <Box boxTitle = "Completed"/>
    </div>
  );
}

export default App;
