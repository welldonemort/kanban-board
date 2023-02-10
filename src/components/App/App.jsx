import React from "react";
import "./App.css";
import Header from "../Header/Header.jsx";
import Board from "../Board/Board.jsx";
import Footer from "../Footer/Footer.jsx";

const App = ({ tasks, setTasks }) => {
  return (
    <>
      <Header />
      <Board dataMock={tasks.dataMock} setTasks={setTasks} />
      <Footer dataMock={tasks.dataMock} />
    </>
  );
};

export default App;
