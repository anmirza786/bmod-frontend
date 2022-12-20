import React from "react";

function EditProfile(props) {
  return (
    <div className="container">
      <div className="flex center h-120">
        <form
          method="post"
          className="custom-form"
          style={{ marginTop: "90px" }}
        >
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
            <label className="label">Phone Number</label>
            <div className="control">
              <input className="input" type="text" placeholder="Phone Number" />
            </div>
          </div>
          <div className="field">
            <label className="label">CNIC</label>
            <div className="control">
              <input className="input" type="text" placeholder="CNIC Number" />
            </div>
          </div>
          <div className="field">
            <label className="label">Profile Picture</label>
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
              <button className="button is-link" type="submit">
                Done
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProfile;
