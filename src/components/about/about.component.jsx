import './about.styles.scss'; 
import fastLogo from '../../assets/fast_process.svg';
import honestLogo from '../../assets/honest_advice.svg';
import optionsLogo from '../../assets/flexible_options.svg';
import secureLogo from '../../assets/secure.svg';

export const About = () => {
    return (
        <div className='about-us-container'>
        <h1> Why Loan Guardian ? </h1>
        <div className='about-us'>
            <div className='process'>
                <img src={fastLogo} alt="Fast process"/>
                <h2>Fast process</h2>
                <p>Our 100% online and hassle-free process makes it easy to apply.<br/>What traditionally took weeks can now be done in minutes, so you can focus on what matters.</p>
            </div>
            <div className='advice'>
                <img src={honestLogo} alt="Fast process"/>
                <h2>Honest advice. No up-selling</h2>
                <p>You don't have to talk to an agent, unless you want to. Our team is ready to help anytime. We are dedicated to helping you find the right loan</p>
            </div>
            <div className='options'>
                <img src={optionsLogo} alt="Fast process"/>
                <h2>We care about your feedback</h2>
                <p>We want to make our process better. Let us know how we are doing by submitting your feedback. </p>
            </div>
            <div className='secure'>
                <img src={secureLogo} alt="Secure process"/>
                <h2>Secure Process</h2>
                <p>We use typingdna technology to ensure a fast and secure process. This enables you to sign financial documents online worry-free. </p>
            </div>
        </div>
        </div>
    )
}

export default About; 