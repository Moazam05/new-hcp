// React Imports
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// React Icons
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
// MUI
import { Box, Checkbox } from "@mui/material";
// Assets
import { SignInImage } from "../../assets/images";
// Formik
import { Form, Formik, FormikProps } from "formik";
// Utils
import { onKeyDown } from "../../utils";
// Custom
import Layout from "../../components/Layout";
import PrimaryButton from "../../components/PrimaryButton";
import { SubHeading } from "../../components/Heading";
import PrimaryInput from "../../components/PrimaryInput";
import { loginSchema } from "./components/validationSchema";
import { useLoginMutation } from "../../redux/api/authApiSlice";
import ToastAlert from "../../components/ToastAlert";
import Spinner from "../../components/Spinner";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/auth/authSlice";
import Footer from "../../components/Footer";

interface ISLoginForm {
  email: string;
  password: string;
  keepMeLoggedIn: boolean;
}

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const formValues = {
    email: "",
    password: "",
    keepMeLoggedIn: false,
  };

  const hideShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // Login Api Bind
  const [login, { isLoading }] = useLoginMutation();

  const LoginHandler = async (values: ISLoginForm) => {
    const payload = {
      username: values.email,
      password: values.password,
      // keepMeLoggedIn: values.keepMeLoggedIn,
    };

    try {
      const user: any = await login(payload);

      if (user?.data?.success) {
        dispatch(setUser(user?.data?.data));
        localStorage.setItem("user", JSON.stringify(user?.data?.data));

        ToastAlert("Login Success", "success");
        navigate("/");
      }
      if (!user?.data?.success) {
        ToastAlert("Email or Password is not correct", "error");
      }
    } catch (error) {
      console.error("Login Error:", error);
      ToastAlert("Something went wrong", "error");
    }
  };

  return (
    <Layout>
      <Box
        sx={{
          margin: "50px 50px 75px",
          display: "flex",
          gap: "110px",
          justifyContent: "space-between",
          "@media (max-width: 576px)": {
            flexDirection: "column-reverse",
            margin: "20px",
            gap: "0px",
          },
        }}
      >
        <Box
          sx={{
            width: "50%",
            "@media (max-width: 576px)": {
              width: "100%",
            },
          }}
        >
          <Box
            sx={{
              fontSize: "36px",
              textAlign: "center",
              fontWeight: 400,
              color: "#00739A",
              marginTop: "35px",
              "@media (max-width: 576px)": {
                fontSize: "28px",
                marginTop: "20px",
              },
            }}
          >
            <h3>Please Sign In</h3>
          </Box>
          <Box>
            <Formik
              initialValues={formValues}
              onSubmit={(values: ISLoginForm) => {
                LoginHandler(values);
              }}
              validationSchema={loginSchema}
            >
              {(props: FormikProps<ISLoginForm>) => {
                const { values, touched, errors, handleBlur, handleChange } =
                  props;

                return (
                  <Form onKeyDown={onKeyDown}>
                    <Box
                      sx={{
                        height: "85px",
                        marginTop: "20px",
                      }}
                    >
                      <SubHeading
                        sx={{
                          marginBottom: "10px",
                          fontSize: "18px",
                          color: "#00313C",
                        }}
                      >
                        Email address*
                      </SubHeading>
                      <PrimaryInput
                        type="text"
                        label=""
                        name="email"
                        placeholder="Email"
                        value={values.email}
                        helperText={
                          errors.email && touched.email ? errors.email : ""
                        }
                        error={errors.email && touched.email ? true : false}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </Box>
                    <Box
                      sx={{
                        marginTop: "80px",
                        height: "85px",
                        "@media (max-width: 576px)": {
                          marginTop: "5px",
                        },
                      }}
                    >
                      <SubHeading
                        sx={{
                          marginBottom: "10px",
                          fontSize: "18px",
                          color: "#00313C",
                        }}
                      >
                        Password*
                      </SubHeading>
                      <PrimaryInput
                        type={showPassword ? "text" : "password"}
                        label=""
                        name="password"
                        placeholder="Password"
                        value={values.password}
                        helperText={
                          errors.password && touched.password
                            ? errors.password
                            : ""
                        }
                        error={
                          errors.password && touched.password ? true : false
                        }
                        onChange={handleChange}
                        onBlur={handleBlur}
                        onClick={hideShowPassword}
                        endAdornment={
                          showPassword ? (
                            <AiOutlineEye color="disabled" />
                          ) : (
                            <AiOutlineEyeInvisible color="disabled" />
                          )
                        }
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        marginTop: "15px",
                        "@media (max-width: 576px)": {
                          marginTop: "0",
                        },
                      }}
                    >
                      <Checkbox
                        {...label}
                        checked={values.keepMeLoggedIn}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="keepMeLoggedIn"
                        color="primary"
                        sx={{
                          padding: 0,
                          "& .MuiButtonBase-root": {
                            padding: 0,
                          },
                        }}
                      />
                      <SubHeading
                        sx={{
                          fontSize: "14px",
                          color: "#00313C",
                        }}
                      >
                        Keep Me Signed In
                      </SubHeading>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "35px",
                      }}
                    >
                      <PrimaryButton type="submit">
                        {isLoading ? (
                          <Box
                            sx={{
                              padding: "7px 40px",
                            }}
                          >
                            <Spinner size={22} specificColor="#fff" />
                          </Box>
                        ) : (
                          "SIGN IN"
                        )}
                      </PrimaryButton>
                    </Box>
                  </Form>
                );
              }}
            </Formik>
          </Box>
          <Box
            sx={{
              marginTop: "40px",
              display: "flex",
              justifyContent: "center",
              gap: "3px",
              fontWeight: 700,
              "@media (max-width: 576px)": {
                margin: "25px 0 5px 0",
              },
            }}
          >
            <Box
              sx={{
                color: "#B12029",
              }}
            >
              Do you need an account?
            </Box>
            <Box
              sx={{
                color: "#00739A",
                cursor: "pointer",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
              onClick={() => navigate("/get-started")}
            >
              Register Here
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: "50%",
            "@media (max-width: 576px)": {
              width: "100%",
            },
          }}
        >
          <img
            src={SignInImage}
            alt="login"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </Box>
      </Box>
      <Footer />
    </Layout>
  );
};

export default Login;
