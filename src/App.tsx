import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from "./comps/Home";
import { RegiseterHome } from './comps/RegisterHome';
import { About } from './comps/About';
import { Contact } from './comps/Contact';
import { SignIn } from './comps/SiginIn';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path='register' element={<RegiseterHome />} />
        <Route path="home" element={<Home />} />  
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='register/sign-in' element={<SignIn />} />


      </Routes>  
    </BrowserRouter>
  );
} 

export default App
