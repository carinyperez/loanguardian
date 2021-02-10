import React from 'react'; 
import { withRouter } from 'react-router-dom';
import TypingDNAClient from 'typingdnaclient';
import typingDnaClient from '../../components/typingdna/config'; 
import { tdna } from '../typingdna/typingdna';
import './upload.styles.scss'; 


class Upload extends React.Component  {

    render () {
    const {currentUser} = this.props; 
    if(!currentUser) {
        this.props.history.push('/login'); 
        return (
            null 
        )
    } 
    
    else if(currentUser) {
        const enrollment = this.props.location.state.enrollment;
        const score = this.props.location.state.highConfidence;
        if(enrollment > 0) {
            return (
                <div className='upload'>
                    <div className='upload-box'>
                        <p>Hello, {currentUser.displayName}</p>
                        <p>You have been authenticated</p>
                        <p>Confidence score: {score}</p>
                        <p>Device: Desktop</p>
                        <p>Enrollments: {enrollment}</p>
                    </div>
                    <p className='upload'>Upload your signed loan documents below</p>
                    <form className='form'>
                        <input type="file"/>
                        <input type="submit"/>
                    </form>
                </div>
            )

        }
    } 
    else {
        this.props.history.push('/typingdna'); 
            return (
                null
            )
    } 
    }      

}

export default withRouter(Upload);
