import axios from "axios";
import { FETCH_USER, LOGIN_USER, LOGIN_FAILED } from "./types";


export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/Account/GetUser");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const loginUser = (username, password) => async dispatch => {
    try {
        const res = await axios.post("/api/Account/Login", {username: username, password: password, persistant: false });
        const message = res.data ? "" : "Incorrect username or password";
        dispatch({ type: LOGIN_USER, payload: { success: res.data, message: message } });
    }
    catch(ex){
        console.log("Login Failed:", ex);
        dispatch({ type: LOGIN_FAILED, payload: { success: false, message: "Unable to connect to authentication server" } });
    }
}