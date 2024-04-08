import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [input, setInput] = useState("");

  const [errorMessage, seterrorMessage] = useState();

  const handlechange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const email = useRef();
  const pass = useRef();
  const formSubmit = (e) => {
    e.preventDefault();
    if (input.email === "" || input.pass === "")
      return seterrorMessage("Please use Both Creddential to Login");

    localStorage.setItem("user", [email.current.value]);
    console.log(localStorage);
    navigate("/dashboard");
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
                Email <span className="text-red-500">*</span>
              </label>
              <input
                className="w-64 px-5 py-2 border text-sm outline-sky-400 rounded-full mb-2"
                type="email"
                placeholder="Enter Your Email"
                name="email"
                ref={email}
                onChange={handlechange}
              />

              <label>
                Password <span className="text-red-500">*</span>
              </label>
              <input
                className="w-64 px-5 py-2 border text-sm outline-sky-400 rounded-full mb-2"
                type="password"
                placeholder="Enter Your Passowrd"
                name="pass"
                ref={pass}
                onChange={handlechange}
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
