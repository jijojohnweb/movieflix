
import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
import {useState} from 'react'

import Header from './Components/Header/Header'

import Home from './Pages/Home/Home'
import About from './Pages/About/About'


function App() {
  const [first, setfirst] = useState([])
  const [apikey] = useState(process.env.REACT_APP_TMDB_API_KEY);
  const [auth] = useState(process.env.REACT_APP_TMDB_AUTH_KEY)

  return (
    <>
    <Router>

    <Header/>
    <Routes>
      <Route path="/" element={<Home apikey={apikey} auth={auth}/>} />
      <Route path="/about" element={<About />} />
    </Routes>
    </Router>
    </>
  );

} export default App;