import { mdiCog } from "@mdi/js"
import Icon from "@mdi/react"
import UserInfo from "../../components/UserInfo"
import UserSettings from "../../components/UserSettings"

const SettingsPage = () => {
  return (
    <div className="page-wrapper">
      <div className="page-breadcrumb">
        <div className="row align-items-center">
          <div className="col-5">
            <h4 className="page-title d-flex align-items-center">
              <Icon path={mdiCog} size={1} className="mr-2" />
              <span>Settings</span>
            </h4>
            <div className="d-flex align-items-center">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Settings</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 col-12">
            <UserInfo />
          </div>
          <div className="col-lg-8 col-12">
            <UserSettings />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;
