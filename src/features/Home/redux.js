import {
  UPDATE_INPUT_VALUE,
  QUERY_IMG_PENDING,
  QUERY_IMG_FULFILLED
} from "./action";

const initialState = {
  inputValue: "",
  responseQueryImageData: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_INPUT_VALUE:
      return {
        ...state,
        inputValue: action.value
      };
    case QUERY_IMG_PENDING:
      return {
        ...state,
        responseQueryImageData: []
      };
    case QUERY_IMG_FULFILLED:
      return {
        ...state,
        responseQueryImageData: action.payload.data
      };

    default:
      return state;
  }
};
