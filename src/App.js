import React, { useState, useContext, useEffect } from 'react'
import './styles/common.css'
import Header from './components/Header'
import Footer from './components/Footer'
import {
  Outlet
} from "react-router-dom";
function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
