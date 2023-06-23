import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import 'animate.css';
import Home from './Pages/Home';
import Aboutus from './Pages/Aboutus';
import Portfolio from './Pages/Portfolio';
import Career from './Pages/Career';
import Get from './Pages/Get';
import Service1 from './Pages/Service1';




function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<Aboutus/>} />
        <Route path='/service' element={<Service1/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='/careear' element={<Career/>} />
        <Route path='/getintouch' element={<Get/>} />
      </Routes>
      
    </>
  );
}

export default App;
