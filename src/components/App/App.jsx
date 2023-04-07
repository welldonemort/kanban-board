import React from "react";
import "./App.css";
import Header from "../Header/Header.jsx";
import Board from "../Board/Board.jsx";
import Footer from "../Footer/Footer.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavLink } from "react-router-dom";
import AccountingData from "../AccountingData/AccountingData";

const NotFound = () => {
  return (
    <div className="error-page">
      <span className="title">404</span>
      <span className="text">This page is not ready yet.</span>
      <NavLink to="/">Go back</NavLink>
    </div>
  );
};

const App = ({ state, setTasks }) => {
  const Home = () => {
    console.log(state);
    return (
      <>
        <Header />
        {state.tasks && (
          <Board dataMock={state.tasks.dataMock} setTasks={setTasks} />
        )}
        {state.tasks && <Footer dataMock={state.tasks.dataMock} />}
      </>
    );
  };

  const Accounting = () => {
    return (
      <>
        <Header />
        <AccountingData accountingData={state.accounting} />
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
