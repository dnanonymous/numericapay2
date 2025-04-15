import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Dashboard from "./Dashboard";
import Home from "./Home";
import Settings from "./Settings";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
