import { FETCH_IMAGE_LIST, INSERT_IMAGE } from "../actions/types";
const initialState = {
  imageList: [],
};
export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_IMAGE_LIST:
      return { ...state, imageList: action.payload };
    case INSERT_IMAGE:
      const newList = state.imageList.concat(action.payload);
      return { ...state, imageList: newList };
    default:
      return state;
  }
}
