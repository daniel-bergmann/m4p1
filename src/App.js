import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// importing CSS
import './css/App.scss'


// Importing components
import Articles from './components/Articles'
import InternetA from './components/InternetA'
import WebServers from './components/WebServers'




// Router

export default function App() {
  return (
    <Router>
      <div>

        {/* Here are the main components placed */}
        <Switch>
          <Route path="/interneta">
            <InternetA />
          </Route>
          <Route path="/webservers">
            <WebServers />
          </Route>
          <Route path="/">
            {/* The index component needs to be placed at the bottom */}
            <Articles />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}





