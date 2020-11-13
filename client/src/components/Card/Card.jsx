import React from "react";
import { useSelector } from "react-redux";
import "./Card.css";
function MyCard() {
  const data = useSelector((state) => state.data.imageList);
  const renderList = () => {
    return data.map((item, index) => {
      return (
        <div key={index} className=" card">
          <img
            className="cardImg"
            src={`https://video-levels123.s3.us-east-2.amazonaws.com/${item.Key}`}
            alt="videolevels-img"
          />
        </div>
      );
    });
  };
  return (
    <div className="row d-flex justify-content-sm-between justify-content-around">
      {renderList()}
    </div>
  );
}

export default MyCard;
