import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../reducers/modules/userActions";
import Error from "../../components/Error";
import "./index.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import * as Yup from "yup";
import { Formik } from "formik";
import HeightBox from "../../components/HeightBox";
import loginImg from "../../assets/login.svg";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required()
    .label("Email"),
  password: Yup.string()
    .min(8)
    .max(15)
    .required()
    .label("Password")
    .matches(/\d+/, "Password should contain at least one number")
    .matches(
      /[a-z]+/,
      "Password should contain at least one lowercase character"
    )
    .matches(
      /[A-Z]+/,
      "Passoword should contain at least one uppercase character"
    )
    .matches(
      /[!@#$%^&*()-+]+/,
      "Password should contain at least one special character"
    ),
});

export default function LoginPage() {
  // const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { loading, userInfo, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo) {
      navigate("/moderator/dashboard");
    }
  }, [navigate, userInfo]);

  const submitForm = (data) => {
    dispatch(userLogin(data));
  };

  const initialValues = {
    email: "",
    password: "",
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit(submitForm)}
      >
        {(formikProps) => {
          const {
            values,
            handleChange,
            handleSubmit,
            errors,
            touched,
          } = formikProps;

          return (
            <Box
              sx={{
                width: "100vw",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="outerContainer"
            >
              <Box className="formContainer" sx={{ width: 400, boxShadow: 3 }}>
                <Box>
                  <img
                    src={loginImg}
                    alt="Login"
                    style={{ width: 200, height: 200 }}
                  />
                  <h1>DIETARY</h1>
                </Box>
                <form data-testid="form">
                  <Grid
                    container
                    alignItems="center"
                    justify="center"
                    direction="column"
                  >
                    <Grid item>
                      <TextField
                        size="small"
                        required
                        id="email"
                        name="email"
                        label="Email"
                        variant="outlined"
                        sx={{ width: 300 }}
                        value={values.email}
                        onChange={handleChange("email")}
                        helperText={
                          touched.email && errors.email
                            ? errors.email
                            : "Email is required"
                        }
                        error={!!errors.email}
                        {...register("email")}
                      />
                    </Grid>
                    <HeightBox height={15} />
                    <Grid item>
                      <TextField
                        size="small"
                        required
                        id="password"
                        name="password"
                        label="Password"
                        variant="outlined"
                        sx={{ width: 300 }}
                        value={values.password}
                        helperText={
                          touched.password
                            ? errors.password
                            : "Password is required"
                        }
                        error={!!errors.password}
                        onChange={handleChange("password")}
                        {...register("password")}
                      />
                    </Grid>
                    <HeightBox height={15} />
                    <Button
                      type="submit"
                      size="small"
                      variant="contained"
                      sx={{ width: 300, backgroundColor: "#636cff" }}
                      onClick={handleSubmit}
                      disabled={isLoading}
                    >
                      {isLoading ? <CircularProgress /> : "LOGIN"}
                    </Button>
                    <HeightBox height={5} />
                    <Link href="#" variant="body2" onClick={() => {}}>
                      Forgot password?
                    </Link>
                  </Grid>
                </form>
              </Box>
            </Box>
          );
        }}
      </Formik>
    </div>
  );
}
