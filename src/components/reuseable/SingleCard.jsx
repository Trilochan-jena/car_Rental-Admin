import React from "react";

const SingleCard = (props) => {
  const { title, totalNumber, icon } = props.item;
  return (
    <div className="single__card">
      <div className="card__content">
        <h4>{title}</h4>
        <span>{totalNumber}</span>
      </div>

      <span className="card__icon">
        <div>{icon}</div>
      </span>
    </div>
  );
};

export default SingleCard;
