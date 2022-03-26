import React, { useState } from 'react'
import './styles/common.css'
import Header from './components/Header'
import NewForm from './components/NewForm'
import SearchResult from './components/SearchResult'

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
        {toggleMenu ? <NewForm /> : <SearchResult />}

      </div>

    </>
  );
}

export default App;
