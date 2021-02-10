import React from 'react'; 
import './App.css';
import {Route,Switch} from 'react-router-dom'; 
import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import UploadPage from './pages/uploadpage/uploadpage.component';
import FeedBackPage from './pages/feedbackpage/feedbackpage.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      currentUser: null 
    }
  }

  unsubscribeFromAuth = null 

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      createUserProfileDocument(user); 
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
      <div className='header'>
        <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/upload' component={UploadPage}/>
        <Route exact path='/feedback' component={FeedBackPage}/>
        </Switch>
      </div>
    </div>
  )
};
}
export default App;
