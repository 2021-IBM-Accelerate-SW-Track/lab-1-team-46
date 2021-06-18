import Header from "./component/header"
import ToDoList from "./component/toDoList"
import Items from "./component/items"
import './App.css';

function App() {
  return (
    <div className="App">
    <Header/>
    <ToDoList/>
    <Items/>
    </div>
  );
}

export default App;