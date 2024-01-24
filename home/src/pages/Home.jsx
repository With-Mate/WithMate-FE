import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import styled from 'styled-components';
import EncouragementBox from '../components/EncouragementBox';
// import GoalMessage from '../components/GoalMessage'
const Home = () => {
  return (
    <>
    
      <header>
        <Nav/>
      </header>
      <Main>
      <h2>Find your own speed with your mate! </h2>
      <img src="mate.png" style={{width: '800px', height: '500px', borderRadius: '40%'}}/>
      </Main>
      <Message>
      <EncouragementBox />
      </Message>
      
      {/* <GoalMessage/> */}
      
      </>

  );
};



export default Home;
const Main=styled.div`
    text-align:center;
    position: relative;
`;

const Message=styled.div`
    position:relative;
    top:50px;
`



