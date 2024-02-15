import Nav from '../components/Nav';
import Mateprofile from '../components/Mateprofile';
import Givemessage from '../components/Givemessage';
import {Link } from 'react-router-dom';
import styled from 'styled-components';

const Managingmate= () =>{
    return (
        <>
        <header>
        <Nav/>
        </header>
        {/* < style={{display: 'flex', flexDirection: 'column', alignItems: 'center' }}> */}
        <Mateprofile/>
        <br/>
        <h4 style={{position:'absolute',right:'15vw',top:'20vh',padding:'0.5vw',fontSize:'2vw'}}> We have been together for NN days! </h4>
        <DataContainer>
        <h4 style={{position:'absolute',left:'25vw',top:'40vh',padding:'0.5vw',fontSize:'1.5vw'}}> With Mate</h4>
        <h4 style={{position:'absolute', right:'30vw', top:'40vh', padding:'0.5vw',fontSize:'1.5vw'}} > 2024. 02. 22 </h4>
        <h4 style={{position:'absolute', left:'25vw',top:'55vh',padding:'0.5vw',fontSize:'1.5vw'}}> Mate Encouragement Message</h4>
        <h4 style={{position:'absolute', right:'30vw', top:'55vh', padding:'0.5vw',fontSize:'1.5vw'}} > Cheer up!</h4>
        <h4 style={{position:'absolute', left:'25vw',top:'70vh',padding:'0.5vw',fontSize:'1.5vw'}}> My Encouragement Message</h4>
        <h4 style={{position:'absolute', right:'20vw', top:'70vh', padding:'0.5vw',fontSize:'1.5vw'}} > <Givemessage/> </h4>
        </DataContainer>
        <Link to="/Report" style={{textDecoration: 'none'}} ><RePort>REPORT </RePort></Link>
        <Link to="/start">start </Link>
        </>
    )
}
export default Managingmate;

const RePort = styled.div`
color:rgb(134, 0, 0);
font-weight: bold;
border: 1px solid rgb(134, 0, 0)  ;
display: inline-block;
background-color: #f7e4e4;
padding:1vw;
position:relative;
left: 50vw;
/* width:4vw; */
transform: translate(-50%, 1200%); /* 중앙 정렬 */
`

const DataContainer=styled.div`
background-color: aliceblue;
`