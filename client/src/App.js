import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { PrivateRoute }  from "./utils/privateRoute";
import BubblePage from "./components/BubblePage";

import Login from "./components/Login";
import "./styles.scss";

function App() {
  const logout = () => {
    localStorage.removeItem("token");
  };

  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
            <PrivateRoute exact path="/BubblePage">
              <BubblePage />
            </PrivateRoute>
      </div>
    </Router>
  );
}

export default App;
