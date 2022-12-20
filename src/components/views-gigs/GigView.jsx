import React from "react";
import Img from "../../Assets/background.png";
function GigView(props) {
  return (
    <div className="container">
      <div className="flex wrap" style={{ marginTop: "80px" }}>
        <div
          className="view-gig flex column"
          style={{
            width: "90%",
            backdropFilter: "blur(200px)",
            padding: "15px",
          }}
        >
          <h1
            className="is-size-2"
            style={{ color: "white", marginBottom: "10px", fontWeight: "bold" }}
          >
            Name
          </h1>
          <img
            src={Img}
            alt="Thumbnail"
            style={{ width: "100%", maxHeight: "350px", objectFit: "cover" }}
          />
          <h3
            className="is-size-4"
            style={{ color: "white", fontWeight: "bold" }}
          >
            Description:
          </h3>
          <p
            style={{
              color: "white",
              paddingBottom: "10px",
              borderBottom: "1px solid white",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
            accusamus mollitia ipsam, tenetur labore odio quo voluptate illum
            debitis voluptates nihil perspiciatis, corporis dignissimos
            inventore eaque veniam sapiente officia reprehenderit quis veritatis
            aspernatur aperiam velit magnam ab. Commodi amet qui odit voluptate
            molestias laborum sit id aperiam quas explicabo tempora iure
            accusantium, ratione, hic nesciunt a! Delectus quibusdam eaque
            accusantium sequi voluptates, nostrum repellat maxime laborum veniam
            enim beatae porro, placeat debitis tenetur laboriosam vel quisquam,
            maiores est et voluptatibus assumenda cumque! Iusto quam ducimus
            reiciendis error voluptate, expedita, ipsam possimus nesciunt esse
            quo doloribus cum, cupiditate repellendus placeat eaque? Quibusdam
            sequi, nemo deserunt harum facilis dolorum earum? Sapiente debitis
            minima dolores vel dolor quod dolore ratione eius ducimus? Beatae
            asperiores laborum dolore repudiandae repellendus tenetur enim,
            reiciendis alias inventore voluptates minus totam placeat maxime
            delectus praesentium numquam commodi non. Sint architecto dolore
            velit suscipit maxime animi possimus minima voluptate autem quod.
            Voluptatum nisi qui dicta. Illum iste dolor dolorum eveniet tempora
            alias quis error iusto non praesentium adipisci sunt provident, quod
            voluptatum quos fuga optio. Enim, similique nulla possimus
            consectetur optio sunt culpa dolores mollitia magnam a reiciendis
            veritatis nobis soluta aliquam maiores ipsa suscipit accusantium
            nisi illum exercitationem!
          </p>
          <div className="flex space-around">
            <h3 style={{ color: "white", fontWeight: "bold" }}>
              Total Investment Required
            </h3>
            <h3 style={{ color: "white" }}>$ 2000</h3>
          </div>
          <div className="flex space-around">
            <h3 style={{ color: "white", fontWeight: "bold" }}>
              Share Percentage in Total Investment Required
            </h3>
            <h3 style={{ color: "white" }}>10%</h3>
          </div>
          <div className="flex column">
            <h3 style={{ color: "white", margin: "5px 0", fontWeight: "bold" }}>
              About Entreprenure
            </h3>
            <div className="flex" style={{ margin: "10px 0" }}>
              <img
                src={Img}
                alt=""
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
              <div className="flex column">
                <h3 style={{ color: "white", margin: "5px 0" }}>
                  Name of Entreprenure
                </h3>
                <h3 style={{ color: "white", margin: "5px 0" }}>Ideas: 10</h3>
                <h3 style={{ color: "white", margin: "5px 0" }}>
                  Date Joined: 20
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex flex-column profile-card"
          style={{ width: "300px", height: "max-content" }}
        >
          <div className="flex space-around mamber-since">
            <span style={{ color: "white", fontWeight: "bold" }}>
              Investment Required
            </span>
            <span style={{ color: "white" }}>$2000</span>
          </div>
          <div className="flex space-around mamber-since">
            <span style={{ color: "white", fontWeight: "bold" }}>
              Share Percentage/Total
            </span>
            <span style={{ color: "white" }}>10%</span>
          </div>
          <button
            className="button is-link"
            style={{ width: "100%", marginTop: "10px" }}
          >
            Invest
          </button>
          <button
            className="button is-Primary"
            style={{ width: "100%", marginTop: "10px" }}
          >
            Contact Entreprenure
          </button>
        </div>
      </div>
    </div>
  );
}

export default GigView;
