import styled from 'styled-components';
import Nav from '../components/Nav';

const Setting= () =>{
    return (
        <>
        <header>
        <Nav/>
        </header>
        
            <Myinformation>
            <h2 style={{textAlign:'center',fontSize:'2vw',color:'grey'}}>Information</h2>
            <h3 style={{position:'absolute',left:'35vw',top:'20vh',padding:'2vw',fontSize:'2vw'}}>Name</h3> 
            <h3 style={{position:'absolute',left:'55vw',top:'20vh',padding:'2vw',fontSize:'2vw'}}>USER1</h3> 
            <h3 style={{position:'absolute',left:'35vw',top:'30vh',padding:'2vw',fontSize:'2vw'}}>ID</h3> 
            <h3 style={{position:'absolute',left:'55vw',top:'30vh',padding:'2vw',fontSize:'2vw'}}>USER1</h3> 
            <h3 style={{position:'absolute',left:'35vw',top:'40vh',padding:'2vw',fontSize:'2vw'}}>E-mail</h3>  
            <h3 style={{position:'absolute',left:'50vw',top:'40vh',padding:'2vw',fontSize:'2vw'}}>0000@gmail.com</h3> 
            <h3 style={{position:'absolute',left:'35vw',top:'50vh',padding:'2vw',fontSize:'2vw'}}>Birth</h3>  
            <h3 style={{position:'absolute',left:'52vw',top:'50vh',padding:'2vw',fontSize:'2vw'}}>2000.01.01</h3>  
            <h3 style={{position:'absolute',left:'35vw',top:'60vh',padding:'2vw',fontSize:'2vw'}}>Nation</h3>  
            <h3 style={{position:'absolute',left:'55vw',top:'60vh',padding:'2vw',fontSize:'2vw'}}>Korea</h3>    
            </Myinformation>
            <h4 style={{position:'absolute',left:'48vw',top:'80vh',padding:'1vw',fontSize:'1vw',color:'grey'}}>Logout</h4>
            <h4 style={{position:'absolute',left:'44vw',top:'85vh',padding:'1vw',fontSize:'1vw',color:'grey'}}>Withdraw Membership</h4>
        
        </>
    )
}
export default Setting;
const Myinformation=styled.div`
  
`