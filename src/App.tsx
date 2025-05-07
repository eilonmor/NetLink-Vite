import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from "./comps/Home";
import { RegiseterHome } from './comps/RegisterHome';
import { About } from './comps/About';
import { Contact } from './comps/Contact';
import { SignIn } from './comps/SiginIn';
import { Notfound } from "./comps/NotFound";
import { ChooseUserType } from './comps/ChoseUserType';
import { SocialNetworkCh } from './comps/SocialsNetworkCh';
import { SocialContinue } from './comps/SocialCountinue';
import { DetailsRegister } from './comps/DetailsRegister';
import { UserPicInfo } from './comps/UserPicInfo';
import { ProfileUser } from './comps/ProfileUser';
import { ProfileUser2 } from './comps/ProfileUser2';
import RegisterFormInfluencer from './comps/RegistrationFormInfluncer';



function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path='register' element={<RegiseterHome />} />
      <Route path="home" element={<Home />} />  
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='register/sign-in' element={<SignIn />} />
      <Route path='my profile' element={<ProfileUser2 />} />
      <Route path='*' element={<Notfound />} />
      <Route path='register/chose-user' element={<ChooseUserType />} />
      <Route path='register/chose-user/details-register' element={<DetailsRegister />} />
      <Route path='register/chose-user/details-register/pic-info' element={<UserPicInfo />} />
      <Route path='register/chose-user/social-network' element={<SocialNetworkCh />} />
      <Route path='register/chose-user/social-network/put-link' element={<SocialContinue />} />
      <Route path='register/chose-user/social-network/put-link/details-register' element={<RegisterFormInfluencer />} />
      <Route path='register/chose-user/social-network/put-link/details-register/pic-info' element={<UserPicInfo />} />



    </Routes>  
  );
} 

export default App
