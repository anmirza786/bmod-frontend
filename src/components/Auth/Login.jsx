import React from "react";

function Login(props) {
  return (
    <div className="container">
      <div className="flex center h-100">
        <form method="post" className="custom-form">
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                className="input"
                autofocus
                type="email"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input className="input" type="password" placeholder="Password" />
            </div>
          </div>
          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link" type="submit">
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
