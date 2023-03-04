import logo from './logo.svg';
import './App.css';

import {useNavigate} from "react-router";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import User from './components/user';
import Login from './components/login';
function App() {

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    
    <>
      <Router>
        <Routes>users 
          <Route index element={<Login/>} />
         <Route path="/login" element={<Login/>} />
         <Route path="/user" element={<User/>} />
         <Route path="*" element={<h1>Page not found 404</h1>} />
        </Routes>
      </Router>
    </>


  );
}

export default App;
