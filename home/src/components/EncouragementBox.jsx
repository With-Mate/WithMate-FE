import styled from 'styled-components';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { getCookie } from '../cookie';
function EncouragementBox() {
  const[myMessage, setmyMessage]=useState('');
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
      const {myMessage}= response.data;
      setmyMessage(myMessage);
      console.log("나의 응원 메시지:",myMessage);
    } catch (error) {
      console.log("메시지 업데이트 실패:", error);
    }
  };
  return (
    <>
      <Message1>
        {myMessage}
      </Message1>
    </>
  );
}

const Message1 = styled.div`
  font-size: 1.5vw;
  font-weight: bold;
  position: absolute;
  top: 28vh;
  left: 2vw; 
  background-color: rgb(245, 245, 245);
  border: 2px solid lightgrey;
  padding: 2vw; 
  box-shadow: 0.5vw 0.5vw 1vw rgba(0, 0, 0, 0.2);
`;

export default EncouragementBox;
