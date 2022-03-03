import {
  GET_POST_ERROR,
  GET_POST_LOADING,
  GET_POST_SUCESS,
  GET_USER_ERROR,
  GET_USER_LOADING,
  GET_USER_SUCESS,
} from "./actionTypes";

const init = { loading: false, error: false, users: [], posts: [] };
export const userReducer = (state = init, { type, payload }) => {
  switch (type) {
    case GET_USER_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_USER_SUCESS: {
      return {
        ...state,
        loading: false,
        users: payload,
      };
    }
    case GET_USER_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case GET_POST_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_POST_SUCESS: {
      return {
        ...state,
        loading: false,
        posts: payload,
      };
    }
    case GET_POST_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    default: {
      return state;
    }
  }
};
