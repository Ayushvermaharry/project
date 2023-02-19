import { React, useState,useEffect } from "react";

import { connect } from "react-redux";
import { Link as RouterLink, useNavigate } from "react-router-dom";

//MUI imports
import { Paper, Link } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {LoadingButton } from '@mui/lab'
import { LoginAuthAction } from "../../redux/actions/AuthAction";

//Images import
import Logo from "../../assets/images/logo.svg"
// import BrandLogo from "../../assets/images/logo/brandLogo.png";
// import ErrorHandler from '../../components/errors/ErrorHandler'
import AlertHandler from "../../components/Alerts/AlertHandler";


import * as Yup from "yup";
import { useFormik, Form, FormikProvider } from "formik";
import { useTheme } from "@mui/material/styles";
import {
  Stack,
  Typography,
  useMediaQuery,
  TextField,
  IconButton,
  InputAdornment,
  Grid
} from "@mui/material";

import AnimateButton from "../../ui-component/extended/AnimateButton";


function Login(props) {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
    
  const { login } = props; //map state to props then extaract data from props
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const history = useNavigate();
  
  const [alertHandler , setAlertHandler ] = useState({
    hasAlert : false,
    alertType:"error",
    alertMessage: "this is initial error message",
    alertTitle: ""
  })

  // const [errorHandler, setErrorHandler] = useState({
  //   hasError: false,
  //   message: "",
  // });

  // validation and formik

  //toggle passoword show
  const [showPassword, setShowPassword] = useState(false);
  //validation schema
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email must be a valid email address").max(35,"Email should be smaller than 35 characters.")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be 8 characters long.").max(16,"Password must be smaller than 16 characters.")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: LoginSchema,
    onSubmit: async () => {
      await sleep(500);
      login(values, history,setAlertHandler);
    },
  });
  

  
  const { errors, touched, isSubmitting, values, handleSubmit,handleChange ,handleBlur,validateForm} = formik;
  
  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  useEffect(() => {
    const keyDownHandler = event => {
    if (event.key === 'Enter') {
        event.preventDefault();
        handleSubmit();
      }
    };
    document.addEventListener('keydown', keyDownHandler);
    return () => {
    document.removeEventListener('keydown', keyDownHandler);
    };
  }, [handleSubmit]);
  
 

  
  return (
    <>
      <AlertHandler alertHandler={alertHandler} />
        
      <FormikProvider value={formik}>
        <div className="flex items-center justify-center w-full h-screen px-0 py-0 min-w-fit min-h-fit sm:px-0 lg:px-0 bg-[#e3f2fd]">
          <Paper elevation={6} className="px-8 py-10">
            <div className="w-full max-w-md ">
              <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid item sx={{ mb: 3 }}>
                  <Link to="#">
                  <img
                  className="h-auto w-[125px]"
                  src={Logo}
                  alt="Workflow"
                />
                  </Link>
                </Grid>

              </Grid>
              <Stack alignItems="center" justifyContent="center" spacing={1}>
                <Typography
                  color={theme.palette.secondary.main}
                  gutterBottom
                  variant={matchDownSM ? 'h3' : 'h2'}
                >
                  Hi, Welcome Back
                </Typography>
                <Typography
                  variant="caption"
                  fontSize="16px"
                  textAlign={matchDownSM ? 'center' : 'inherit'}
                >
                  Enter your credentials to continue
                </Typography>
              </Stack>
              <div className="mt-5">
              <Form
                autoComplete="off"
                noValidate
                onSubmit={handleSubmit}
              >
                <Stack spacing={2}>
                  <Stack spacing={2}>
                    <TextField
                      fullWidth
                      id="email"
                      autoComplete="username"
                      type="email"
                      label="Email address"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      // value={values.email}
                      // {...getFieldProps("email") }
                      error={Boolean(touched.email && errors.email)}
                      helperText={touched.email && errors.email}
                    />

                    <TextField
                      fullWidth
                      id="password"
                      autoComplete="current-password"
                      type={showPassword ? "text" : "password"}
                      label="Password"
                      // value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      // {...getFieldProps("password")}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton onClick={handleShowPassword} edge="end">
                              {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      error={Boolean(touched.password && errors.password)}
                      helperText={touched.password && errors.password}
                    />
                  </Stack>
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{ my: 2 }}
                  >
                    <Link
                      component={RouterLink}
                      variant="subtitle2"
                      to="#"
                      style={{ textDecoration: "none" }}
                      className="font-medium text-[#F24F13] hover:text-[#BF2604]"
                    >
                      Forgot password?
                    </Link>
                  </Stack>
                  <Stack>
                    <AnimateButton>
                      <LoadingButton
                        
                        fullWidth
                        size="large"
                        type="submit"
                        variant="outlined"
                        loading={isSubmitting}
                       
                        >
                        Login
                      </LoadingButton>
                    </AnimateButton>
                  </Stack>
                </Stack>
              </Form>
              </div>
            </div>
          </Paper>
        </div>
      </FormikProvider>
      {/* <Outlet /> */}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (loginState, history,setErrorHandler) => {
      dispatch(LoginAuthAction(loginState, history,setErrorHandler));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
