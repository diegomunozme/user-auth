import React, { useState } from "react";
import app from "./firebase";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";

const App = () => {
  
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" component={Login}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;