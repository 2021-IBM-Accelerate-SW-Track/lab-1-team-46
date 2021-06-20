import Header from "./component/header"
import Box from "./component/box"
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
