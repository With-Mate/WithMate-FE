
import MateProfile from '../components/Mateprofile';
import Nav from '../components/Nav';
import ReportBox from '../components/ReportBox';
const Report= () =>{
    const handleOpenModal = () => {
        console.log('Open Modal'); // 실제로 모달을 열기 위한 로직을 추가해야 합니다.
      };
    return (
        <>
        <header>
        <Nav/>
        </header>
        <MateProfile/>
        <h4 style={{position:'absolute',right:'17vw',top:'20vh',padding:'0.5vw',fontSize:'2vw'}}> Would you like to report this person?</h4>
        <ReportBox onOpenModal={handleOpenModal} />



        </>
    )
}
export default Report;
Report.jsx
