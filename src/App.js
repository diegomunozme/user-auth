import React, { useState } from "react";
import app from "./firebase-config";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";

const App = () => {
  
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/" component={Login}/>
        </Switch>
      </Router>
    </div>
  );
};

export default Schools;