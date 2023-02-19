import { useEffect } from "react";
import { useNavigate } from "react-router-dom";



function Protected(props){
    let Component = props.Component;
    const navigate = useNavigate();

    let auth = localStorage.getItem('auth');
    let authUserState = JSON.parse(auth);

    useEffect(()=>{     
        
        if(authUserState === null){
            navigate('/login',{ replace: true });
        }else if(authUserState.isLoggedIn === false){
            navigate('/login' ,{ replace: true });
        }

    },[authUserState,navigate]);

    return(
        <div>
          < Component />
        </div>
    )
}


export default Protected;