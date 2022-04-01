import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './components/Home'
import NewForm from './components/NewForm'
import SearchResult from './components/SearchResult'
import OneSite from './components/OneSite'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { DataContextProvider } from './components/Context'
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <DataContextProvider >

        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<Home />} />
            <Route path="/newform" element={<NewForm />} />
            <Route path="/searchResult" element={<SearchResult />} />
            <Route path="/oneSite" element={<OneSite />} />

            {/* 
            <Route path="new" element={<NewTeamForm />} />
            <Route index element={<LeagueStandings />} /> */}

          </Route>
        </Routes>

      </DataContextProvider >
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


