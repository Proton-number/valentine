import React, {lazy, Suspense} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import SignUp from "./Components/SignUp";
import Initial from "./Components/Initial";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/initial" element={<Initial />} />
          <Route path="/" element={<SignUp />} />
          {/* <Route path="/unique/:userId" element={<Unique />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
