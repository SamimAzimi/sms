import React, { useState } from 'react'
import './styles/common.css'
import Header from './components/Header'
import NewForm from './components/NewForm'
import SearchResult from './components/SearchResult'

function App() {
  const [toggleSearch, setToggleSearch] = useState(false);
  const [toggleMenu, setToggleMenue] = useState(false)
   const [data,setData] = useState(); 
  const handlebodyClick = () => {
    if (toggleSearch) {
      setToggleSearch(false)
    }
  }
  return (
    <>
      <Header toggle={toggleSearch} data={data} setData={setData} setToggle={setToggleSearch} setToggleMenue={setToggleMenue} toggleMenu={toggleMenu} />
      <div onClick={handlebodyClick}>
        {toggleMenu ? <NewForm /> : <SearchResult  data={data} setData={setData} />}

      </div>

    </>
  );
}

export default App;
