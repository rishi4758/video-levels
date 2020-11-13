import React, { useState } from "react";
import "./Files.css";
import { Link } from "react-router-dom";
import AddImage from "../AddImage";
import Button from "../Buttons";
function Files({ insertImage }) {
  const [isInsertMessage, setIsInsertMessage] = useState(false);
  const changeMessage = () => {
    setIsInsertMessage((prev) => !prev);
  };
  const insertMessage = () => {
    return (
      <>
        <h2> Voilla! Image Inserted click to add more!</h2>
        <div>
          <Button
            onClick={changeMessage}
            type="button"
            customClass="loadBtn"
            title="Click to add More!"
          />
        </div>
      </>
    );
  };
  return (
    <>
      <div className=" row  col-sm-12 d-flex justify-content-center  align-items-center myFiles">
        {!isInsertMessage && (
          <AddImage insertImage={insertImage} changeMessage={changeMessage} />
        )}
        {isInsertMessage && insertMessage()}
      </div>

      <Link to="/">
        <i className="material-icons leftArrow">keyboard_backspace</i>
      </Link>
    </>
  );
}

export default Files;
