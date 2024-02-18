import styled from "styled-components";
import Nav from "../components/Nav";
import { Link } from 'react-router-dom';

const First = () => {
  return (
    <>
      <Nav />
      
      <Container>
        
          <h1>About WithMate</h1>
          <Header>
          <h2>WithMate - Recording Journeys Together</h2>
        </Header>
        <LinksContainer>
          <StyledLink to='/login'>Login</StyledLink>
          <StyledLink to='/signup'>Signup</StyledLink>
        </LinksContainer>
        
      </Container>
      {/* <ImageContainer>
        <img src="sadimage.jpg" alt="Sad Image" />
      </ImageContainer> */}
      <InfoContent>
      <div style={{fontSize:'1.5vw',fontWeight: 'bold',position:'relative',left:'-21vw'}}>Welcome!</div>
      <div style={{width:'50vw',fontSize:'1.2vw',textAlign: 'left',marginTop:'1rem'}}>WithMate is not just another social networking site<br/>
      It is a special space for recording and sharing journeys. 
      Recognizing the negative impact of binary thinking and the culture of constant comparison in modern society, WithMate focuses on the value of the journey.</div>
      <div style={{fontWeight: 'bold',fontSize:'1.5vw',marginTop:'4rem',fontStyle: 'italic',position:'relative',left:'-21vw'}}>Our Values</div>
      <div style={{width:'50vw',fontSize:'1.2vw',marginTop:'1rem',textAlign: 'left'}} >  1.Find your own speed without making comparisons to others</div>
      <div style={{width:'50vw',fontSize:'1.2vw',textAlign: 'left'}} > 2. Emphasizing the Value of the Journey, Not Success or Failure: Opposition to dichotomous thinking that focuses only on the outcome </div>
      <div style={{fontWeight: 'bold',fontSize:'1.5vw',marginTop:'4rem',fontStyle: 'italic',position:'relative',left:'-7vw'}}>Embark on the Journey Together with WithMate!</div>
      <div style={{width:'50vw',fontSize:'1.2vw',marginTop:'1rem',textAlign: 'left'}} >WithMate supports your journey towards achieving goals and creates valuable records with everyone involved. Share the value of the journey, convey positive inspiration, and WithMate will make your journey more meaningful. Record and share your journey together with WithMate!  </div>
      </InfoContent>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1vw;
`

const Header = styled.div`
  text-align: center;
  margin-top: 8rem;
  margin-bottom: 3rem;
  font-size: 1.2vw;
`

const LinksContainer = styled.div`
  display: flex;
  gap: 1rem;

`

const StyledLink = styled(Link)`
  display: flex;
  width: 15vw;
  height: 7vh;
  justify-content: center;
  text-decoration: none;
  font-weight: bold;
  background-color: lavender;
  align-items: center;
  text-decoration: none;
  color: black;
  font-weight: bold;
`

// const ImageContainer = styled.div`
//   display: flex;
//   margin-top: 2rem;
  
//   img {
//     width: 30vw;
//     height: 45vh;
//     border-radius: 40%;
//     position: relative;
//     left:15vw;
//     box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
//   }
// `

const InfoContent = styled.div`
  flex-direction: column;
  align-items: center;
  display: flex;
  margin:5rem;
`



export default First;
