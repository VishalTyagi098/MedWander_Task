import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";
import DynamicForm from "./components/DynamicForm";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/form/:formType" element={<DynamicForm />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
