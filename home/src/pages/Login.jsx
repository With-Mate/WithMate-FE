// Login.js

import { useState } from 'react';
import styled from 'styled-components';

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
`;

const Input = styled.input`
  margin-bottom: 3vh;
  padding: 1.5vh;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: lavender;
  color: #fff;
  border: none;
  cursor: pointer;
  color : black;
  font-weight: bold;
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // 여기서는 간단히 콘솔에 로그인 정보를 출력합니다.
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <LoginContainer>
      <h2>WithMate</h2>
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={handleLogin}>Login</Button>
    </LoginContainer>
  );
};

export default Login;
