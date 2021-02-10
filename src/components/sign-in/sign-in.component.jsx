import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth, signInWithGoogle } from '../../firebase/firebase.utils';
import { SignInContainer,ButtonsContainer } from './sign-in.styles';
import {withRouter} from 'react-router-dom'; 

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const {email, password} = this.state;
    const {history} = this.props; 
    try {
      await auth.signInWithEmailAndPassword(email, password); 
      if (this.state.email !== null && this.state.password !== null) {
          history.push(`/uploaddocs`) 
      }
      this.setState({ email: '', password: '' });
    } catch(error) {
      alert(error); 
    }
  };

  handleGoogleSubmit = async () => { 
    const {history} = this.props; 
    try {
      await signInWithGoogle();
      history.push(`/uploaddocs`);
    } catch(error) {
      alert(error); 
    }
    
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <SignInContainer>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />
          <ButtonsContainer>
            <CustomButton type='submit'> Sign in </CustomButton>
            <CustomButton type='submit' onClick={this.handleGoogleSubmit}>
              Sign In With Google
            </CustomButton>
          </ButtonsContainer>
        </form>
      </SignInContainer>
    );
  }
}

export default withRouter(SignIn);