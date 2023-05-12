import React, { useState } from "react";

const Login = () => {
    
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setEmail("");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.currentTarget.value);
  };

  return (
    <div className="container mx-auto bg-purple-500">
      <form className="flex flex-col w-1/2 space-y-8" onSubmit={handleSubmit}>

        <div className="flex flex-col space-y-2">
          <label htmlFor="email">email</label>
          <input
            className="flex-1 outline-none border"
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="password">password</label>
          <input
            className="flex-1 outline-none border border-gray-200"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit" className="">
          submit
        </button>
      </form>
    </div>
  )
};

export default Login;
