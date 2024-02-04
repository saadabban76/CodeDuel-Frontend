import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing";
import ProblemDesc from "./pages/ProblemDesc";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Problems from "./pages/Problems.";
import './index.css';
import AddQuestionBox from "./components/problems/AddQuestionBox";
import AccountSettings from "./pages/AccountSettings";
import AddQuestion from "./pages/AddQuestion";

function App() {

  return (
    <main className="dark bg-gradient-to-br from-[#0F1522] to-background to text-foreground bg-black">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="problems/:pid" element={<ProblemDesc />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/accountsettings" element={<AccountSettings />} />
          <Route path="/addquestion" element={<AddQuestion />} />
          <Route path="/problems" element={<Problems />}></Route>
          {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
