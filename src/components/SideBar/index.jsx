import { useState } from 'react';
import Icon from '@mdi/react';
import { mdiCog, mdiMapMarker, mdiViewDashboard } from '@mdi/js';
import './style.scss';
import { Link, useHistory } from 'react-router-dom';

const SideBar = () => {
    const history = useHistory();
    const [route, setRoute] = useState('');
    history.listen(({ pathname }) => setRoute(pathname.replace('/', '')));

    return (
        <aside className="left-sidebar" data-sidebarbg="skin6">
            <div className="scroll-sidebar">
                <nav className="sidebar-nav">
                    <ul id="sidebarnav">
                        <li>
                            <div className="user-profile d-flex no-block dropdown m-t-20">
                                <div className="user-pic mr-3"><span className="btn btn-circle d-flex btn-info text-white">EA</span></div>
                                <div className="user-content hide-menu m-l-10">
                                    <span data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <h5 className="m-b-0 user-name font-medium">Admin</h5>
                                        <span className="op-5 user-email">admin@gmail.com</span>
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li className="sidebar-item">
                            <Link to="/" className={route.length === 0 ? 'active': ''}>
                                <span className="hide-menu d-flex align-items-center">
                                    <Icon path={mdiViewDashboard} size={1} className="ml-3 mr-3" />
                                    Dashboard
                                </span>
                            </Link>
                        </li>
                        <li className="sidebar-item">
                            <Link to="/map" className={route.includes('map') ? 'active': ''}>
                                <span className="hide-menu d-flex align-items-center">
                                        <Icon path={mdiMapMarker} size={1} className="ml-3 mr-3" />
                                    Locate
                                </span>
                            </Link>
                        </li>
                        <li className="sidebar-item">
                            <Link to="/settings" className={route.includes('settings') ? 'active': ''}>
                                <span className="hide-menu d-flex align-items-center">
                                        <Icon path={mdiCog} size={1} className="ml-3 mr-3" />
                                    Settings
                                </span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    );
}

export default SideBar;
