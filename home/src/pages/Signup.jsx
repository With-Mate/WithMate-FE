
import { useEffect, useState } from 'react';
import styled from 'styled-components';

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

const DropdownContent = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: absolute;
  background-color: #faf8de;
  min-width: 200px;
  z-index: 1;
  top: 100%; /* 드롭다운 메뉴가 아래쪽으로 열리도록 설정 */
`;
const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [nationality, setNationality] = useState('');
  const [nationalities, setNationalities] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
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
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleSelect = (name) => {
    setNationality(name);
    console.log(nationality);
    setIsOpen(false);
  };
  /* // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // 회원가입 정보를 서버에 전달하는 로직을 구현합니다.
  //   console.log('Username:', username);
  //   console.log('Password:', password);
  //   console.log('Email:', email);
  //   console.log('Name:', name);
  //   console.log('Birthdate:', birthdate);
  //   console.log('Nationality:', nationality);
  // }; */


  return (
    <SignupContainer>
      <h2>WithMate</h2>
      <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Input
          type="text"
          placeholder="Birthdate (YYYYMMDD)"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
          minLength={8}
          maxLength={8}
          required
        />
          <Dropdown>
        <Select value={nationality} onClick={toggleDropdown} required>
          <Option value="" >{nationality ? nationality : 'Select Nationality'}</Option>
        </Select>
        <DropdownContent isOpen={isOpen}>
          {nationalities.map((nation) => (
            <Option
              key={nation.code}
              value={nation.code}
              onClick={() => handleSelect(nation.code, nation.name)}
            >
              {nation.name}
            </Option>
          ))}
        </DropdownContent>
      </Dropdown>
        <Button type="submit">Sign Up</Button>
    </SignupContainer>
  );
};

export default Signup;