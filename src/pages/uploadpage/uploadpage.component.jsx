import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './uploadpage.styles.scss'; 


class UploadPage extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {

        }

    }
    render() {
        return(
            <div className='login'>
                <SignIn/>
                <SignUp/>
            </div>
        )
    }
}

export default UploadPage; 