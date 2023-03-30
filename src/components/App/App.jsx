import React from "react";
import "./App.css";
import Header from "../Header/Header.jsx";
import Board from "../Board/Board.jsx";
import Footer from "../Footer/Footer.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="error-page">
      <span className="title">404</span>
      <span className="text">This page is not ready yet.</span>
      <NavLink to="/">Go back</NavLink>
    </div>
  );
};

const App = ({ tasks, setTasks }) => {
  const Home = () => {
    return (
      <>
        <Header />
        <Board dataMock={tasks.dataMock} setTasks={setTasks} />
        <Footer dataMock={tasks.dataMock} />
      </>
    );
  };

  const Accounting = () => {
    return (
      <>
        <Header />
      </>
    );
  };

  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/accounting" exact element={<Accounting />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
