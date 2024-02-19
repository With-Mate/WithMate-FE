
import styled from 'styled-components';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { getCookie } from '../cookie';
function EncouragementBox2 () {
  const[mateMessage, setmateMessage]=useState('');
  useEffect(() => {
    fetchMateData();
    }, []);

    const fetchMateData = async () => {
    try {
      const response= await axios.get("http://34.70.229.21:8080/api/mate/manage", {
        headers: {
          Authorization:getCookie('is_login'),
          'Content-Type': 'application/json',
          },
      });
      const {mateMessage}= response.data;
      setmateMessage(mateMessage);
      console.log("나의 응원 메시지:",mateMessage);
    } catch (error) {
      console.log("메시지 업데이트 실패:", error);
    }
  };
  return (
    <>
      <Message2>
        {mateMessage}
      </Message2>
    </>
  );
}
const Message2 = styled.div`
font-size: 1.5vw;
font-weight: bold;
position: absolute;
top: 28vh; 
right: 12vh; 
background-color: rgb(245, 245, 245);
border: 2px solid lightgrey;
padding: 2vw; 
box-shadow: 0.5vw 0.5vw 1vw rgba(0, 0, 0, 0.2); 
`;

export default EncouragementBox2;