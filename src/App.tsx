import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import HomePage from './pages/HomePage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div id="main-wrapper" data-layout="vertical" data-navbarbg="skin5" data-sidebartype="full"
          data-sidebar-position="absolute" data-header-position="absolute" data-boxed-layout="full">
        <NavBar />
        <SideBar />
        <Switch>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
