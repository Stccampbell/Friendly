import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return(
        <header>
            <h1 className="title">Friendly</h1>
            
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Menu
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    {props.auth ? <Link className="dropdown-item" to="/">Home</Link> : ''}
                    {!props.auth ? <Link className="dropdown-item" to="/login">Login</Link> : ''} 
                    {!props.auth ? <Link className="dropdown-item" to="/register">Register</Link> : ''}
                    {props.auth ? <Link className="dropdown-item" onClick={props.logout} to="/">Logout</Link> : ''}
                </div>
            </div>
        </header>
    )
}

export default Header;