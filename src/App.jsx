import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
const SignUp = lazy(() => import("./Components/SignUp"));
const Initial = lazy(() => import("./Components/Initial"));

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/initial/:userId"
            element={
              <Suspense fallback={null}>
                <Initial />
              </Suspense>
            }
          />
          <Route
            path="/"
            element={
              <Suspense fallback={null}>
                <SignUp />
              </Suspense>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
