import React from 'react'
import './styles/common.css'
import Header from './components/Header'
import Spinner from './components/Spinner'
import {
  Outlet
} from "react-router-dom";
function App() {
  return (
    <>
      <Header />
      <Outlet />

      <Spinner  />
    </>
  );
}

export default App;
