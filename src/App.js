import React, { useState } from 'react'
import './styles/common.css'
import Header from './components/Header'
import NewForm from './components/NewForm'
import Footer from './components/Footer'
import SearchResult from './components/SearchResult'

function App() {
  const [toggleSearch, setToggleSearch] = useState(false);
  const [toggleMenu, setToggleMenue] = useState(false)
   const [data,setData] = useState(); 

   const [spinner, setSpinner] = useState(false);

  const handlebodyClick = () => {
    if (toggleSearch) {
      setToggleSearch(false)
    }
  } 
  return (
    <>
      <Header toggle={toggleSearch} setSpinner={setSpinner} data={data} setData={setData} setToggle={setToggleSearch} setToggleMenue={setToggleMenue} toggleMenu={toggleMenu} />
      <div className='container cheight' onClick={handlebodyClick}>
        {toggleMenu ? <NewForm /> : <SearchResult spinner={spinner}  data={data} setData={setData} />}

      </div>
      <Footer />
    </>
  );
}

export default App;
