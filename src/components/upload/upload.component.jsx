import React from 'react';
import typingDnaClient from './config';

const tdna = require('./typingdna'); 

class Upload extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            userInput: ''

        }

    }
    
    checkTypingPattern = () => {
        typingDnaClient.check(
          { userId : 'testuser',
            type: '2',
            device: 'desktop'
          },
          function(error, result) {
            if (error) { console.error(error) }
            console.log(result);
          });
    }
    

    handleChange = (event) => {
        this.setState({
            userInput: event.target.value
        })
    }


    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.userInput);
        this.getTypingPattern(); 
    }

    getTypingPattern = () => {
        const typingPattern = tdna.getTypingPattern({type:1, text:`${this.state.userInput}`});
        console.log(typingPattern); 
        return typingPattern; 
    }

    render() {
        return(
            <div>
            <form onSubmit={this.handleSubmit}>
                <label>
                Email: 
                <input type="text" placeholder='Type in your email' value={this.state.inputValue} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
                <button onClick={this.checkTypingPattern}>Check Typing Pattern</button>
          </form>
            </div>
        )
    }
}

export default Upload; 