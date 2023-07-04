import { Button, Card, CardActions, CardContent, CardHeader, Typography, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { UserContext } from "../../data-access/UserContext";

const Login = () => {

  const {signUpUserContext, loginUserContext }  = useContext(UserContext)
    
  const [formFields, setFormFields] = useState({
    email: '',
    password: ''
  });
 

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUserContext(formFields)
  };

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormFields({...formFields, [name]: value});
  };

 

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-slate-900">
     <Card sx={{minWidth: 400, minHeight: 300}} >
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
       <button onClick={handleSubmit} className="bg-slate-900 w-full py-2 text-white rounded-sm mt-5">login</button>
      </CardActions>
     </Card>
      
    </div>
  )
};

export default Login;
