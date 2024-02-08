import { useState } from "react";
import styled, { css } from "styled-components";
import useDetectClose from "./UseDetectClose";

const Category = () => {
const [myPageIsOpen, myPageRef, myPageHandler] = useDetectClose(false);
const [selectedCategory, setSelectedCategory] = useState("CHOOSE YOUR CATEGORY");


const handleEnterButtonClick = () => {
    console.log("Selected category:", selectedCategory);
};
const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    myPageHandler(); // Close the dropdown after selecting a category
};

return (
    <>
    <Wrapper>
    <DropdownContainer>
        <DropdownButton onClick={myPageHandler} ref={myPageRef}>
        {selectedCategory}
        </DropdownButton>
        <Menu isdropped={myPageIsOpen ? "true" : undefined}>
        <Ul>
            <Li>
        <LinkWrapper onClick={() => handleCategorySelect("HOBBY")}>HOBBY</LinkWrapper>
            </Li>
            <Li>
            <LinkWrapper onClick={() => handleCategorySelect("STUDY")}>STUDY</LinkWrapper>
            </Li>
            <Li>
            <LinkWrapper onClick={() => handleCategorySelect("ART")}>ART</LinkWrapper>
            </Li>
            <Li>
            <LinkWrapper onClick={() => handleCategorySelect("HEALTH")}>HEALTH</LinkWrapper>
            </Li>
            <Li>
            <LinkWrapper onClick={() => handleCategorySelect("ADVENTURE")}>ADVENTURE</LinkWrapper>
            </Li>
        </Ul>
        </Menu>
    </DropdownContainer>
    </Wrapper>
    <div style={{ marginTop: '10px', fontWeight: 'bold' }}>
        <button onClick={handleEnterButtonClick} style={{
        backgroundColor:'rgb(216, 223, 248)',
        }}>ENTER</button>
    </div>
    </>
);
};

export default Category;



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
