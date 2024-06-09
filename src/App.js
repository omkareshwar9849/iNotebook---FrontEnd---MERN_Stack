/*
Backend : 
cd C:\Users\Omkar\Documents\programming_files\React-Js\iNotebook-BackEnd-MERN_Stack
npx nodemon ./index.js
*/

import './App.css';
import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';
// import MyComponent from './components/Temp1';
function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  

  return (
    <>
      <NoteState>
        <Router>
          <Navbar name="iNotebook" />
          <Alert alert={alert} />
          <div className="container">
            <Routes>
              <Route path='/iNotebook-FrontEnd-MERN_Stack' element={<Home showAlert={showAlert} />}></Route>
              {/* <Route path='/Temp1' element={<MyComponent />}></Route> */}
              <Route path="/about" element={<About />}></Route>
              <Route path="/login" element={<Login  showAlert={showAlert} />}></Route>
              <Route path="/signup" element={<Signup showAlert={showAlert} />}></Route>
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
