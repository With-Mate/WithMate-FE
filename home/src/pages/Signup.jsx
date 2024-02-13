import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const url = import.meta.env.VITE_SignupAPI_URL;


const SignupContainer = styled.div`
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
  border-radius: 30px; 

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

const Select = styled.select`
  margin-bottom: 3vh;
  padding:2vh`;
const Option = styled.option``;

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
`;


const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [nationality, setNationality] = useState('');
  const [nationalities, setNationalities] = useState([]);

  const navigate = useNavigate(); 
  
  useEffect(() => {
    // 외부 API를 통해 국적 목록을 가져오는 함수
    const fetchNationalities = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json(); // JSON 형식의 데이터 파싱
        const countries = data.map((country) => ({
          name: country.name.common,
          code: country.cca2,
        }));
        setNationalities(countries);
      } catch (error) {
        console.error('Error fetching nationalities:', error);
      }
    };

    fetchNationalities();
  }, []);

 

  const handleSelectChange = (e) => {
    setNationality(e.target.value);
    
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    
    axios.post(url,
      {
        email: email,           
        passwd: password,
        userName: username,
        nickname : nickname,
        birth : birthdate,
        country : nationality,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((result) => {
        console.log("Res : "+ result);
        console.log("singupDB!");
        window.alert('회원가입이 되었습니다! 로그인 페이지로 이동합니다.');
        navigate('/login');
      })
      .catch((error) => {
        window.alert('회원가입이 정상적으로 되지 않았습니다.');
        console.log(error);
      })      
  };

  return (
    <SignupContainer>
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
        id="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Input
        id="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
        id="nickname"
          type="text"
          placeholder="NickName"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          required
        />
        <Input
        id="birth"
          type="text"
          placeholder="Birthdate (YYYYMMDD)"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
          minLength={8}
          maxLength={8}
          required
        />
        <Dropdown>
          <Select id="country" value={nationality} onChange={handleSelectChange} required>
            <Option value="" >{nationality ? nationality : 'Select Nationality'}</Option>
            { nationalities.map((nation) => (
              <Option
                key={nation.code}
                value={nation.code}
              >
                {nation.name}
              </Option>
            ))}
          </Select>
        </Dropdown>
        <Button type="submit">Sign Up</Button>
      </form>
    </SignupContainer>   
  );
};

export default Signup;
