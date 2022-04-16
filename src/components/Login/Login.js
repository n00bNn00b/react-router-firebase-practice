import React from "react";
import useFirebase from "../../hooks/useFirebase";
import "./Login.css";

const Login = () => {
  const { signInWithGoogle } = useFirebase();
  return (
    <div>
      <h2>Login Page</h2>
      <div className="login-btn">
        <button onClick={signInWithGoogle}>Google Sign In</button>
      </div>

      <form>
        <input type="email" name="" placeholder="Your Email" />
        <br />
        <input type="password" name="" id="" placeholder="password" />
        <br />
        <input className="login-btn" type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
