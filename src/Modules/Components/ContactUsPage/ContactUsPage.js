import React, { useState } from "react";
import "../../Styles/ContactUsPage.css"

function App() {
  const [signIn, toggle] = useState(true);

  return (
    <div className="container">
      <div className={`sign-up-container ${signIn ? 'signin-in' : ''}`}>
        <form className="form">
          <h1 className="title">Create Account</h1>
          <input className="input" type="text" placeholder="Name" />
          <input className="input" type="email" placeholder="Email" />
          <input className="input" type="password" placeholder="Password" />
          <button className="button">Sign Up</button>
        </form>
      </div>

      <div className={`sign-in-container ${signIn ? '' : 'signin-in'}`}>
        <form className="form">
          <h1 className="title">Sign in</h1>
          <input className="input" type="email" placeholder="Email" />
          <input className="input" type="password" placeholder="Password" />
          <a href="#" className="anchor">Forgot your password?</a>
          <button className="button">Sign In</button>
        </form>
      </div>

      <div className={`overlay-container ${signIn ? '' : 'signin-in'}`}>
        <div className={`overlay ${signIn ? '' : 'signin-in'}`}>
          <div className={`left-overlay-panel ${signIn ? '' : 'signin-in'}`}>
            <h1 className="title">Welcome Back!</h1>
            <p className="paragraph">
              To keep connected with us please login with your personal info.
            </p>
            <button className="ghost-button" onClick={() => toggle(true)}>
              Sign In
            </button>
          </div>

          <div className={`right-overlay-panel ${signIn ? 'signin-in' : ''}`}>
            <h1 className="title">Hello, Friend!</h1>
            <p className="paragraph">
              Enter Your personal details and start your journey with us.
            </p>
            <button className="ghost-button" onClick={() => toggle(false)}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
