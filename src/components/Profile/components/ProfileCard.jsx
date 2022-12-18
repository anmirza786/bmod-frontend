import React from "react";
import Back from "../../../Assets/background.png";

function ProfileCard(props) {
  return (
    <div
      className="flex flex-column profile-card"
      style={{ alignItems: "center" }}
    >
      <div
        className="flex flex-column img-round"
        style={{ alignItems: "center" }}
      >
        <img src={Back} alt="cardimage" />
        <h3 className="is-size-4 has-text-centered">Jhon Doe</h3>
      </div>
      <i
        className="fa fa-pencil has-text-centered"
        style={{ color: "white" }}
      ></i>
      <ul className="card-list">
        <li className="flex space-around location">
          <span>
            <i className="fa fa-map-marker"></i> From
          </span>
          <span>Pakistan</span>
        </li>
        <li className="flex space-around mamber-since">
          <span>
            <i className="fa fa-user"></i> Member Since
          </span>
          <span>28 Dec 2018</span>
        </li>
        <li className="flex space-around total-ideas">
          <span><i class="fa fa-lightbulb-o"></i> Total Ideas</span>
          <span>10</span>
        </li>
      </ul>
    </div>
  );
}

export default ProfileCard;
