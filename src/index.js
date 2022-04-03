import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './components/Home'
import SearchResult from './components/SearchResult'
import OneSite from './components/OneSite'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { DataContextProvider } from './components/Context'
ReactDOM.render(

  <BrowserRouter>
    <DataContextProvider >

      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/searchResult" element={<SearchResult />} />
          <Route path="/oneSite" element={<OneSite />} />
        </Route>
      </Routes>

    </DataContextProvider >
  </BrowserRouter>
  ,
  document.getElementById('root')
);


