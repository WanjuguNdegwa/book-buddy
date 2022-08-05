import { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import './Login.css';
import logo from '../logo.svg';

function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="row vh-100">
      <div className="brand-section d-flex justify-content-center align-items-center flex-column col-md-6">
        <img src={logo} alt="logo" />
        <p className="logo-text">Book Buddy</p>
      </div>
      <div className="d-flex justify-content-center flex-column col-md-6">
        {showLogin ? (
          <>
            <LoginForm onLogin={onLogin} />
            <p>
              Don't have an account? &nbsp;
              <button type="button" className="btn btn-link" onClick={() => setShowLogin(false)}>
                Sign Up
              </button>
            </p>
          </>
        ) : (
          <>
            <SignUpForm onLogin={onLogin} />
            <p>
              Already have an account? &nbsp;
              <button type="button" className="btn btn-link" onClick={() => setShowLogin(true)}>
                Log In
              </button>
            </p>
          </>
        )}
      </div>

    </div>
  );
}

export default Login;
