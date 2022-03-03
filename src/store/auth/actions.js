import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS } from "./actionTypes";

export const loginLoading = () => ({
  type: LOGIN_LOADING,
});

export const loginSuccess = (data) => ({
  type: LOGIN_SUCCESS,
  payload: data,
});

export const loginError = () => ({
  type: LOGIN_ERROR,
});

export const loginFeature = (data) => (dispatch) => {
  dispatch(loginLoading());
  fetch("http://localhost:3020/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((r) => r.json())
    .then((r) => dispatch(loginSuccess(r)))
    .catch((e) => dispatch(loginError()));
};
