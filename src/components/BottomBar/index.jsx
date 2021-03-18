import { mdiCog, mdiMapMarker, mdiViewDashboard } from '@mdi/js';
import Icon from '@mdi/react';
import './styles.scss';

const BottomBar = () => {
  return (
    <div className="bottom-bar">
      <div className="bottom-bar-button active">
        <div className="d-flex flex-column align-items-center">
          <span><Icon path={mdiViewDashboard} size={1}/></span>
          <span>Dashboard</span>
        </div>
      </div>
      <div className="bottom-bar-button">
        <div className="d-flex flex-column align-items-center">
          <span><Icon path={mdiMapMarker} size={1}/></span>
          <span>Locate</span>
        </div>
      </div>
      <div className="bottom-bar-button">
        <div className="d-flex flex-column align-items-center">
          <span><Icon path={mdiCog} size={1}/></span>
          <span>Settings</span>
        </div>
      </div>
    </div>
  );
};

export default BottomBar;
