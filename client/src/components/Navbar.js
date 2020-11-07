<<<<<<< HEAD
import React, {  useState , Fragment} from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../src/logo.svg'
import styled from 'styled-components'
import { ButtonContainer } from './Button'
import LoginForm from '../components/LoginForm/index'


function Navbar (props) {
   
        const [loginExpanded, setLoginExpanded] = useState(false);
=======
                            // kyle added useState, Fragment and useContext
import React, { Component, useState, Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../src/logo.svg';
import styled from 'styled-components';
import { ButtonContainer } from './Button';
import UserContext from "../utils/UserContext";
import LoginForm from "../components/LoginForm";

function Navbar(props)  {
    
        // kyle added 11-12
        const [loginExpanded, setLoginExpanded] = useState(false);
        const {email, loggedIn} = useContext(UserContext);
>>>>>>> 21f58eb1b861db4424f106cf8f69bd2b2b8e1935
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
             
                <Link to='/'>
                    <img src={Logo} alt="logo" />
                </Link>
                { !loginExpanded && <button onClick= {() => setLoginExpanded(true)}>Login</button>}
                { loginExpanded && 
                (() =>
                <Fragment>
                    <LoginForm>

                    </LoginForm>
                <button onClick= {() => setLoginExpanded(false)}>X</button>
                </Fragment>
                )()
}
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to='/' className="nav-link" >
                            Products
                        </Link>
                    </li>
                </ul>
                <Link to='/cart' className="ml-auto" >
                    <ButtonContainer>
                        <span className="mr-2">
                            <i className="fa fa-cart-plus" />
                        </span>
                        My Cart
                    </ButtonContainer>
                </Link>
                {/* kyle added 35-52*/}
                { (() => {
        if(loggedIn){
          return <p className="logged-in-text">Logged in as {email} <Link to="/logout" onClick={ () => setLoginExpanded(false)}>Logout</Link> </p>;
        }
        else{
          if(!loginExpanded){
            return <button onClick={ () => setLoginExpanded(true) }>Login</button>;
          }
          else{
            return (
              <Fragment>
                <LoginForm className="top-menu-login"/>
                <button onClick={ () => setLoginExpanded(false) }>X</button>
              </Fragment>
            )
          } 
        }
      })()}
            </NavWrapper>
        )
<<<<<<< HEAD
    }

=======
    
}
>>>>>>> 21f58eb1b861db4424f106cf8f69bd2b2b8e1935

const NavWrapper = styled.nav`
background: var(--mainBlue);
.nav-link:{
    color: var(--mainWhite)!important;
    font-size: 1.3rem;
    text-transform:capitalize;
}
// kyle added 66-72
.logged-in-text{
    font-size:10px;
    a {
        font-size:14px;
        color: white;
    }
}
`

export default Navbar;
