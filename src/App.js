
import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"

import Home from './Pages/Home/Home'
import About from './Pages/About/About'



function App() {
  return (
    <>
    <Router>


      
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="" element={<About />} />
    </Routes>
    </Router>
    </>
  );

} export default App;