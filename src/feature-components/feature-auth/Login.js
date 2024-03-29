import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
  TextField,
  CircularProgress,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { UserContext } from "../../data-access/UserContext";
import { Link } from "react-router-dom";

const Login = () => {
  const { loginUserContext, loader, setLoader } = useContext(UserContext);

  const [buttonClasses, setButtonClasses] = useState("");

  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formFields.email || !formFields.password) {
      return alert("please ensure you provide credentials");
    } else {
      setLoader(true)
      setButtonClasses("bg-slate-700 text-black");
      loginUserContext(formFields);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-slate-900">
      <Card sx={{ minWidth: 400, minHeight: 300 }}>
        <CardHeader>
          <span className="text-center">Login</span>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-3">
            <TextField
              id="Email"
              label="Email"
              name="email"
              type="email"
              fullWidth
              required
              focused
              variant="standard"
              onChange={handleChange}
              value={formFields.email}
            />
            <TextField
              id="Password"
              label="Password"
              name="password"
              type="password"
              fullWidth
              required
              variant="standard"
              onChange={handleChange}
              value={formFields.password}
            />
          </div>
        </CardContent>
        <CardActions>
          <button
            onClick={handleSubmit}
            className={`${ loader ? buttonClasses : "bg-slate-900 text-white"} w-full py-2 rounded-sm mt-5`}
            disabled={loader}
          >
            login
          </button>
        </CardActions>
        <div className="flex justify-center">
          {loader && (
            <Box sx={{ display: "flex" }}>
              <CircularProgress />
            </Box>
          )}
        </div>
        <div className="flex justify-center">
          <span>
            Don't have an acount ?{" "}
            <Link to="/signup" className="underline text-blue-700">
              Register here
            </Link>{" "}
            Now
          </span>
        </div>
      </Card>
    </div>
  );
};

export default Login;
