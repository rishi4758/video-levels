import { FETCH_IMAGE_LIST, INSERT_IMAGE } from "./types";
import axios from "axios";
const baseUrl = "http://localhost:5004";
export const fetchImageList = (data) => {
  return async (dispatch) => {
    const res = await axios.get(`${baseUrl}/upload`);
    dispatch({ type: FETCH_IMAGE_LIST, payload: res.data });
  };
};
export const insertImageData = (data) => {
  return async (dispatch) => {
    const res = await axios.post(`${baseUrl}/upload`, data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    dispatch({ type: INSERT_IMAGE, payload: res.data });
  };
};
