import { getAuth } from "firebase/auth";
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import app from "../../firebase.init";
import "./Login.css";

const auth = getAuth(app);
const Login = () => {
  // const { signInWithGoogle } = useFirebase();
  const [signInWithGoogle, user] = useSignInWithGoogle(auth);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    signInWithGoogle().then(() => {
      navigate(from, { replace: true });
    });
  };
  return (
    <div>
      <h2>Login Page</h2>
      <div className="login-btn">
        <button onClick={handleGoogleSignIn}>Google Sign In</button>
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
