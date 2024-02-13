import Nav from '../components/Nav';
import Writemygoal from '../components/Writemygoal';
import {Link } from 'react-router-dom';
import Recommend from '../components/Recommend';
import styled from 'styled-components';
// import { useState } from 'react';
import NoAvailablemate from '../components/NoAvailableMate';
import Category from '../components/Category';
const MateRecommend= () =>{
    // const [hasAvailableMate, setHasAvailableMate] = useState(true);
    const hasAvailableMate = true;
    return (
        <>
        <header>
        <Nav/>
        </header>
        
        <div style={{ textAlign: 'center',display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Mycontent>
                <h3 style={{
                    fontSize: '45px',
                    display: 'inline-block',
                    padding: '40px',
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
                    letterSpacing: '3px',
                    margin:'0px',
                    fontFamily: 'Poor Story, sans-serif'
                
                }}>
                    SEEK YOUR MATE!
                </h3>
                <div style ={{
                    fontSize:'40px',                    
                    letterSpacing:'3px',
                    color:'grey',
                    padding: '40px',
                    fontFamily: 'Poor Story, sans-serif'
                }}>MY GOAL:</div>
                <Writemygoal/>
                <Category/>
                <br/>
                <Link to="/materecommend" style={{
                    textDecoration: 'none',
                    padding:'10px',
                    backgroundColor:'rgb(216, 223, 248)',
                    fontSize:'40px',
                    color:'rgb(117, 0, 98)',
                    fontWeight:'bold',
                    borderRadius:'20px'
                }}>Match Mate</Link>
                </Mycontent>
                <br/>
                {hasAvailableMate ?
                (<Recommend/>):( 
                <NoAvailablemate/>
                )}
                
        </div>
        </>
    )
}
export default MateRecommend;
const Mycontent=styled.div`
    /* background-color: #faf5eb;
    width:70vw;
    height:80vh;
    margin:5vh; */

`