// Login.js

import { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { setCookie } from '../cookie';


const url = import.meta.env.VITE_LoginAPI_URL;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* 수직 정렬을 위해 추가 */
  margin-left: 30vw;
  margin-right: 30vw;
  height:80vh;
  margin-top: 5vh;
  margin-bottom: 15vh;
  background-color:rgb(253, 250, 230);

  h2{
    color: purple;
    font-size: 3em;
  }

  form{
    display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* 수직 정렬을 위해 추가 */
  }
`;

const Input = styled.input`
  margin-bottom: 3vh;
  padding: 1.5vh;
`;

const Button = styled.button`
  width: 10vw;
  height: 5vh;
  background-color: lavender;
  color: #fff;
  border: none;
  cursor: pointer;
  color : black;
  font-weight: bold;
`;


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 
  
  
  const onSubmitHandler = (event) => {
    event.preventDefault();
    
    axios.post(url,
      {
        
        userName: username,
        passwd : password,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((result) => {
        console.log("res : "+result.headers.authorization);
        console.log("login");
        const accessToken = result.headers.authorization;
         //setcookie함수의 첫번째 인자는 쿠키이름, 두번째 인자는 넣을 값이다.
        setCookie("is_login", `${accessToken}`); 
        console.log("token : "+accessToken);
        window.alert('로그인 성공!');
        navigate('/home');
      })
      .catch((error) => {
        window.alert('로그인 실패');
        console.log(error);
      })      
  };
 

  return (
    <LoginContainer>
      <h2>WithMate</h2>
      <form onSubmit={onSubmitHandler} >
      <Input
         id="username"
          type="text"
          placeholder="ID"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      <Input
       id = "password"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
     <Button type="submit">Log In</Button>
      </form>
    </LoginContainer>
  );
};

export default Login;
