import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Goal from '../pages/Goal';
import Managingmate from '../pages/Managingmate';
import Myprofile from '../pages/Myprofile';
import Setting from '../pages/Setting';
import Matchmate from '../pages/Matchmate';
import Report from '../pages/Report';
import Start from '../pages/Start';
import MateRecommend from '../pages/MateRecommend';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/goal" element={<Goal/>}/>
        <Route path="/managing mate" element={<Managingmate/>}/>
        <Route path="/my profile" element={<Myprofile/>}/>
        <Route path="/setting" element={<Setting/>}/>
        <Route path="/mate" element={<Matchmate/>}/>
        <Route path="/materecommend" element={<MateRecommend/>}/>
        <Route path="/Report" element={<Report/>}/>
        <Route path="/Start" element={<Start/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;