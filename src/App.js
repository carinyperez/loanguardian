import './App.css';
import {Route} from 'react-router-dom'; 
import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';


function App() {
  return (
    <div className='App'>
      <Header/>
      <div className='header'>
        <Route exact path='' component={HomePage}/>
      </div>
    </div>
  );
}
export default App;
