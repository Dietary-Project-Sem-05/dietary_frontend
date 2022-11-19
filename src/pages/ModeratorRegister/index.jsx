import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { Formik } from "formik";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";
import HeightBox from "../../components/HeightBox";
import Grid from "@mui/material/Grid";
import api from "../../api";
import { loggingRequest } from "../../reducers/modules/user";
import {
  setAuthorizationKey,
  setUserObjectInLocal,
} from "../../utils/localStorageHelper";

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required()
    .label("firstName"),
  lastName: Yup.string()
    .required()
    .label("lastName"),
  telephoneNo: Yup.string()
    .required()
    .label("Telephone"),
  username: Yup.string()
    .required()
    .label("userName"),
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

export default function ModeratorRegister() {
  const [open, setOpen] = React.useState(false);
  const [isLoading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
  });

  const initialValues = {
    firstName: formValues.firstName,
    lastName: formValues.lastName,
    email: formValues.email,
    username: formValues.username,
    password: formValues.password,
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "30%",
    bgcolor: "background.paper",
    border: "1px solid #000",
    boxShadow: 24,
    p: 4,
    borderRadius: 5,
  };

  async function registerUser(values) {
    setLoading(true);

    try {
      const [code, res] = await api.user.signUpUser(values);
      if (res.status === 201) {
        setAuthorizationKey(res.data.token);
        setUserObjectInLocal(res.data.user);
        dispatch(loggingRequest(res.data.user));
        navigate("/");
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }

  const submitForm = (values) => {
    setFormValues({
      ...formValues,
      ...values,
    });

    registerUser({ ...formValues, ...values });
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitForm}
      validationSchema={validationSchema}
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
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Moderator details
            </Typography>
            <Grid container direction="column">
              <Grid item>
                <TextField
                  fullWidth
                  required
                  label="First Name"
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={values.firstName}
                  error={errors.firstName}
                  helperText={touched.firstName ? errors.firstName : ""}
                  onChange={handleChange("firstName")}
                  variant="standard"
                />
              </Grid>

              <Grid item>
                <TextField
                  fullWidth
                  required
                  label="Last Name"
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={values.lastName}
                  error={errors.lastName}
                  helperText={touched.lastName ? errors.lastName : ""}
                  onChange={handleChange("lastName")}
                  variant="standard"
                />
              </Grid>
              <Grid item>
                <TextField
                  fullWidth
                  required
                  label="Email"
                  type="email"
                  id="email"
                  name="email"
                  value={values.email}
                  error={errors.email}
                  helperText={touched.email ? errors.email : ""}
                  onChange={handleChange("email")}
                  variant="standard"
                />
              </Grid>
              <Grid item>
                <TextField
                  fullWidth
                  required
                  label="User Name"
                  type="text"
                  id="username"
                  name="username"
                  value={values.username}
                  error={errors.username}
                  helperText={touched.username ? errors.username : ""}
                  onChange={handleChange("username")}
                  variant="standard"
                />
              </Grid>
              <Grid item>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value={values.password}
                  onChange={handleChange("password")}
                  error={errors.password}
                  helperText={touched.password ? errors.password : ""}
                  variant="standard"
                />
              </Grid>
              <HeightBox height={25} />
              <Button
                type="submit"
                size="small"
                variant="contained"
                fullWidth
                disabled={isLoading}
                sx={{ backgroundColor: "#636cff" }}
                onClick={handleSubmit}
              >
                {isLoading ? <CircularProgress /> : "Add Moderator"}
              </Button>
            </Grid>
          </Box>
        );
      }}
    </Formik>
  );
}
