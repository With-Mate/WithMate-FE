import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Goal from '../pages/Goal';
import Managingmate from '../pages/Managingmate';
import Myprofile from '../pages/Myprofile';
import Setting from '../pages/Setting';
 

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/goal" element={<Goal/>}/>
        <Route path="/managing mate" element={<Managingmate/>}/>
        <Route path="/my profile" element={<Myprofile/>}/>
        <Route path="/setting" element={<Setting/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;