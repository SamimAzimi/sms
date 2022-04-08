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
      <Spinner />
      <Header />
      <Outlet />

    </>
  );
}

export default App;
