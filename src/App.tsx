import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from "./comps/Home";
import { RegiseterHome } from './comps/RegisterHome';

// declare module "react-router-dom" {
//   export interface RouteProps {
//     exact?: boolean;
//     path: string;
//     element: React.ComponentType<any>;
//   }
// }

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path='register' element={<RegiseterHome />} />    
      </Routes>  
    </BrowserRouter>
  );
} 

export default App
