import styled from "styled-components";
import Nav from "../components/Nav";
import { Link } from 'react-router-dom';


const First = () => {
  // const goToLink = () => {
  //   window.location.href ='https://kr.freepik.com/free-vector/couple-runners-jogging-together-in-park_22393901.htm#from_view=detail_alsolike';
  // };

  return (
    <>
      <Nav />
      
      <Container>
        
          {/* <h1>About WithMate</h1> */}
          <Header>
            <br/>
          <img src="logodark.png" alt="logo" style={{width:'25vw', height:'15vh'}}/> 
          <h2>- Recording Journeys Together</h2>
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
      <div style={{fontSize:'1.5vw',fontWeight: 'bold',position:'relative',left:'-21vw', fontStyle:'italic'}}>Welcome!</div>
      <div style={{width:'50vw',fontSize:'1.2vw',textAlign: 'left',marginTop:'1rem'}}>WithMate is not just another social networking site<br/>
      It is a special space for recording and sharing journeys. 
      Recognizing the negative impact of binary thinking and the culture of constant comparison in modern society, WithMate focuses on the value of the journey.</div>
      <div style={{fontWeight: 'bold',fontSize:'1.5vw',marginTop:'4rem',fontStyle: 'italic',position:'relative',left:'-21vw'}}>Our Values</div>
      <div style={{width:'50vw',fontSize:'1.2vw',marginTop:'1rem',textAlign: 'left'}} >  1.Find your own speed without making comparisons to others</div>
      <div style={{width:'50vw',fontSize:'1.2vw',textAlign: 'left'}} > 2. Emphasizing the Value of the Journey, Not Success or Failure: Opposition to dichotomous thinking that focuses only on the outcome </div>
      <div style={{fontWeight: 'bold',fontSize:'1.5vw',marginTop:'4rem',fontStyle: 'italic',position:'relative',left:'-7vw'}}>Embark on the Journey Together with WithMate!</div>
      <div style={{width:'50vw',fontSize:'1.2vw',marginTop:'1rem',textAlign: 'left'}} >WithMate supports your journey towards achieving goals and creates valuable records with everyone involved. Share the value of the journey, convey positive inspiration, and WithMate will make your journey more meaningful. Record and share your journey together with WithMate!  </div>

      </InfoContent>
     
      <PageContent>
{/*         
        <br/>
        <br/> */}
        <span style={{color:'rgb(103, 4, 86)', fontSize:'2rem', fontStyle:'normal',fontWeight:'bold', fontFamily:'unset'}}>How is this possible?</span>
        <br/>
        <br/>
        <div style={{ display: 'flex', alignItems: 'center', marginLeft:'1vw'}}>
      <img src="goalwhite.png" alt="goal image" />
      <span>
      Register your stickers on our sticker board! {'\n'}For a month&apos;s goal, each person can make six stickers each week{'\n'}Stickers are detailed goals to achieve the one-month goal{'\n\n'}
      There&apos;s no area classification between you and your mate. {'\n'}Let&apos;s decorate our sticker board together, without competition with our mates!
    </span>

    </div>
    <br/>
    <br/>
    <div style={{ display: 'flex', alignItems: 'center', marginLeft:'1vw'}}>

      <span>
      In withmate, there is no box to check the success or failure of a goal!{'\n'}
Success or failure doesn&apos;t matter.{'\n\n'} Let&apos;s focus on what we learned and felt in the course of this goal,{'\n'} Instead of how much work has been done and whether it is successful or not.{'\n\n'}Click on the goal sticker to write memo and learnings about the goal.{'\n'}Then the color change of the sticker will congratulate {'\n'}you on feeling and learning something through your goals
    </span>
    <img style={{width:'40vw', height:'55vh'}}src="goaledit.png" alt="goal edit image" />

    </div>
        <br/>
        <br/>
        <br/>
    <div style={{ display: 'flex', alignItems: 'center', marginLeft:'1vw', flexDirection:'column'}}>

      <span style={{fontSize:'3rem', fontWeight:'bold', fontStyle:'normal'}}>
      Now try withmate!
    </span>
    <span>Let&apos;s color the sticker board with your mate</span>
    <span>You can view the sticker board for each week you decorated this month on my profile page</span>
    <br/>
    <img style={{width:"50vw"}}src="goalres.png" alt="goal edit image" />
    <br/>
    </div>
      </PageContent>

      <br/>
      <br/>
      <footer style={{textAlign:'center'}}>
      <hr />
      Designed by Freepik / Author : upklyak 
      <br/>
      Link : https://kr.freepik.com/free-vector/couple-runners-jogging-together-in-park_22393901.htm#query=upklyak%20%EA%B3%B5%EC%9B%90%EC%97%90%EC%84%9C%20%EC%A1%B0%EA%B9%85%ED%95%98%EB%8A%94%20%EC%BB%A4%ED%94%8C&position=15&from_view=search&track=ais&uuid=5d35c0bb-0655-4cfc-ab43-3a5d5859e5fc
      </footer>
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
  /* margin-top: 8rem; */
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
const PageContent = styled.div`
  /* background-color: aliceblue; */
  width: 100vw;
  margin-top: 10vh;
  /* height:80vh; */
  align-items: center;
  display: flex;
  flex-direction: column;
  img{
    
    margin-right: 2vw;
    margin-left: 2vw;
    width: 45vw;
    height: 50vh;
  
  }
  span{
    font-size: 1.4rem;
    white-space: pre-line;
    display: block;
    font-weight:500;
    font-family:  "Nunito Sans", sans-serif;
    font-style: italic;
  }
  /* h1{
    color:'rgb(117, 0, 98)',
    
  } */
`


export default First;