import React, { useState } from 'react'
import './styles/common.css'
import Header from './components/Header'
import NewForm from './components/NewForm'


function App() {
  const [toggleSearch, setToggleSearch] = useState(false);
  const [toggleMenu, setToggleMenue] = useState(false)
  const handlebodyClick = () => {
    if (toggleSearch) {
      setToggleSearch(false)
    }
  }
  return (
    <>
      <Header toggle={toggleSearch} setToggle={setToggleSearch} setToggleMenue={setToggleMenue} toggleMenu={toggleMenu} />
      <div onClick={handlebodyClick}>
        {toggleMenu ? <NewForm /> : <h1>Welcome To Service Management System</h1>}

      </div>

    </>
  );
}

export default App;
