
import './App.css';
import NavBar from './Components/NavBar';

import Footer from './Components/Footer';
import About from './Components/NavbarComponents/About'
import Blog from './Components/NavbarComponents/Blog'
import Home from './Components/Home'
import Careers from './Components/NavbarComponents/Careers'
import Demos from './Components/NavbarComponents/Demos'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//changes to imports 
// import SecurityIcon from '@material-ui/icons/Security';
// import EventNoteIcon from '@material-ui/icons/EventNote';
// import TrendingUpIcon from '@material-ui/icons/TrendingUp';
// import ImportExportIcon from '@material-ui/icons/ImportExport';
// import ComputerIcon from '@material-ui/icons/Computer';
// import HttpIcon from '@material-ui/icons/Http';



function App() {
  
  return (
    <Router>
    <div className='App'>
        
          
            <NavBar/>

              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/blog" element={<Blog/>}/>
                <Route path="/Careers" element={<Careers/>}/>
                <Route path="/Demos" element={<Demos/>}/>
              </Routes>
          
          <div className='footer'>
            <Footer/>
          </div>
      </div>
    </Router>   
  );
}


export default App;
