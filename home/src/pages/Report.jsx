
import MateProfile from '../components/Mateprofile';
import Nav from '../components/Nav';
import ReportBox from '../components/ReportBox';
const Report= () =>{
    return (
        <>
        <header>
        <Nav/>
        </header>
        <MateProfile/>
        <h4 style={{position:'absolute',right:'17vw',top:'20vh',padding:'0.5vw',fontSize:'2vw'}}> Would you like to report this person?</h4>
        <ReportBox/>



        </>
    )
}
export default Report;

// const Reportbox=styled.div`
//     position: absolute;
// `