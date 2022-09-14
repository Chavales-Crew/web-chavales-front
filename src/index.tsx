import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage, SecondPage, ThirdPage, Discord } from "./pages";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="second" element={<SecondPage />} />
        <Route path="third" element={<ThirdPage />} />
        <Route path="discord" element={<Discord/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// BrowserRouter: connects the app to the browser URL.

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
