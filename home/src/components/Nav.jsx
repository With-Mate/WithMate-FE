import {Link } from 'react-router-dom';
import React from 'react';
import './Nav.css';

function Nav(){
    return (
    <div>
        <div className="navbar">
            <h1> WithMate </h1>
            <Link to="/">Home  </Link>
            <Link to="/goal">Goal  </Link>
            <Link to="/managing mate">ManagingMate  </Link>
            <Link to="/my profile">My profile  </Link>
            <Link to="/setting">Setting  </Link>

           
        </div>
    </div>
    )

}

export default Nav;