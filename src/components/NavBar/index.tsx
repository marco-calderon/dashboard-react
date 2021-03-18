import { mdiMenu } from '@mdi/js';
import Icon from '@mdi/react';

const NavBar = () => {
  return (
    <header className="topbar" data-navbarbg="skin5">
        <nav className="navbar top-navbar navbar-expand-md navbar-dark d-flex align-items-center">
            <div className="navbar-header" data-logobg="skin5">
                <a className="navbar-brand" href="index.html">
                    <b className="logo-icon">
                        <h3>Dashboard</h3>
                    </b>
                </a>
                <a className="nav-toggler waves-effect waves-light d-flex d-md-none align-items-center justify-content-center mr-3" href="javascript:void(0)">
                    <Icon path={mdiMenu} size={1} />
                </a>
            </div>
            <div className="navbar-collapse collapse" id="navbarSupportedContent" data-navbarbg="skin5">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item search-box"> <a className="nav-link waves-effect waves-dark"
                            href="javascript:void(0)"><i className="ti-search"></i></a>
                        <form className="app-search position-absolute">
                            <input type="text" className="form-control" placeholder="Search &amp; enter"/> <a
                                className="srh-btn"><i className="ti-close"></i></a>
                        </form>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
  );
}

export default NavBar;
