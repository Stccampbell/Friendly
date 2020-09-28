import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';


class Login extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: '',
        }
    }

    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value,
        });
    }

    render(){
        return(
                <div className="loginPage">
                     <div className="card login">
                        <div className="card-body bodyLogin">
                            <div className="card-title">Login</div>
                            <hr/>
                            <form onSubmit={(e) => this.props.handleLoginSubmit(e, this.state)}>
                                <input 
                                className='loginInput'
                                type='text'
                                name='username'
                                value={this.state.username}
                                placeholder='Username'
                                onChange={this.handleChange} 
                                />
                                <br/>

                                <input 
                                className='loginInput'
                                type='password'
                                name='password'
                                value={this.state.password}
                                placeholder='Password'
                                onChange={this.handleChange} 
                                />
                                <br></br>
                                <input className="loginButton" type='submit' value='Log in!'/>
                            </form>
                            <Link to="/register">Don't have an account?</Link>
                        </div>
                    </div>
                </div>
        )
    }
}
export default Login;
