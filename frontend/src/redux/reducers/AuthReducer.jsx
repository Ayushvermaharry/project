import axios from "axios";
import { AuthActionType } from "../actions/AuthAction";

const authState ={
    isLoggedIn :false,
    user:{
        id_token: "",
        access_token: "",
        refresh_token: "",
        Role: "",
        message: "",
        status:""
    },
}


const AuthReducer = (state = authState, action) => {
    switch (action.type) {
        case AuthActionType.LOGOUT_SUCCESS:
            localStorage.removeItem("auth");
            return authState;
      
        case AuthActionType.LOGIN_SUCCESS:
            const loginAuthState = {
              isLoggedIn: true,
              user: action.payload,
            };
            axios.defaults.headers.common[
              "Authorisation"
            ] = `Bearer ${action.payload.token}`;
            localStorage.setItem("auth", JSON.stringify(loginAuthState));
            return loginAuthState;
        
        default:
            return state;
    }
};

export default AuthReducer;