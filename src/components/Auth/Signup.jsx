import React from "react";

function Signup(props) {
  return (
    <div className="container">
      <div className="flex center h-120">
        <form method="post" className="custom-form">
          <div className="field">
            <label className="label">First Name</label>
            <div className="control">
              <input
                className="input"
                autofocus
                type="text"
                placeholder="First Name"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Last Name</label>
            <div className="control">
              <input className="input" type="text" placeholder="Last Name" />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control has-icons-left has-icons-right">
              <input
                className="input is-danger"
                type="email"
                placeholder="Email"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-exclamation-triangle"></i>
              </span>
            </div>
            <p className="help is-danger">This email is invalid</p>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input className="input" type="password" placeholder="Password" />
            </div>
          </div>
          <div className="field">
            <label className="label">Confirm Password</label>
            <div className="control">
              <input className="input" type="password" placeholder="Confirm Password" />
            </div>
          </div>
          <div className="field">
            <label className="label">Signup as an</label>
            <div className="control">
              <div className="select">
                <select>
                  <option>Entrepreneur</option>
                  <option>Investor</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <label className="checkbox">
                <input type="checkbox" />I agree to the{" "}
                <a href="#">terms and conditions</a>
              </label>
            </div>
          </div>
          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link" type="submit">
                Signup
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
