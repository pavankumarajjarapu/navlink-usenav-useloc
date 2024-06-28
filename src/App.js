import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Dashboard from './Components/Dashboard';
import Home1 from './Components/Home1';


function App() {
  return (
    <div className="App">
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home1></Home1>}></Route>
    <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
    <Route path='/signup'  element={<Signup></Signup>}></Route>
    <Route path='/login' element={<Login></Login>}></Route>
  </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
