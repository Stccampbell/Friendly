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
            <div className="loginform">
                <form className="loginform" onSubmit={(e) => this.props.handleRegisterSubmit(e, this.state)}>
                    <input 
                    type='text'
                    name='username'
                    value={this.state.username}
                    placeholder='Username'
                    onChange={this.handleChange} 
                    />

                    <input 
                    type='password'
                    name='password'
                    value={this.state.password}
                    placeholder='Password'
                    onChange={this.handleChange} 
                    />

                    <input 
                    type="email" 
                    name="email" 
                    value={this.state.email} 
                    placeholder="email" 
                    onChange={this.handleChange} 
                    />

                    <input 
                    type="text" 
                    name="name" 
                    value={this.state.name} 
                    placeholder="Name" 
                    onChange={this.handleChange} 
                    />

                    <input type='submit' value='Register!'/>
                </form>
                <Link to="/login">Already have an account?</Link>
            </div>
        )
    }
}
export default Register;