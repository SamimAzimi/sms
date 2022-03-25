import React, { useState } from 'react'
import './styles/common.css'
import SiteSection from './components/SiteSection'
import NetworkSection from './components/NetworkSection'
import HardwareSection from './components/HardwareSection'
import DBSection from './components/DBSection'
import OSSection from './components/OSsection'
import Header from './components/Header'
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
        {toggleMenu ? <form className="container">
          <SiteSection />
          <NetworkSection />
          <HardwareSection />
          <DBSection />
          <OSSection />
          <button type="submit" class="btn btn-primary w-50 btn-outline-info btn-primary btn-lg">Save</button>
          <button type="cancel" class="btn btn-secondary w-50 btn-outline-info btn-primary btn-lg">Cancel</button>
        </form> : <h1>Welcome To Service Management System</h1>}

      </div>
    </>
  );
}

export default App;
