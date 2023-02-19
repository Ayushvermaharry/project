import axios from 'axios';

const AuthActionType ={
    LOGIN_SUCCESS :"LOGIN_SUCCESS",
    LOGIN_FAIL : "LOGIN_FAIL",
    LOGOUT_SUCCESS:"LOGOUT_SUCCESS",
    LOGOUT_FAIL:"LOGOUT_FAIL"

};

const LoginAuthAction = (loginState, history,setAlertHandler) => {
    return async (dispatch) => {
      try {
        const res = await axios.post("auth/login" ,loginState);
        console.log(res)
        
        if(res.status === 200){
          dispatch({ type: AuthActionType.LOGIN_SUCCESS, payload: res.data });
          history("/", { replace: true });
        }else{
          throw new Error(res.error)
        }
        
      } catch (error) {
        if (error) {
          dispatch({
            type: AuthActionType.LOGIN_FAIL,
            payload: error
          });
        }
        setAlertHandler(
          { 
            hasAlert: true,
            alertType:"error", 
            alertMessage: error.message, 
            alertTitle:"Login Failed",
           });
      }
    };
  };

  const LogOutAuthAction = (history) => {
    console.log("auth logout called")
    return async (dispatch) => {
      try {
        let authdata = localStorage.getItem('auth');
        let accessTokenData = JSON.parse(authdata);
        let accessToken = accessTokenData.user.accessToken;
        console.log("logout acction called")
        console.log(accessToken)
        axios.defaults.headers.common[
          "accessToken"
        ] = accessToken;
        const res = await axios.post("/sign-out",);
        const { data } = res;
        console.log(data.message)
        dispatch({
          type: AuthActionType.LOGOUT_SUCCESS,
          payload: data.message,
        });
        history("/login", { replace: true });
      } catch (error) {
        if (error.response) {
          dispatch({
            type: AuthActionType.LOGOUT_FAIL,
            payload: error.response.data.message,
          });
        }
      }
    };
  };


  export {
    AuthActionType,
    LogOutAuthAction,
    LoginAuthAction,
  };