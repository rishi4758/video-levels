import React from "react";
import { useDispatch } from "react-redux";
import { insertImageData } from "../store/actions";
import Files from "../components/Files";

function form() {
  const dispatch = useDispatch();
  const insertImage = async (imageData) => {
    let formData = new FormData();
    formData.append("image", imageData);
    await dispatch(insertImageData(formData));
  };
  return (
    <>
      <Files insertImage={insertImage} />
    </>
  );
}

export default form;
