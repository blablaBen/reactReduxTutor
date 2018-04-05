import axios from "axios";

export const UPDATE_INPUT_VALUE = "UPDATE_INPUT_VALUE";
export const updateInputValue = value => {
  return {
    type: UPDATE_INPUT_VALUE,
    value: value
  };
};

export const QUERY_IMG = "QUERY_IMG";
export const QUERY_IMG_PENDING = "QUERY_IMG_PENDING";
export const QUERY_IMG_FULFILLED = "QUERY_IMG_FULFILLED";
export const queryImg = value => ({
  type: QUERY_IMG,
  payload: axios.get(
    `https://api.unsplash.com/photos/?client_id=e5848a0d4bb1f20a00274bb2cb9f95863b1c72489e925f08fb4476ecb4043df1&query=${value}`
  )
});
