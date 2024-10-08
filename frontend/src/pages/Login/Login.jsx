import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
    const { loading, login } = useLogin();

  const SubmitHandler = async (e) => {
    e.preventDefault();
    await login(userName, password)

  };
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-click-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-amber-200 text-3xl font-semibold text-center text-center">
          Login
          <span className="text-amber-300"> SimpleChatApp</span>
        </h1>

        <form onSubmit={SubmitHandler}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10 text-lime-50"
              value={userName}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10 text-lime-50"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="true"
              required
            />
          </div>
          <Link
            to="/signup"
            className="text-sm  text-lime-50 hover:underline hover:text-lime-100 mt-2 inlover:underline hover:text-blue-600 mt-2 inline-block"
          >
            {"Don't"} have an account?
          </Link>
          <div> 
            <button className="btn glass btn-block btn-sm mt-2" disabled={loading}>
              {loading ? (<span className="loading loading-spinner"></span>) : "Login" }
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
