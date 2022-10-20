import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Base from './Components/Layout/Base';
import Home from './Pages/Home';
function App() {
  return (
    <>
      <BrowserRouter>
        <Base>
          <Routes>
            <Route index path='/' element={<Home/>}/>
          </Routes>
        </Base>
      </BrowserRouter>
    </>
    );
}

export default App;
