import React from 'react'; 
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { auth } from '../../firebase/firebase.utils';
import './header.styles.scss'; 


const Header = ({currentUser}) => {
    return (
        <div className='header'>
            <div className='logo'>
            <a href='/'>
                <img src={logo} alt="Logo"/>
            </a>
            </div>
            <div className='links'>
                <Link className='header-link' to='/upload'>UPLOAD DOCUMENTS</Link>
                <Link className='header-link' to='/feedback'> SUBMIT FEEDBACK</Link>
                {
                    currentUser ? 
                    <div className='header-link' onClick ={() => auth.signOut()}> SIGN OUT</div>
                    :
                    <Link className='header-link' to='/upload'>SIGN IN</Link>
                }
            </div>
        </div>
    )
}

export default Header; 