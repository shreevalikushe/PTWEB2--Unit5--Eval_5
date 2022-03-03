import {
  GET_POST_ERROR,
  GET_POST_LOADING,
  GET_POST_SUCESS,
  GET_USER_ERROR,
  GET_USER_LOADING,
  GET_USER_SUCESS,
} from "./actionTypes";

export const userLoading = () => ({
  type: GET_USER_LOADING,
});

export const userSuccess = (data) => ({
  type: GET_USER_SUCESS,
  payload: data,
});

export const userError = () => ({
  type: GET_USER_ERROR,
});

export const fetchUsers = () => (dispatch) => {
  dispatch(userLoading());
  fetch("http://localhost:3020/users")
    .then((r) => r.json())
    .then((r) => dispatch(userSuccess(r)))
    .catch((e) => dispatch(userError(e)));
};

export const postLoading = () => ({
  type: GET_POST_LOADING,
});

export const postSuccess = (data) => ({
  type: GET_POST_SUCESS,
  payload: data,
});

export const postError = () => ({
  type: GET_POST_ERROR,
});

export const getPosts = () => (dispatch) => {
  dispatch(postLoading());
  fetch("http://localhost:3020/posts")
    .then((r) => r.json())
    .then((r) => dispatch(postSuccess(r)))
    .catch((e) => dispatch(postError(e)));
};
