import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <h3>Register User</h3>
        <input placeholder="Email..." />
        <input placeholder="Password..." />
        <button>Create user</button>
      </div>
      <div>
        <h3> Login </h3>
        <input placeholder="Email..." />
        <input placeholder="Password..." />

        <button> Login </button>
      </div>
    </div>
  );
}

export default App;