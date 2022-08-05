import React, { useState } from 'react'

function SignUpForm({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>Sign up</p>
      <div className="form-floating mb-3">
        <input
          className="form-control"
          type="email"
          id="email"
          autoComplete="off"
          value={email}
          placeholder="name@example.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="email">Email</label>
      </div>
      <div className="form-floating mb-3">
        <input
          className="form-control"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="password">Password</label>
      </div>
      <div className="form-floating mb-3">
        <input
          className="form-control"
          type="password"
          id="password-confirmation"
          autoComplete="current-password"
          value={passwordConfirmation}
          placeholder="password"
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <label htmlFor="password-confirmation">Confirm password</label>
      </div>
      <button type="submit" className="btn btn-primary">
        {isLoading ? "Loading..." : "Sign up"}
      </button>
      <div>
        <ul>
          {errors.map((err) => (
            <li key={err}>{err}</li>
          ))}
        </ul>
      </div>
    </form>
  )
}

export default SignUpForm
