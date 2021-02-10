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
                <Link className='header-link' to='/feedback'> SUBMIT FEEDBACK</Link>
                <Link className='header-link' to='/typingdna'> UPLOAD DOCUMENTS</Link>
                {
                    currentUser ? 
                    <Link className='header-link' onClick ={() => auth.signOut()} to='/'> SIGN OUT</Link>
                    :
                    <Link className='header-link' to='/login'>LOGIN</Link>
                }
            </div>
        </div>
    )
}

export default Header; 