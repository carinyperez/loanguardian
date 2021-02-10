import React from 'react'; 
import './typingdnapage.styles.scss';
import { withRouter } from 'react-router-dom';
import TypingDna from '../../components/typingdna/typingdna.component'; 


class TypingDnaPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render() {
        const currentUser = this.props.currentUser; 
        const {history} = this.props; 
        if (currentUser) {
            return(
                <TypingDna currentUser={currentUser}/>
            )
        }  
        else {
            history.push(`/login`);
            return(
                null
            )
        }
    }

}

export default withRouter(TypingDnaPage); 
