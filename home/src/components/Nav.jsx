import {Link } from 'react-router-dom';
import './Nav.css';

function Nav(){
    return (
    <div>
        <div className="navbar">
            <h1> WithMate </h1>
            <Link to="/" style={{
                textDecoration: 'none',
                color: 'rgb(117, 0, 98)',
                fontWeight:'bold',
                padding:' 20px 20px',
                borderRadius:'8px',
                display:'inline-block',
                
            }}>• Home  </Link>
            <Link to="/goal"style={{                
                textDecoration: 'none',
                color: 'rgb(117, 0, 98)',
                fontWeight:'bold',
                padding:' 20px 20px',
                borderRadius:'8px',
                display:'inline-block',
             
            }}>• Goal </Link>
            <Link to="/managing mate" style={{                
                textDecoration: 'none',
                color: 'rgb(117, 0, 98)',
                fontWeight:'bold',
                padding:' 20px 20px',
                borderRadius:'8px',
                display:'inline-block',
            }}>• ManagingMate </Link>
            <Link to="/my profile"style={{             
                textDecoration: 'none',
                color: 'rgb(117, 0, 98)',
                fontWeight:'bold', 
                padding:' 20px 20px',               
                borderRadius:'8px',
                display:'inline-block',
                marginTop:'11px'
            }}>• My profile </Link>
            <Link to="/setting"style={{
                textDecoration: 'none',
                color: 'rgb(117, 0, 98)',
                fontWeight:'bold',
                padding:' 20px 20px',
                borderRadius:'8px',
                display:'inline-block',
            }}>• Setting  </Link>

           
        </div>
    </div>
    )

}

export default Nav;