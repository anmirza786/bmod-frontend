import React from "react";
import { Link } from "react-router-dom";
import Back from "../../../Assets/background.png";
import ideas from "../../../StaticData/ideas";

function ProfileCard(props) {
  const { user } = props;
  function totalIdeas() {
    let count = 0;
    ideas.map((idea) => {
      if (idea.user === user._id) {
        count = count + 1;
      }
    });
    return count;
  }
  return (
    <div
      className="flex flex-column profile-card"
      style={{ alignItems: "center" }}
    >
      <div
        className="flex flex-column img-round"
        style={{ alignItems: "center" }}
      >
        <img src={`http://localhost:5500/${user.profile}`} alt="cardimage" />
        <h3 className="is-size-4 has-text-centered">
          {user.first_name} {user.last_name}
        </h3>
      </div>
      <Link to={`/editprofile/${user._id}`}>
        <i
          className="fa fa-pencil has-text-centered"
          style={{ color: "white" }}
        ></i>
      </Link>
      <ul className="card-list">
        {/* <li className="flex space-around location">
          <span>
            <i className="fa fa-map-marker"></i> From
          </span>
          <span>Pakistan</span>
        </li> */}
        <li className="flex space-around mamber-since">
          <span>
            <i className="fa fa-user"></i> Member Since
          </span>
          <span>{user.member_since}</span>
        </li>
        <li className="flex space-around total-ideas">
          <span>
            <i class="fa fa-lightbulb-o"></i> Total Ideas
          </span>
          <span>{totalIdeas()}</span>
        </li>
      </ul>
    </div>
  );
}

export default ProfileCard;
