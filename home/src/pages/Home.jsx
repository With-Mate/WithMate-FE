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
      <br/><br/>
      <Footer style={{textAlign:'center'}}>
      <hr />
      Designed by Freepik / Author : upklyak 
      <br/>
      Link : https://kr.freepik.com/free-vector/couple-runners-jogging-together-in-park_22393901.htm#query=upklyak%20%EA%B3%B5%EC%9B%90%EC%97%90%EC%84%9C%20%EC%A1%B0%EA%B9%85%ED%95%98%EB%8A%94%20%EC%BB%A4%ED%94%8C&position=15&from_view=search&track=ais&uuid=5d35c0bb-0655-4cfc-ab43-3a5d5859e5fc
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
