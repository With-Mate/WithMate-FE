import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getCookie } from '../cookie';
import axios from 'axios'
function MyGoal() {
const [myName ,setmyName]= useState('');
const [myGoal ,setmyGoal]=useState('');
useEffect(() => {
    fetchMateData();
    }, []);

    const fetchMateData = async () => {
      try {
        const response = await axios.get('http://34.70.229.21:8080/api/home',
        {
        headers: {
        Authorization:getCookie('is_login'),
        'Content-Type': 'application/json',
        },
        });
        const { myName,myGoal  } = response.data;
        setmyName(myName);
        setmyGoal(myGoal);
        
        console.log("메이트 정보 가져오기 Success");
    } catch (error) {
        console.error('데이터를 불러오는 중 에러가 발생했습니다:', error);
    }
    };
  return (
    <>
      <Message3>
        {myName}
        <br />
        {myGoal}
      </Message3>
    </>
 )
 //APi 받아와야함


}
const Message3=styled.div`
font-size: 1.5vw;
font-weight: bold;
position: absolute;
bottom: 12vh;
left: 15vh; 
background-color:  rgb(246, 227, 255);
border: 3px solid rgb(199, 148, 207);
padding: 2vw; 
`;

export default MyGoal;