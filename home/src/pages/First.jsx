import styled from "styled-components";
import Nav from "../components/Nav";
import { Link } from 'react-router-dom';

const First = () => {
  return (
    <>
     <Nav />
      
      <Container>
        <h1>About WithMate</h1>
       <StyledLink to='/login'>Login</StyledLink>
       <StyledLink to='/signup'>Signup</StyledLink>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`
const StyledLink = styled(Link)`
display: flex;
  width: 10vw;
  height: 5vh;
 justify-content: center;
  text-decoration: none;
  color: black;
  font-weight: bold;
  margin-top: 20vh;
  margin-bottom: 20vh;
  background-color: lavender;
 align-items: center;
  text-decoration: none;
  color: black;
  font-weight: bold;
`

export default First;