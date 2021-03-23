import { mdiCog, mdiMapMarker, mdiViewDashboard } from '@mdi/js';
import { Link } from 'react-router-dom';
import Icon from '@mdi/react';
import './styles.scss';

const BottomBar = () => {
  return (
    <div className="bottom-bar">
      <div className="bottom-bar-button active">
        <Link to="/">
          <div className="d-flex flex-column align-items-center">
            <span><Icon path={mdiViewDashboard} size={1}/></span>
            <span>Dashboard</span>
          </div>
        </Link>
      </div>
      <div className="bottom-bar-button">
        <Link to="/map">
          <div className="d-flex flex-column align-items-center">
            <span><Icon path={mdiMapMarker} size={1}/></span>
            <span>Locate</span>
          </div>
        </Link>
      </div>
      <div className="bottom-bar-button">
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
