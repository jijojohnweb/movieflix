
import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
import {useState} from 'react-dom'

import Header from './Components/Header/Header'

import Home from './Pages/Home/Home'
import About from './Pages/About/About'


function App() {
  
  return (
    <>
    <Router>

    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="" element={<About />} />
    </Routes>
    </Router>
    </>
  );

} export default App;