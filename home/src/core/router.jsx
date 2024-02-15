import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Goal from '../pages/Goal';
import Managingmate from '../pages/Managingmate';
import Myprofile from '../pages/Myprofile';
import Setting from '../pages/Setting';
import First from '../pages/First';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
 
import Matchmate from '../pages/Matchmate';
import Report from '../pages/Report';


// function Router() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/goal" element={<Goal/>}/>
//         <Route path="/managing mate" element={<Managingmate/>}/>
//         <Route path="/my profile" element={<Myprofile/>}/>
//         <Route path="/setting" element={<Setting/>}/>
//       </Routes>
//     </BrowserRouter>
//   );
// }

 function Router() {
   return (
     <BrowserRouter>
      <Routes>
         <Route path="/" element={<First />} />
         <Route path="/signup" element={<Signup />} />
         <Route path="/login" element={<Login />} /> 


         <Route path="/home" element={<Home />} />
         <Route path="/goal" element={<Goal/>}/>
        <Route path="/managing mate" element={<Managingmate/>}/>
        <Route path="/my profile" element={<Myprofile/>}/>
        <Route path="/setting" element={<Setting/>}/>
        <Route path="/mate" element={<Matchmate/>}/>
        <Route path="/Report" element={<Report/>}/>
       
      </Routes>
    </BrowserRouter>
  );
}

export default Router;