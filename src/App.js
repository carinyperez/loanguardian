import React from 'react'; 
import './App.css';
import {Route,Switch} from 'react-router-dom'; 
import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import LoginPage from './pages/loginpage/loginpage.component';
import FeedBackPage from './pages/feedbackpage/feedbackpage.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import TypingDnaPage from './pages/typingdnapage/typingdnapage.component';
import Upload from './components/upload/upload.component';


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      currentUser: null 
    }
  }

  unsubscribeFromAuth = null 

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
        if(userAuth) {
          const userRef = await createUserProfileDocument(userAuth);
          userRef.onSnapshot(snapShot => {
            // console.log(snapShot.data()); 
            this.setState({
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
            })
          })
        } else {
          this.setState({
            currentUser: userAuth
          })
        }
    }); 
  }

  componentWillUnmount() {
    //closes the subscription 
    this.unsubscribeFromAuth(); 
  }

  render() {
  return (
    <div className='App'>
      <Header currentUser={this.state.currentUser}/>
      <div className='main-header'>
        <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/login' 
        render={props => <LoginPage currentUser={this.state.currentUser} />}
        />
        <Route exact path='/feedback' component={FeedBackPage}/>
        <Route exact path='/typingdna' render={props => <TypingDnaPage  currentUser={this.state.currentUser}/>}/>
        <Route exact path='/uploaddocs' render={props => <Upload currentUser={this.state.currentUser}/>}
        />
        </Switch>
      </div>
    </div>
  )
};
}
export default App;

