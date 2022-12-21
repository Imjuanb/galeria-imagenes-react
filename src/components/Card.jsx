import React from "react";

const Card = (props) => {
  return (
    <div className="container">
      <div className="card my-3" style={{ width: "18rem"}}>
        <img src={props.urlBart} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.titleBart}</h5>
          <p className="card-text">{props.descriptionBart}</p>
        </div>
      </div>
      <div className="card my-3" style={{ width: "18rem"}}>
        <img src={props.urlLisa} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.titleLisa}</h5>
          <p className="card-text">{props.descriptionLisa}</p>
        </div>
      </div>
      <div className="card my-3" style={{ width: "18rem"}}>
        <img src={props.urlOmero} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.titleOmero}</h5>
          <p className="card-text">{props.descriptionOmero}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
