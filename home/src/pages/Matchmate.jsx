import { useState, useRef, useEffect } from 'react';
import Nav from '../components/Nav';
import NoAvailablemate from '../components/NoAvailableMate';
import styled, { css } from 'styled-components';
import Recommend from '../components/Recommend';
import axios from 'axios';
import useDetectClose from '../components/UseDetectClose';
import {getCookie} from '../cookie';
// import cookie from '../cookie';
// const url =import.meta.env.VITE_Match_URL;

const MatchMate = () => {
  const [isMatchButtonClicked,setIsMatchButtonClicked] = useState(false);
  const hasAvailableMate = true;
  const scrollRef = useRef(null);
  const [goal, setGoal] = useState('');
  const [myPageIsOpen, myPageRef, myPageHandler] = useDetectClose(false);
  const [selectedCategory, setSelectedCategory] = useState("CHOOSE YOUR CATEGORY");

  
  const handleEnterButtonClick = async () => {
    console.log("My Goal:", goal);
    console.log("Selected category:", selectedCategory);
    setIsMatchButtonClicked(true);
    console.log(getCookie('is_login'))

    try {
      const result = await axios.post(
        "http://34.70.229.21:8080/api/match/register",
        {
          goal: goal,
          category : selectedCategory,
        },
        {
          headers: {
            Authorization:getCookie('is_login'),
            'Content-Type': 'application/json',
          },
          
        }
      );
      console.log('Response:',result);
      console.log('Success');
    } catch (error) {
      console.error(error);
    }
  };
  


const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    myPageHandler(); 
};

  useEffect(() => {
    if (isMatchButtonClicked && scrollRef.current) {
      const { top } = scrollRef.current.getBoundingClientRect();

      window.scrollTo({ top: window.scrollY + top + 500, behavior: 'smooth' });
    }
  }, [isMatchButtonClicked]);

  return (
    <>
      <header>
        <Nav />
      </header>
      <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Mycontent ref={scrollRef}>
          <h3
            style={{
              color: 'rgb(59, 35, 5)',
              fontSize: '3vw',
              padding: '1vw',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
              letterSpacing: '0.2vw',
              margin: '1vh',
              fontFamily: 'Poor Story, sans-serif',
            }}
          >
            SEEK YOUR MATE!
          </h3>
          <div
            style={{
              fontSize: '2.5vw',
              letterSpacing: '0.2vw',
              color: 'rgb(59, 35, 5)',
              padding: '1vw',
              fontFamily: 'Poor Story, sans-serif',
            }}
          >
            MY GOAL:
          </div>
          <form>
            <Input
              type="text"
              placeholder="Write your goal..."
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              required
              style={{
                width: '27vw',
                height: '7vw',
                fontSize: '2vw',
              }}
            />
            <div
              style={{
                fontSize: '2.5vw',
                letterSpacing: '0.2vw',
                color: 'rgb(59, 35, 5)',
                padding: '1vw',
                fontFamily: 'Poor Story, sans-serif',
              }}
            >
              MY CATEGORY:
            </div>
            <Wrapper>
              <DropdownContainer>
                <DropdownButton onClick={myPageHandler} ref={myPageRef}>
                  {selectedCategory}
                </DropdownButton>
                <Menu isdropped={myPageIsOpen ? 'true' : undefined}>
                  <Ul>
                    <Li>
                      <LinkWrapper onClick={() => handleCategorySelect('HOBBY')}>HOBBY</LinkWrapper>
                    </Li>
                    <Li>
                      <LinkWrapper onClick={() => handleCategorySelect('STUDY')}>STUDY</LinkWrapper>
                    </Li>
                    <Li>
                      <LinkWrapper onClick={() => handleCategorySelect('ART')}>ART</LinkWrapper>
                    </Li>
                    <Li>
                      <LinkWrapper onClick={() => handleCategorySelect('HEALTH')}>HEALTH</LinkWrapper>
                    </Li>
                    <Li>
                      <LinkWrapper onClick={() => handleCategorySelect('ADVENTURE')}>ADVENTURE</LinkWrapper>
                    </Li>
                  </Ul>
                </Menu>
              </DropdownContainer>
            </Wrapper>
            
      
          </form>
        </Mycontent>
      </div>
      <button
        onClick={handleEnterButtonClick}
        style={{
          textDecoration: 'none',
          padding: '1vw',
          backgroundColor: 'rgb(151, 116, 59)',
          fontSize: '2.5vw',
          color: 'rgb(248, 248, 248)',
          fontWeight: 'bold',
          borderRadius: '1vh',
          position: 'absolute',
          left: '41vw',
          top: '86vh',
        }}
      >
        Match Mate
      </button>
      {isMatchButtonClicked && hasAvailableMate ? <Recommend /> : null}
      {!isMatchButtonClicked ? null : hasAvailableMate ? null : <NoAvailablemate />}
    </>
  );
};

const Mycontent = styled.div`
  background-color: #faf5eb;
  width: 70vw;
  height: 80vh;
  margin: 5vh;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Input = styled.input`
  margin-bottom: 3vh;
  padding: 1.5vh;
`;
export default MatchMate;

const Wrapper = styled.div`
  margin: 2vh auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
  font-size: 2vw;
  background: #ece2c6;
  width: 27vw;
  height: 7vw;
  font-weight: bold;
`;

const DropdownContainer = styled.div`
  position: relative;
  text-align: center;
`;


const DropdownButton = styled.div`
cursor: pointer;
`;
const Menu = styled.div.attrs(props => ({
    isdropped: props.isdropped ? "true" : undefined,
}))`
    background: #e5ccb8;
    position: absolute;
    top: 7vh;
    left: 50%;
    width: 10vw;
    text-align: center;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
    border-radius: 3px;
    opacity: 0;
    visibility: hidden;
    transform: translate(-50%, -20px);
    transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
    z-index: 9;

    &:after {
    content: "";
    height: 0;
    width: 0;
    position: absolute;
    top: -3px;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 12px solid transparent;
    border-top-width: 0;
    border-bottom-color: #c6d7ec;
    }

    ${(props) =>
    props.isdropped
        ? css`
            opacity: 1;
            visibility: visible;
            transform: translate(-50%, 0);
            left: 50%;
        `
        : css`
            opacity: 0;
            visibility: hidden;
            transform: translate(-50%, -20px);
            left: 50%;
        `};
`;
Menu.shouldForwardProp = (prop) => prop !== "isdropped";


const Ul = styled.ul`
& > li {
    margin-bottom: 2vh;
}

& > li:first-of-type {
    margin-top: 10px;
}

list-style-type: none;
padding: 0;
margin: 0;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
`;

const Li = styled.li``;

const LinkWrapper = styled.a`
font-size: 1vw;
text-decoration: none;
color: white;
`