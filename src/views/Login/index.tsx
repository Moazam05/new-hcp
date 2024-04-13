import { Box } from "@mui/material";
import Layout from "../../components/Layout";
import { SignInImage } from "../../assets/images";
import PrimaryButton from "../../components/PrimaryButton";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Form, Formik, FormikProps } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { SubHeading } from "../../components/Heading";
import PrimaryInput from "../../components/PrimaryInput";
import { onKeyDown } from "../../utils";
import { loginSchema } from "./components/validationSchema";

interface ISLoginForm {
  email: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [formValues, setFormValues] = useState<ISLoginForm>({
    email: "",
    password: "",
  });

  const hideShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const LoginHandler = (values: ISLoginForm) => {
    console.log("values", values);
  };

  return (
    <Layout>
      <Box
        sx={{
          margin: "50px 50px",
          display: "flex",
          //   justifyContent: "center",
          //   alignItems: "center",
          gap: "110px",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            width: "50%",
          }}
        >
          <Box
            sx={{
              fontSize: "36px",
              textAlign: "center",
              fontWeight: 400,
              color: "#00739A",
              marginTop: "35px",
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
                    <Box sx={{ marginTop: "80px", height: "85px" }}>
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
                        justifyContent: "center",
                        marginTop: "10px",
                      }}
                    >
                      <PrimaryButton
                        type="submit"
                        label="Sign In"
                        onClick={() => LoginHandler(values)}
                      />
                    </Box>
                  </Form>
                );
              }}
            </Formik>
          </Box>
        </Box>
        <Box>
          <img src={SignInImage} alt="login" />
        </Box>
      </Box>
    </Layout>
  );
};

export default Login;
