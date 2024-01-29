
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
      <Main>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h2 style={{
            fontSize:'45px',
            display:'inline-block', 
            padding:'30px', 
            fontStyle: 'italic',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
            letterSpacing: '3px',          
            fontFamily: 'Poor Story, sans-serif' 
            }}>
            Find your own speed with your mate!</h2>
          <img src="mate.png" style={{width: '850px', height: '550px', borderRadius: '40%',boxShadow: '5px 5px 20px rgba(0, 0, 0, 0.2)'}}/>
        </div>
      </Main>
      <EncouragementBox />
      <EncouragementBox2/>
      <MyGoal/>
      <MateGoal/>
    
      </>

  );
}
export default Home;
const Main=styled.div`
    text-align:center;
    
    
`;

// const Message1=styled.div`
//     position:absolute;
//     top:300px;
//     left:60px;
//     background-color:rgb(245, 245, 245);
//     border: 2px solid lightgrey;
//     padding: 15px;
//     box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.2);
// `

