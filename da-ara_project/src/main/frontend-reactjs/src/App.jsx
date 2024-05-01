import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/Login/LoginPage";
import SignupPage from "./pages/Login/SignupPage";
import { useEffect } from "react";
import ChatPage from "./pages/Chatting/ChatPage";
import Header from "./components/Header";
import Modal from "./components/Modal";

const resize = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
};

function App() {
  useEffect(() => {
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<ChatPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/header" element={<Header />} />
          <Route path="/modal" element={<Modal />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
