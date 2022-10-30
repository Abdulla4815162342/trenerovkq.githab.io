import React  from "react";
import './styles/App.css'
import {  BrowserRouter, Link, Route, Routes,Redirect } from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Navbar from "./components/UL/Navbar/Navbar";
import AppRouter from "./components/UL/AppRouter";
import Error from "./pages/Error";


function App() {
  return (
<BrowserRouter>
<Navbar/>
<AppRouter/>
</BrowserRouter>
  )
}

export default App;
