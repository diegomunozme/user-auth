import { useState } from "react";
import "./App.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase-config";

function App() {
  const [RegisterEmail, setRegisterEmail] = useState("");
  const [RegisterPassword, setRegisterPassword] = useState("");
  const [LoginEmail, setLoginEmail] = useState("");
  const [LoginPassword, setLoginPassword] = useState("");

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        RegisterEmail,
        RegisterPassword
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {};
  const logout = async () => {};

  return (
    <div className="App">
      <div>
        <h3>Register User</h3>
        <input
          placeholder="Email..."
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <input
          placeholder="Password..."
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />
        <button onClick={register}>Create user</button>
      </div>
      <div>
        <h3> Login </h3>
        <input
          placeholder="Email..."
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
        <input
          placeholder="Password..."
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />

        <button> Login </button>
      </div>
    </div>
  );
}

export default App;
