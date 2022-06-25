import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useHistory } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "./firebase";

import classes from "./Register.module.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();

  const register = () => {
    if (!name) alert("Please Enter Name");
    registerWithEmailAndPassword(name, email, password);
  };
  useEffect(() => {
    if (loading) return;
    if (user) history.replace("/dashboard");
  }, [user, loading]);

  return (
    <div className={classes.register}>
      <div className={classes.register__container}>
        <input
          type="text"
          className={classes.register__textBox}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
        />
        <input
          type="text"
          className={classes.register__textBox}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button className={classes.register__btn} onClick={register}>
          {" "}
          Register
        </button>
        <button className={classes.register__btn && classes.register__google} onClick={signInWithGoogle}>
          {" "}
          Register with Google
        </button>
        <div>
            Already Have an Account?? <Link to="/">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Register; 