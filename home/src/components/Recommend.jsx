
import styled from 'styled-components';

function Recommend() {

  return (
    <>
      <h3
        style={{
          fontSize: '25px',
          display: 'inline-block',
          padding: '40px',
          position: 'relative',
          left: '35vw',
          letterSpacing: '2x',
          borderRadius: '20px',
          fontFamily: 'Poor Story, sans-serif',
          backgroundColor: 'rgb(252, 246, 246)',
        }}
      >
        There are matching mates available right now
      </h3>
      <br />

      <div
        style={{
          fontSize: '2vw',
          letterSpacing: '1px',
          fontFamily: 'Poor Story, sans-serif',
          position: 'relative',
          left: '40vw',
        }}
      >
        Period: 4 weeks (28 days)
      </div>
        <ProfileCard >
          <h4>user</h4>
          <p>Goal: be a good mother </p>
          <p>Category:health </p>
          <p>Country:korea </p>
        </ProfileCard>
    
      <Selectmate> SELECT</Selectmate>
    </>
  );
}

export default Recommend;

const ProfileCard = styled.div`
  padding: 20px;
  margin: 20px;
  background-color: beige;
  border-radius: 10px;
  display: inline-block;
  position: relative;
  left:42vw;
`;

const Selectmate=styled.button`
     padding:30px;
     font-size: 30px;
     background-color: beige;
     margin:30px;
     position:relative;
     display:flex;
     left:42vw;
    
`