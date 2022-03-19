import './styles/App.css';
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import NotFound from './components/NotFound.js'
import Login from './components/Login.js'
import Home from './components/Home.js'
import Apps from './components/Apps.js'
import User from './components/User.js'
import Hardware from './components/Hardware';
import Sites from './components/Sites'
import Reports from './components/Reports'
import Nav from './components/Nav'
import { Routes, Route } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';
import "react-toastify/dist/ReactToastify.css";
function App() {



  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/Apps" element={<Apps />} />
          <Route path="/Hardware" element={<Hardware />} />
          <Route path="/Sites" element={<Sites />} />
          <Route path="/User" element={<User />} />
          <Route path="/Reports" element={<Reports />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/Login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
