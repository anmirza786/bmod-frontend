import React from "react";

function Overview(props) {
  const [toOverview, setToOverview] = React.useState(true);
  const [toDescription, setToDescription] = React.useState(false);
  function move() {
    if (toOverview === true) {
      setToOverview(false);
      setToDescription(true);
    } else {
      setToOverview(true);
      setToDescription(false);
    }
  }
  function addactive(view) {
    if (view === "a") {
      if (toOverview) return "fit-breadcrumbs-icon active-icon";
      else return "fit-breadcrumbs-icon";
    }
    else if(view==="b")
    {
      if (toDescription) return "fit-breadcrumbs-icon active-icon";
      else return "fit-breadcrumbs-icon";
    }
  }
  return (
    <div className="flex column" style={{ marginTop: "75px" }}>
      <div className="top-navbar-container wizard-mode">
        <nav className="fit-breadcrumbs top-navbar wizard fit-breadcrumbs-progress">
          <ul className="flex">
            <li className="flex" style={{ marginLeft: "20px" }}>
              <span className={addactive("a")}>1</span>
              <span className="fit-crumb current fit-crumb-current">
                <span className="crumb-content">
                  Overview<div className="floating-border"></div>
                </span>
              </span>
              <span
                className="fit-icon fit-breadcrumbs-separator"
                style={{ width: "12px", height: "12px" }}
              >
                <i
                  className="fa fa-angle-right"
                  style={{ margin: "0 10px" }}
                ></i>
              </span>
            </li>
            <li className="flex" style={{ marginLeft: "20px" }}>
              <span className={addactive("b")}>2</span>
              <span className="fit-crumb disabled fit-crumb-next">
                <span
                  className="crumb-content"
                  title="Complete the current step before moving on"
                >
                  Details<div className="floating-border"></div>
                </span>
              </span>
            </li>
          </ul>
        </nav>
      </div>
      <form method="post" className="back-blur w-800">
        {toOverview && (
          <>
            <div className="field">
              <label className="label">Title</label>
              <div className="control">
                <input
                  className="input"
                  autofocus
                  required
                  type="text"
                  placeholder="Title"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Thumbnail</label>
              <div className="control">
                <input
                  required
                  className="input"
                  type="file"
                  placeholder="Thumbnail"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Investment Percentage</label>
              <div className="control">
                <input
                  required
                  className="input"
                  type="number"
                  placeholder="Investment %age"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Required Investment</label>
              <div className="control">
                <input
                  required
                  className="input"
                  type="number"
                  placeholder="Required Total Investment"
                />
              </div>
            </div>
            <div
              className="field is-grouped flex"
              style={{ justifyContent: "flex-end" }}
            >
              <div className="control">
                <button className="button is-link" onClick={move}>
                  Next{" "}
                  <i
                    className="fa fa-angle-right"
                    style={{ marginLeft: "5px" }}
                  ></i>
                </button>
              </div>
            </div>
          </>
        )}
        {toDescription && (
          <>
            <div className="field">
              <label className="label">Brief Description</label>
              <div className="control">
                <textarea
                  className="input"
                  required
                  rows="20"
                  columns="20"
                  placeholder="Description"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Pitch Video</label>
              <div className="control">
                <input
                  required
                  className="input"
                  type="file"
                  placeholder="Video"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Legal Documentation</label>
              <div className="control">
                <input
                  required
                  className="input"
                  type="file"
                  placeholder="Legal Documentation"
                />
              </div>
            </div>

            <div
              className="field is-grouped flex"
              style={{ justifyContent: "space-between" }}
            >
              <button className="button is-link" onClick={move}>
                <i
                  className="fa fa-angle-left"
                  style={{ marginRight: "5px" }}
                ></i>
                Previous{" "}
              </button>
              <div className="control">
                <button className="button is-link" type="submit">
                  Submit{" "}
                </button>
              </div>
            </div>
          </>
        )}
      </form>
    </div>
  );
}

export default Overview;
