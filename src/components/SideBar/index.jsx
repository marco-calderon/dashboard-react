import Icon from '@mdi/react';
import { mdiAccount, mdiLogin, mdiMapMarker, mdiViewDashboard } from '@mdi/js';
import './style.scss';

const SideBar = () => {
  return (
    <aside className="left-sidebar" data-sidebarbg="skin6">
        <div className="scroll-sidebar">
            <nav className="sidebar-nav">
                <ul id="sidebarnav">
                    <li>
                        <div className="user-profile d-flex no-block dropdown m-t-20">
                            <div className="user-pic mr-3"><a class="btn btn-circle d-flex btn-info text-white">EA</a></div>
                            <div className="user-content hide-menu m-l-10">
                                <a href="#" className="" id="Userdd" role="button"
                                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <h5 className="m-b-0 user-name font-medium">Admin</h5>
                                    <span className="op-5 user-email">varun@gmail.com</span>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="Userdd">
                                    <a className="dropdown-item" href="javascript:void(0)"><i
                                            className="ti-user m-r-5 m-l-5"></i> My Profile</a>
                                    <a className="dropdown-item" href="javascript:void(0)"><i
                                            className="ti-wallet m-r-5 m-l-5"></i> My Balance</a>
                                    <a className="dropdown-item" href="javascript:void(0)"><i
                                            className="ti-email m-r-5 m-l-5"></i> Inbox</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="javascript:void(0)"><i
                                            className="ti-settings m-r-5 m-l-5"></i> Account Setting</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="javascript:void(0)"><i
                                            className="fa fa-power-off m-r-5 m-l-5"></i> Logout</a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="sidebar-item my-4">
                        <span className="hide-menu d-flex align-items-center">
                            <Icon path={mdiViewDashboard} size={1} className="ml-3 mr-3" />
                            Dashboard
                        </span>
                    </li>
                    <li className="sidebar-item my-4">
                        <span className="hide-menu d-flex align-items-center">
                            <Icon path={mdiAccount} size={1} className="ml-3 mr-3" />
                            Profile
                        </span>
                    </li>
                    <li className="sidebar-item my-4">
                        <span className="hide-menu d-flex align-items-center">
                            <Icon path={mdiMapMarker} size={1} className="ml-3 mr-3" />
                            Locate
                        </span>
                    </li>
                    <li className="sidebar-item my-4">
                        <span className="hide-menu d-flex align-items-center">
                            <Icon path={mdiLogin} size={1} className="ml-3 mr-3" />
                            Login
                        </span>
                    </li>
                </ul>
            </nav>
        </div>
    </aside>
  );
}

export default SideBar;
