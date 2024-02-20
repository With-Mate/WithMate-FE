import Nav from '../components/Nav';
import styled from 'styled-components';
import EncouragementBox from '../components/EncouragementBox';
import EncouragementBox2 from '../components/EncouragementBox2';
import MyGoal from '../components/MyGoal';
import MateGoal from '../components/MateGoal';

const Home = () => {
  return (
    <>
      <header>
        <Nav/>
      </header>
      <h2 style={{
        fontSize: '3vw', 
        padding: '1.875rem', 
        fontStyle: 'italic',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
        letterSpacing: '0.1875rem',
        fontFamily: 'Poor Story, sans-serif',
        textAlign:'center'
        }}>
        Find your own speed with your mate!
      </h2>
      <Main>
        <ImageContainer>
          <img src="mate.png" style={{
          width:'50vw', 
          height: '50vh',             
          borderRadius: '40%',
          boxShadow: '5px 5px 20px rgba(0, 0, 0, 0.2)'
          }}/>
          <EncouragementBox/>
          <EncouragementBox2/>
          <MyGoal/>
          <MateGoal/>
        </ImageContainer>
      
      </Main>
      <Footer>
        <hr/>
        license : Author upklyak Source Freepik
        </Footer>
    </>
  );
}

export default Home;

const Main = styled.div`
  text-align: center;
  padding: 1.2rem ;
`;
const ImageContainer = styled.div`
  
`

const Footer = styled.footer`

    width: 100vw;
    text-align: center;
    position: relative;
    bottom:-8vh;

    hr {
    border: 1px solid lightgrey;

    }
`;
