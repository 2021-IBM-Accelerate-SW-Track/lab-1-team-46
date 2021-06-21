import Header from "./component/header"
import Completed from "./component/header/completed"
//import logo from './logo.svg';
//import NameTask from "./component/NameTask"
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <input type="text" id="myInput" placeholder="Input New Task" className='task-input'></input>
      <div className='container'>
      </div>
      <Completed />
      <div className='completed'>
      </div>
    </div>
  );
}

export default App;
