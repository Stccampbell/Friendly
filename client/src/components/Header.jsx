import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return(
        <div>
            <Link to="/">Home</Link>
            <Link to="/TextChat">TextChat</Link>
            <Link to="/VideoChat">VideoChat</Link>
            <Link to="/login">Login</Link> 
            <Link to="/register">Register</Link>
            <Link onClick={props.logout} to="/">Logout</Link>
        </div>
    )
}

export default Header;