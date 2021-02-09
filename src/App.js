import './App.css';
import {Route,Switch} from 'react-router-dom'; 
import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import UploadPage from './pages/uploadpage/uploadpage.component';
import FeedBackPage from './pages/feedbackpage/feedbackpage.component';


function App() {
  return (
    <div className='App'>
      <Header/>
      <div className='header'>
        <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/upload' component={UploadPage}/>
        <Route exact path='/feedback' component={FeedBackPage}/>
        </Switch>
      </div>
    </div>
  );
}
export default App;
