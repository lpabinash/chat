import { Link } from 'react-router-dom';
import React from 'react';
import './LoginForm.css'
const firebase = require("firebase");

class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    // this.handleSignup = this.handleSignup.bind(this)
    this.container = React.createRef()
    this.state = {
      email: null,
      password: null,
      passwordConfirmation: null,
      signupError: ''
    };
  }

  onSignUp=()=> {
    this.container.current.classList.add("right-panel-active");
}
onSignIn=()=> {
    this.container.current.classList.remove("right-panel-active");
}

userTyping = (whichInput, event) => {
    switch (whichInput) {
      case 'email':
        this.setState({ email: event.target.value });
        break;

      case 'password':
        this.setState({ password: event.target.value });
        break;

      case 'passwordConfirmation':
        this.setState({ passwordConfirmation: event.target.value });
        break;

      default:
        break;
    }
  }

  userTyping1 = (whichInput, event) => {
    switch (whichInput) {
      case 'email':
        this.setState({ email: event.target.value });
        break;

      case 'password':
        this.setState({ password: event.target.value });
        break;

      default:
        break;
    }
  }

  submitLogin = async (e) => {
    e.preventDefault(); // This is to prevent the automatic refreshing of the page on submit.

    await firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        this.props.history.push('/dashboard');
      }, err => {
        this.setState({ serverError: true });
        console.log('Error logging in: ', err);
      });
  };

  formIsValid = () => this.state.password === this.state.passwordConfirmation;

  submitSignup = (e) => {
    e.preventDefault(); // This is to prevent the automatic refreshing of the page on submit.

    if(!this.formIsValid()) {
      this.setState({ signupError: 'Passwords do not match' });
      return;
    }

    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(authRes => {
        const userObj = {
          email: authRes.user.email,
          friends: [],
          messages: []
        };
        firebase
          .firestore()
          .collection('users')
          .doc(this.state.email)
          .set(userObj)
          .then(() => {
            this.props.history.push('/dashboard');
        }, dbErr => {
          console.log('Failed to add user to the database: ', dbErr);
          this.setState({ signupError: 'Failed to add user' });
        });
    }, authErr => {
      console.log('Failed to create user: ', authErr);
      this.setState({ signupError: 'Failed to add user' });
    });
  };
  render() {
    const { classes } = this.props;

    return (
    //   <main className={classes.main}>
    //     <CssBaseline/>
    //     <Paper className={classes.paper}>
    //       { 
    //         this.state.signupError ? 
    //         <Typography className={classes.errorText} component='h5' variant='h6'>
    //           {this.state.signupError}
    //         </Typography> :
    //         null
    //       }
    //       <h5 className={classes.hasAccountHeader}>Already Have An Account?</h5>
    //       <Link className={classes.logInLink} to='/login'>Log In!</Link>
    //     </Paper>
    //   </main>
<div className='main-cont'>
<div className="container" id="container" ref={this.container}>
<div className="form-container sign-up-container">
    <form action="#"  onSubmit={(e) => this.submitSignup(e)}>
        <h1>Create Account</h1>
        <span>or use your email for registration</span>
        <input onChange={(e) => this.userTyping('email', e)} type="email" placeholder="Email" />
        <input onChange={(e) => this.userTyping('password', e)} type="password" placeholder="Password" />
        <input onChange={(e) => this.userTyping('passwordConfirmation', e)}type="password" placeholder="Confirm Password" />
        <button type='submit'>Sign Up</button>
    </form>
</div>


<div className="form-container sign-in-container">
    <form action="#"  onSubmit={(e) => this.submitLogin(e)}>
        <h1>Sign in</h1>
        <span>or use your account</span>
        <input onChange={(e) => this.userTyping1('email', e)} type="email"   placeholder="Email" />
        <input onChange={(e) => this.userTyping1('password', e)} type="password"   placeholder="Password" />
        <a href="#">Forgot your password?</a>
        <button type='submit'>Sign In</button>
    </form>
</div>
<div className="overlay-container">
    <div className="overlay">
        <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
            <button className="ghost" id="signIn" onClick={this.onSignIn}>Sign In</button>
        </div>
        <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button className="ghost" id="signUp" onClick={this.onSignUp}>Sign Up</button>
        </div>
    </div>
</div>
</div>
</div>

    );
  }

  

 


}


export default LoginForm