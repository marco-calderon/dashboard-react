import './App.css';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import HomePage from './pages/HomePage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useMediaQuery } from 'beautiful-react-hooks';
import BottomBar from './components/BottomBar';
import MapPage from './pages/MapPage';
import SettingsPage from './pages/SettingsPage';

function App() {
  const isSmall = useMediaQuery('(max-width: 48rem)'); 
  return (
    <Router>
      <div id="main-wrapper" data-layout="vertical" data-navbarbg="skin5" data-sidebartype="full"
          data-sidebar-position="relative" data-header-position="absolute" data-boxed-layout="full">
        <NavBar />
        <SideBar />
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/map">
            <MapPage />
          </Route>
          <Route path="/settings">
            <SettingsPage />
          </Route>
        </Switch>
      </div>
      {isSmall && (
        <><BottomBar /></>
      )}
    </Router>
  );
}

export default App;
