import './style.scss';

const NavBar = () => {
  return (
    <nav className="navbar-container navbar fixed-top navbar-expand-md bg-dark text-white d-flex align-items-center">
        <div className="navbar-header" data-logobg="skin5">
            <span className="navbar-brand">
                <b className="logo-icon">
                    <h3 className="mb-0 ml-2">Dashboard</h3>
                </b>
            </span>
        </div>
        <div className="navbar-collapse collapse" id="navbarSupportedContent" data-navbarbg="skin5">
            <ul className="navbar-nav me-auto">
                <li className="nav-item search-box">
                    <span className="nav-link waves-effect waves-dark">
                        <i className="ti-search"></i>
                    </span>
                    <form className="app-search position-absolute">
                        <input type="text" className="form-control" placeholder="Search &amp; enter"/>
                        <i className="ti-close"></i>
                    </form>
                </li>
            </ul>
        </div>
    </nav>
  );
}

export default NavBar;
