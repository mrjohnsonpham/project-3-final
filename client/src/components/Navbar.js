import React, {  useState , Fragment} from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../src/logo.svg'
import styled from 'styled-components'
import { ButtonContainer } from './Button'
import LoginForm from '../components/LoginForm/index'


function Navbar (props) {
   
        const [loginExpanded, setLoginExpanded] = useState(false);
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
            </NavWrapper>
        )
    }


const NavWrapper = styled.nav`
background: var(--mainBlue);
.nav-link:{
    color: var(--mainWhite)!important;
    font-size: 1.3rem;
    text-transform:capitalize;
}
`

export default Navbar;
