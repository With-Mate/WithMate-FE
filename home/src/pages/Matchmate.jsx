import Nav from '../components/Nav';
import Writemygoal from '../components/Writemygoal';
import {Link } from 'react-router-dom';
import Category from '../components/Category';
import styled from 'styled-components';
const ManagingMate= () =>{
    return (
        <>
        <header>
        <Nav/>
        </header>
        <div style={{ textAlign: 'center',display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Mycontent>
                <h3 style={{
                    color:'rgb(59, 35, 5)',
                    fontSize: '3vw',
                    padding: '1vw',
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
                    letterSpacing: '0.2vw',
                    margin:'1vh',
                    fontFamily: 'Poor Story, sans-serif',
                    //backgroundColor:'rgb(115, 38, 38)',
                    
                }}>
                    SEEK YOUR MATE!
                </h3>
                <div style ={{
                    fontSize:'2.5vw',                    
                    letterSpacing:'0.2vw',
                    color:'rgb(59, 35, 5)',
                    padding: '1vw',
                    fontFamily: 'Poor Story, sans-serif',
                   // backgroundColor:'rgb(115, 38, 38)',
                }}>MY GOAL:</div>
                <Writemygoal/>
                <div style ={{
                    fontSize:'2.5vw',                    
                    letterSpacing:'0.2vw',
                    color:'rgb(59, 35, 5)',
                    padding: '1vw',
                    fontFamily: 'Poor Story, sans-serif',
                    //backgroundColor:'rgb(115, 38, 38)',
                }}>MY CATEGORY:</div>
                <Category/>
                </Mycontent>
                
                
        </div>
        <Link to="/materecommend" style={{
                    textDecoration: 'none',
                    padding:'1vw',
                    backgroundColor:'rgb(151, 116, 59)',
                    fontSize:'2.5vw',
                    color:'rgb(248, 248, 248)',
                    fontWeight:'bold',
                    borderRadius:'1vh',
                    position: 'absolute',
                    left:'41vw',
                    // left:'67vw',
                    top:'86vh'
                }}>Match Mate</Link> 
        </>
    )
}
export default ManagingMate;
const Mycontent=styled.div`
    background-color: #faf5eb;
    width:70vw;
    height:80vh;
    margin:5vh;

`