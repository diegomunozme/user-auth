import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  logInWithEmailAndPassword,
  signInWithGoogle,
} from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import classes from "./Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      //Look into triggering a loading screen
      return;
    }
    if (user) navigate("./dashboard");
  }, [user, loading]);

  return (
    <div className={classes.login}>
      <div className={classes.login__container}>
        <input
          type="text"
          className={classes.login__textBox}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-Mail Address"
        />

        <input
          type="password"
          className={classes.login__textBox}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <button
          className={classes.login__btn}
          onClick={() => logInWithEmailAndPassword(email, password)}
        >
          Login
        </button>
        <button className={classes.login__google} onClick={signInWithGoogle}>
          Login With Google
        </button>
        <div>
            <Link to="/reset">Forgot Password</Link>
        </div>
        <div>
            Don't have an account?? <Link to="/register">Register</Link> now.
        </div>
      </div>
    </div>
  );
};

export default Login;
