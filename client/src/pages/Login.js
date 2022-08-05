import { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";

function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="row">
      <div className="col-md-6">

      </div>
      <div className="col-md-6">
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
