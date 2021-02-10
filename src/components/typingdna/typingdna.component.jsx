import React from 'react';
import './typingdna.styles.scss'; 
import typingDnaClient from './config';
import {tdna} from './typingdna'; 
import {writeUserData, createUserProfileDocument} from '../../firebase/firebase.utils';
import { withRouter } from 'react-router-dom';
import Upload from '../../components/upload/upload.component'; 
import CustomButton from '../../components/custom-button/custom-button.component';

class TypingDna extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            quote: 'I am authenticated by the way I type',
            inputValue: '',
            verification: null
        }
    }

    componentDidMount() {
        const {currentUser} = this.props; 
        const {count} = this.state; 
        if(currentUser) {
            this.getQuote();
            this.verifyAndEnrollUserTyping();   
        }  
    }


    getQuote = () => {
        const {quote} = this.state; 
        typingDnaClient.getQuote(100, 130,
            function(error, result) {
                if (error) { 
                    console.error(error) 
                } else {
                    this.setState({quote: result.quote})
                } 
        }.bind(this)
        );
    }

    getTypingPattern = () => {
        const typingPattern = tdna.getTypingPattern({type:0, length:160});
        return typingPattern; 
    }
    


    verifyAndEnrollUserTyping = () => {
        const currentUser = this.props.currentUser.displayName; 
        const userId  = this.props.currentUser.id; 
        const tp = this.getTypingPattern(); 
        
        if (tp !== '') {
            writeUserData(userId,tp);
        } else {
            alert('Pattern not saved, try again')
        }

        typingDnaClient.auto(
            currentUser,
            tp,
            function(error, result) {
                if (error) { console.error(error) }
                if (result) {
                    this.setState({enrollment: result}); 
                }  
        }.bind(this)
        );
    }


    getQuality = () => { 
        const typingPattern = tdna.getTypingPattern({type:0, length:160});
        const quality = tdna.getQuality(typingPattern);
        return quality; 
    }

    saveTypingPattern = () => {
        const currentUser = this.props.currentUser.displayName; 
        const typingPattern = this.getTypingPattern(); 
        const quality = this.getQuality();
        const {history} = this.props; 
        console.log(currentUser, typingPattern, quality); 

        typingDnaClient.auto(
            currentUser, 
            typingPattern, 
            quality,
            function(error, result) {
                if (error) { console.error(error) }
                if (result) {
                    this.setState({verification : result});
                    this.props.history.push('/uploaddocs', result); 
                }
            }.bind(this)
        );
    }


    highlightText = (event) => {
        const {inputValue, quote} = this.state;
        document.getElementById('quote').innerHTML = quote.replace(new RegExp(inputValue, "gi"), (match) => `<mark>${match}</mark>`);
    }
    
    handleChange = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    }

    render() { 
        const {quote} = this.state; 
            return (
                <div className='text'>
                    <h2>You need to authenticate before you can upload documents. To authenticate type in the  2 quotes below</h2>
                    <p id='quote'>{quote}</p>
                    <textarea id='textarea' type='text' placeholder='Type in the quote shown above' value={this.state.inputValue} className='text-box' onChange={this.handleChange} onKeyUp={this.highlightText}></textarea>
                    <CustomButton onClick={this.saveTypingPattern}>Authenticate </CustomButton>
                </div>

            )
        }
       
}

export default withRouter(TypingDna);  


