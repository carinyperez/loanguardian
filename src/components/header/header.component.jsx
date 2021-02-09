import React from 'react'; 
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import styles from './header.styles.scss'; 

const Header = () => {
    return (
        <div className='header'>
            <a href='/'>
                <img className='header-image' src={logo} alt="Logo"/>
            </a>
            <div className='links'>
                <Link className='header-upload' to='/upload'>UPLOAD DOCUMENTS</Link>
                <Link className='header-upload' to='/feedback'> SUBMIT FEEDBACK</Link>
            </div>
        </div>
    )
}

export default Header; 