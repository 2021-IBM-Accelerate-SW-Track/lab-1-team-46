import Header from "./component/header"
import Completed from "./component/header/completed"
//import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <div className='container'>
      </div>
      <Completed />
      <div className='completed'>
      </div>
    </div>
  );
}

export default App;
