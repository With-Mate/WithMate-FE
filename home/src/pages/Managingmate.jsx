import Nav from '../components/Nav';
import Mateprofile from '../components/Mateprofile';
import Givemessage from '../components/Givemessage';
import {Link } from 'react-router-dom';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { getCookie } from '../cookie';
const Managingmate= () =>{
    const [proceedingTime, setProceedingTime] = useState("NN");
    const [startDate,setstartDate]=useState('');
    const [mateMessage,setmateMessage]=useState('');
useEffect(() => {
    const fetchData = async () => {
    try {
        const response = await axios.get("http://34.70.229.21:8080/api/mate/manage",
        {
            headers: {
                Authorization:getCookie('is_login'),
                'Content-Type': 'application/json',
                },
        }
        );
        const {proceedingTime, startDate, mateMessage} = response.data;
        setProceedingTime(proceedingTime); 
        setstartDate(startDate);
        setmateMessage(mateMessage);
        console.log(proceedingTime,startDate,mateMessage);
    } catch (error) {
        console.error(error);
    }
    };

    fetchData();
}, []);

    return (
        <>
        <header>
        <Nav/>
        </header>
        <Mateprofilecontainer><Mateprofile/></Mateprofilecontainer>
        <br/>
        <h4 style={{position:'absolute',right:'15vw',top:'20vh',padding:'0.5vw',fontSize:'2vw'}}> We have been together for {proceedingTime}days! </h4>
        <DataContainer>
        <h4 style={{position:'absolute',left:'25vw',top:'40vh',padding:'0.5vw',fontSize:'1.5vw'}}> With Mate</h4>
        <h4 style={{position:'absolute', right:'30vw', top:'40vh', padding:'0.5vw',fontSize:'1.5vw'}} > {startDate}</h4>
        <h4 style={{position:'absolute', left:'25vw',top:'55vh',padding:'0.5vw',fontSize:'1.5vw'}}> Mate Encouragement Message</h4>
        <h4 style={{position:'absolute', right:'30vw', top:'55vh', padding:'0.5vw',fontSize:'1.5vw'}} > {mateMessage}</h4>
        <h4 style={{position:'absolute', left:'25vw',top:'70vh',padding:'0.5vw',fontSize:'1.5vw'}}> My Encouragement Message</h4>
        <h4 style={{position:'absolute', right:'20vw', top:'70vh', padding:'0.5vw',fontSize:'1.5vw'}} > <Givemessage/> </h4>
        </DataContainer>
        <Link to="/Report" style={{textDecoration: 'none'}} ><RePort>REPORT </RePort></Link>
        <Link to="/mate">mate match </Link>
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
transform: translate(-50%, 800%);
`

const DataContainer=styled.div`
background-color: aliceblue;
`
const Mateprofilecontainer=styled.div`
    left:22vw;
    position:relative;
`