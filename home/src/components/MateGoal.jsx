import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getCookie } from '../cookie';
import axios from 'axios'
function MateGoal() {
const [mateName ,setmateName]= useState('');
const [mateGoal ,setmateGoal]=useState('');
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
        const { mateName,mateGoal } = response.data;
        setmateName(mateName);
        setmateGoal(mateGoal);
        
        console.log("메이트 정보 가져오기 Success");
    } catch (error) {
        console.error('데이터를 불러오는 중 에러가 발생했습니다:', error);
    }
    };
  return (
    <>
      <Message4>
        {mateName}
        <br />
        {mateGoal}
      </Message4>
    </>
 )
 //APi 받아와야함


}
const Message4 = styled.div`
font-size: 1.5vw;
font-weight: bold;
position: absolute;
bottom: 12vh;
right: 20vh; 
background-color:  rgb(246, 227, 255);
border: 3px solid rgb(199, 148, 207);
padding: 2vw; 
`;
export default MateGoal;