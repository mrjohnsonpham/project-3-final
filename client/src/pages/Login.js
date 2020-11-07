<<<<<<< HEAD
import React from 'react';
import LoginForm from '../components/LoginForm'

function Login(props) {

    return(
        <div>
            <h1>
                Login
            </h1>
            <LoginForm/>
        </div>
    )
}

=======
import React, { useContext } from 'react';
import LoginForm from '../components/LoginForm';
import {Redirect} from 'react-router-dom';
import UserContext from '../utils/UserContext';

function Login(props){
    const {loggedIn} = useContext(UserContext);
    return (
        <div className="container">
            {loggedIn && <Redirect to="/" />}
            <h1>Login</h1>
            <LoginForm className="full-page-login" />
        </div>
    )
}
>>>>>>> 21f58eb1b861db4424f106cf8f69bd2b2b8e1935
export default Login;