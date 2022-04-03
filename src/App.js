import React from 'react'
import './styles/common.css'
import Header from './components/Header'

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
