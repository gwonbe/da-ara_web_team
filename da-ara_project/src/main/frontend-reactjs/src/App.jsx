import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/Login/LoginPage";
import Main from "./components/Main";
import SignupPage from "./pages/Login/SignupPage";
import { useEffect, useState } from "react";
import axios from "axios";
import ChatPage from "./pages/Chatting/ChatPage";
import Header from "./components/Header";
import Modal from "./components/Modal";

const resize = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
};

const routerList = [
  { path: "/", element: <Main /> },
  { path: "/chatpage", element: <ChatPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/signup", element: <SignupPage /> },
  { path: "/header", element: <Header /> },
  { path: "/modal", element: <Modal /> },
];

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/daara")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);
  return (
    <div>
      <Router>
        <Routes>
          {routerList.map((item, index) => (
            <Route key={index} path={item.path} element={item.element} />
          ))}
        </Routes>
      </Router>
      받아온 값 :{data}
    </div>
  );
}

export default App;
