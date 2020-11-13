import React, { useState } from "react";

function AddImage({ insertImage, changeMessage }) {
  const [fileValue, setFileValue] = useState(null);
  const changeValueHandler = (e) => {
    setFileValue(e.target.files[0]);
  };

  const addImage = (e) => {
    e.preventDefault();
    insertImage(fileValue);
    changeMessage();
  };
  return (
    <>
      <div className="col-12 d-flex justify-content-center  align-items-center  ">
        <h1>Click To Add Image</h1>
      </div>
      <div
        className={` ${
          fileValue
            ? "col-6 d-flex justify-content-end"
            : "col-12 d-flex justify-content-center"
        }  `}
      >
        <label htmlFor="file-input">
          <i className="material-icons camera">linked_camera</i>
        </label>
        <input id="file-input" type="file" onChange={changeValueHandler} />
      </div>
      {fileValue && (
        <div className=" row col-6 d-flex justify-content-start">
          <div className="arrowBtn" onClick={addImage}>
            <i className="material-icons rightArrow">arrow_right_alt</i>
            <span>Add Image</span>
          </div>
        </div>
      )}
    </>
  );
}

export default AddImage;
