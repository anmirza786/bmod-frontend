import React from "react";

function Signup(props) {
  const [nextPage, setNextPage] = React.useState(false);
  const [agree, setAgree] = React.useState(false);
  React.useEffect(() => {
    console.log(agree);
  }, [agree]);
  function nextpage() {
    setNextPage(true);
  }
  function previouspage() {
    setNextPage(false);
  }
  return (
    <div className="container">
      <div className="flex center h-120">
        <form
          method="post"
          className="custom-form"
          style={{ marginTop: "90px" }}
        >
          {!nextPage && (
            <>
              <h1 className="is-size-3 has-text-centered">Signup</h1>

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
                  <input
                    className="input"
                    type="password"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Confirm Password</label>
                <div className="control">
                  <input
                    className="input"
                    type="password"
                    placeholder="Confirm Password"
                  />
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
                    <input
                      type="checkbox"
                      onChange={(e) => setAgree(true)}
                      onSelect={(e) => setAgree(true)}
                    />
                    I agree to the <a href="#">terms and conditions</a>
                  </label>
                </div>
              </div>
              <div
                className="field is-grouped flex"
                style={{ justifyContent: "end" }}
              >
                <div className="control">
                  <button
                    className="button is-link"
                    onClick={nextpage}
                    disabled={!agree}
                  >
                    Next
                    <i
                      className="fa fa-angle-right"
                      style={{ marginLeft: "5px" }}
                    ></i>
                  </button>
                </div>
              </div>
            </>
          )}

          {nextPage && (
            <>
              <h1 className="is-size-3 has-text-centered">
                Personal Information
              </h1>
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
                  <input
                    className="input"
                    type="text"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Phone Number</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Phone Number"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">CNIC</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="CNIC Number"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Last Name</label>
                <div className="control">
                  <input
                    className="input"
                    type="file"
                    accept=".jpg,.jpeg,.png"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div
                className="field is-grouped flex"
                style={{ justifyContent: "space-between" }}
              >
                <div className="control">
                  <button className="button is-link" onClick={previouspage}>
                    <i
                      className="fa fa-angle-left"
                      style={{ marginRight: "5px" }}
                    ></i>
                    Previous
                  </button>
                </div>
                <div className="control">
                  <button className="button is-link" type="submit">
                    Signup
                  </button>
                </div>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
}

export default Signup;
