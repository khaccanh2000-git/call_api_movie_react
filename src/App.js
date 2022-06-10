import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home.js";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import PageNotFound from "./components/MovieDetail/MovieDetail";
import Footer from "./components/Footer/Footer";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="container">
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="movie/:imdbID" element={<MovieDetail />} />
            <Route element={<PageNotFound />} />
          </Routes>
      </Router>
      </div>
      
      <Footer></Footer>
    </div>
  );
}

export default App;
