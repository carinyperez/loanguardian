import React from 'react'; 


const tdna = require('./typingdna'); 


class Upload extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            userInput: ''

        }


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
          </form>
            </div>
        )
    }
}

export default Upload; 