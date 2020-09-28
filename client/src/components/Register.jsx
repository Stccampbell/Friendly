import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';

class Register extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: '',
            email: '',
            name: '',
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
                            <div className="card-title">Register</div>
                            <hr/>
                <form className="loginform" onSubmit={(e) => this.props.handleRegisterSubmit(e, this.state)}>
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
                    <br/>

                    <input 
                    className='loginInput'
                    type="email" 
                    name="email" 
                    value={this.state.email} 
                    placeholder="Email" 
                    onChange={this.handleChange} 
                    />
                    <br/>

                    <input 
                    className='loginInput'
                    type="text" 
                    name="name" 
                    value={this.state.name} 
                    placeholder="Name" 
                    onChange={this.handleChange} 
                    />
                    <br/>

                    <input className="loginButton" type='submit' value='Register!'/>
                </form>
                <Link to="/login">Already have an account?</Link>
            </div>
            </div>
            </div>
        )
    }
}
export default Register;