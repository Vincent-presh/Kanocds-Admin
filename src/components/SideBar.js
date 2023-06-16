import React from "react";
import cookie from "react-cookies";

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      someKey: "someValue",
    };
  }
  componentDidMount() {}

  render() {
    return (
      <aside className="sidebar-wrapper" data-simplebar="true">
        <div className="sidebar-header">
          <div>
            <img
              src="assets/images/kanocds.png"
              className="logo-icon"
              alt="logo icon"
            />
          </div>
          <div></div>
          <div className="toggle-icon ms-auto">
            {" "}
            <i className="bi bi-list"></i>
          </div>
        </div>

        <ul className="metismenu" id="menu">
          <li>
            <a className="" href="/contributors">
              <div className="parent-icon">
                <i className="bi bi-receipt"></i>
              </div>
              <div className="menu-title">View Contributors</div>
            </a>
          </li>
          <li>
            <a className="has-arrow" href="javascript:;">
              <div className="parent-icon">
                <i className="bi bi-receipt"></i>
              </div>
              <div className="menu-title">Contributions</div>
            </a>
            <ul>
              <li>
                <a href="/">
                  <i className="bi bi-circle"></i>View Donations
                </a>
              </li>
              <li>
                <a href="/direct">
                  <i className="bi bi-circle"></i>Direct Donations
                </a>
              </li>
              <li>
                <a href="/material">
                  <i className="bi bi-circle"></i>Material Contribution
                </a>
              </li>
              <li>
                <a href="/expertise">
                  <i className="bi bi-circle"></i>Expertise Contribution
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a className="" href="/Contact-messages">
              <div className="parent-icon">
                <i className="bi bi-person-lines-fill"></i>
              </div>
              <div className="menu-title">Contact Messages</div>
            </a>
          </li>
          <li>
            <a className="has-arrow" href="/profile">
              <div className="parent-icon">
                <i className="bi bi-person-lines-fill"></i>
              </div>
              <div className="menu-title">Profile</div>
            </a>
          </li>

          <li>
            <a className="has-arrow" href="javascript:;">
              <div className="parent-icon">
                <i className="bi bi-wallet-fill"></i>
              </div>
              <div className="menu-title">Projects Monitors</div>
            </a>
            <ul>
              <li>
                <a href="/projects">
                  <i className="bi bi-circle"></i>All Projects
                </a>
              </li>
            </ul>
          </li>

          <li>
            <a href="/support">
              <div className="parent-icon">
                <i className="bi bi-telephone-fill"></i>
              </div>
              <div className="menu-title">Support</div>
            </a>
          </li>
          <li>
            <a href="/signIn">
              <div className="parent-icon">
                <i className="bi bi-lock-fill"></i>
              </div>
              <div className="menu-title">Logout</div>
            </a>
          </li>
        </ul>
        <div class="breadcrumb-item active px-4 mt-4 pt-4 mb-4">
          <b>Powered By KanoCDS</b>
          <br />
          KANOCDS Admin
        </div>
      </aside>
    );
  }
}

export default SideBar;
