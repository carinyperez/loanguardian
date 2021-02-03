import React from 'react'; 
import logo from '../../assets/logo.svg';
import styles from './header.styles.scss'; 

const Header = () => {
    return (
        <div className='header'>
            <img className='header-image' src={logo} alt="Logo"/>
            <h1 className='header-signin'> SIGN IN</h1>  
        </div>
    )
}

export default Header; 