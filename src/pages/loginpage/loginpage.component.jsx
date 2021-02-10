import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import './loginpage.styles.scss'; 
import { withRouter } from 'react-router-dom';

class LoginPage extends React.Component {
    render() {
        const {currentUser, history} = this.props; 
        if (!currentUser) {
                return(
                    <div className='login'>
                        <SignIn currentUser={currentUser}/>
                        <SignUp currentUser={currentUser}/>
                    </div>
                ) 
        } else { 
            history.push('/typingdna')
            return (
                null
            )

        }
    }
}

export default withRouter(LoginPage);
