// Login.js
import { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { setCookie } from '../cookie';
import Nav from "../components/Nav";
import { getCookie } from '../cookie';
// const url = import.meta.env.VITE_LoginAPI_URL;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* 수직 정렬을 위해 추가 */
  margin-left: 30vw;
  margin-right: 30vw;
  height:60vh;
  margin-top: 10vh;
  margin-bottom: 10vh;
  background-color:rgb(252, 252, 233);

  border-radius: 30px; 

  h2{
    color: purple;
    font-size: 3em;
    margin-bottom: 7vh;
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
    
    axios.post("http://34.70.229.21:8080/login",
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
        console.log("h : "+result.headers)
        console.log("res : "+result.headers.authorization);
        console.log("login");
        const accessToken = result.headers.authorization;
         //setcookie함수의 첫번째 인자는 쿠키이름, 두번째 인자는 넣을 값이다.
        setCookie("is_login", `${accessToken}`); 
        console.log("token : "+accessToken);
        window.alert('Login Success!');
        
        axios.get("http://34.70.229.21:8080/api/match",
        {
          headers: {
            Authorization: getCookie("is_login"),
            'Content-Type': 'application/json',
          },
        })
        .then((response) => {
          const statusCode = response.status;
          // const matchInfo = response.data;
          if (statusCode === 204) {
            console.log("You don't have a mate yet! Go to the Mate Matching . Register your goals and categories and find your mate !");
            navigate('/mate');
          } else if  (statusCode === 200 ) {
            console.log("매칭 대기상태");
            window.alert("waiting for your mate")
            navigate('/home');
            //페이지 만들기
          } 
        })
        .catch(() => {
          console.log("매칭 되어있음");
          navigate('/home');
        });
    })
      .catch((error) => {
        window.alert('Login failed! Make sure your ID and password are correct');
        console.log(error);
      })      
  };


  return (
    <>
    <Nav/>
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
    </>
  );
};

export default Login;
