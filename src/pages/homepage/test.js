// import React from 'react';
// import './uploadpage.styles.scss'; 
// import typingDnaClient from './config';

// const tdna = require('./typingdna'); 


// class UploadPage extends React.Component {
//     constructor(props) {
//         super(props); 
//         this.state = {
//             user: '',
//             email: ''

//         }

//     }

//     handleEmailChange = (event) => {
//         this.setState({
//             email: event.target.value
//         })
//     }
//     handleUserChange = (event) => {
//         this.setState({
//             user: event.target.value
//         })
//     }

//     handleSubmit = (event) => {
//         event.preventDefault();
//     }

//     getTypingPattern = () => {
//         // const typingPattern = tdna.getTypingPattern({type:1, text:`${this.state.email}`});

//         console.log(tdna.addTarget());

//         // returns a typing pattern 
//         // const typingPattern = tdna.getTypingPattern({
//         //     targetId: 'email'
//         // }); 
//         // console.log(typingPattern); 
//         // console.log(tdna.getQuality(typingPattern)); 
//     }


//     saveTypingPattern = () => {
//         const {user} = this.state; 
//         this.getTypingPattern(); 
//         const saveTypingPattern = typingDnaClient.save(
//             user,
//             this.getTypingPattern(), 
//             function(error, result) {
//                 if (error) { console.error(error) }
//                 console.log(result);
//         });
//     }

//     checkTypingPattern = () => {
//         typingDnaClient.check(
//           { userId : 'testuser',
//             type: '2',
//             device: 'desktop'  
//           },
//           function(error, result) {
//             if (error) { console.error(error) }
//             console.log(result);
//           });
//     }

//     render() {
//         const {user, email} = this.state; 
//         return(
//             <div className="form-container">
//             <form className="form" onSubmit={this.handleSubmit}>
//                 <input className="upload" type="file" accept="pdf"></input>
//                 <p>Enter your name</p>
//                 <input type="text" value={this.state.user} onChange={this.handleUserChange}/>
//                 <p>Enter your email</p>
//                 <input id='email' type="text" value={this.state.email} onChange={this.handleEmailChange} />
//                 <input type="submit" value="Submit" />
//                 <button onClick={this.getTypingPattern}>Get Typing Pattern Quality</button> 
//                 <h1>Hello {user}, your email is {email}</h1> 
//           </form>
//             </div>
//         )
//     }
// }

// export default UploadPage; 