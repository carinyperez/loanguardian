import React from 'react'; 
import './homepage.styles.scss';
import logo from '../../assets/home_buy.jpg'
import Button from '../../components/button/button.component';
import About from '../../components/about/about.component';

const HomePage = () =>  {
    return(
        <div>
            <div className='homepage'>
                <div className='text'> 
                    <h1>Loans made easy</h1>
                    <p>Get a quote in seconds.<br/> No need to talk to an agent.</p>
                    <Button/>
                </div>
                <img className="home-image" src={logo} alt='Buying a home'/>
            </div>
            <div>
                    <About/>
            </div>
        </div>
    )
}

export default HomePage; 