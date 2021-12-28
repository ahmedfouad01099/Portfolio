import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router";
import React from "react";
import Header from "./components/Header/Header";
import LandingPage from "./pages/LandingPage";
import Details from "./components/ProjectDetails/Details";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/project/:id" element={<Details />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
