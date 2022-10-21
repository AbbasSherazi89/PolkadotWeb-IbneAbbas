import './App.scss';
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Base from './Components/Layout/Base';
import Home from './Pages/Home';
import Technology from './Pages/Technology';
import Community from './Pages/Community';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Build from './Pages/Build';
import Contact from './Pages/Contact';
function App() {
  useEffect(() => {
    AOS.init({
      duration:1500
    });
  }, [])
  return (
    <>
      <BrowserRouter>
        <Base>
          <Routes>
            <Route index path='/' element={<Home/>}/>
            <Route index path='/technology' element={<Technology/>}/>
            <Route index path='/commmunity' element={<Community/>}/>
            <Route index path='/about' element={<About/>}/>
            <Route index path='/blog' element={<Blog/>}/>
            <Route index path='/build' element={<Build/>}/>
            <Route index path='/contact' element={<Contact/>}/>
          </Routes>
        </Base>
      </BrowserRouter>
    </>
    );
}

export default App;
