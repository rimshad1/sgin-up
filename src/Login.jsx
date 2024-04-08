import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "./Contexts/LoginContext";

const Login = () => {
  const { name, setName, email, setEmail, pass, setPass } =
    useContext(LoginContext);

  const navigate = useNavigate();

  const [errorMessage, seterrorMessage] = useState();

  const formSubmit = (e) => {
    var data = {
      name: name,
      email: email,
      pass: pass,
    };

    e.preventDefault();
    if (!name || !email || !pass)
      return seterrorMessage("Please use the Creddential to Login");

    localStorage.setItem("user", [JSON.stringify(data)]);

    navigate("/dashboard");
    return console.log(data.email), console.log("display name", data.email[0]);
  };

  return (
    <div>
      <h2 className="text-2xl mt-20 mb-10 text-center font-bold">Sign Up</h2>
      <div className=" justify-center flex">
        <div className="px-5 py-5 border rounded-2xl w-72">
          <div className="grid justify-center">
            <form name="myform" onSubmit={formSubmit}>
              {errorMessage?.length > 0 && (
                <div className="text-red-500 mb-5">{errorMessage}</div>
              )}
              <label>
                Name <span className="text-red-500">*</span>
              </label>
              <input
                className="w-64 px-5 py-2 border text-sm outline-sky-400 rounded-full mb-2"
                type="text"
                placeholder="Enter Your Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />

              <label>
                Email <span className="text-red-500">*</span>
              </label>
              <input
                className="w-64 px-5 py-2 border text-sm outline-sky-400 rounded-full mb-2"
                type="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />

              <label>
                Password <span className="text-red-500">*</span>
              </label>
              <input
                className="w-64 px-5 py-2 border text-sm outline-sky-400 rounded-full mb-2"
                type="password"
                placeholder="Enter Your Passowrd"
                value={pass}
                onChange={(e) => {
                  setPass(e.target.value);
                }}
              />

              <button
                type="submit"
                className="px-5 py-2 text-white bg-sky-400 outline-none hover:bg-sky-500 w-full rounded-full font-bold cursor-pointer"
              >
                Log In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
