import { Routes, Route, } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import './App.css'
import Header from "./components/Header"
import ListArticles from './components/ListArticles'
import ArticleCard from "./components/ArticleCard";
import Nav from "./components/Nav";

function App() {

  return (
    <div className="App">
      <Header></Header>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<ListArticles />} />
      </Routes>
    </div>
  )
}

export default App

