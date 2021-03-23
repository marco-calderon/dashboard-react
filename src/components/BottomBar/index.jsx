import { useState } from "react";
import { mdiCog, mdiMapMarker, mdiViewDashboard } from '@mdi/js';
import { Link } from 'react-router-dom';
import Icon from '@mdi/react';
import './styles.scss';
import { useHistory } from 'react-router-dom';

const BottomBar = () => {
  const history = useHistory();
  const [route, setRoute] = useState('');
  history.listen(({ pathname }) => setRoute(pathname.replace('/', '')));

  return (
    <div className="bottom-bar">
      <div className={'bottom-bar-button' + (route.length === 0 ? ' active': '')}>
        <Link to="/">
          <div className="d-flex flex-column align-items-center">
            <span><Icon path={mdiViewDashboard} size={1}/></span>
            <span>Dashboard</span>
          </div>
        </Link>
      </div>
      <div className={'bottom-bar-button' + (route === 'map' ? ' active': '')}>
        <Link to="/map">
          <div className="d-flex flex-column align-items-center">
            <span><Icon path={mdiMapMarker} size={1}/></span>
            <span>Locate</span>
          </div>
        </Link>
      </div>
      <div className={'bottom-bar-button' + (route === 'settings' ? ' active': '')}>
        <Link to="/settings">
          <div className="d-flex flex-column align-items-center">
            <span><Icon path={mdiCog} size={1}/></span>
            <span>Settings</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BottomBar;
