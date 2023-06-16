import React from "react";

class SideBar extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: "someValue",
    };
  }

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
            <a className="has-arrow" href="javascript:;">
              <div className="parent-icon">
                <i className="bi bi-receipt"></i>
              </div>
              <div className="menu-title">Contributions</div>
            </a>
            <ul>
              <li>
                <a href="/">
                  <i className="bi bi-circle"></i>New Donation
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
              <li>
                <a href="/view-contributions">
                  <i className="bi bi-circle"></i> View Contributions
                </a>
              </li>
            </ul>
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
                <a href="/fund">
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
      </aside>
    );
  }

  componentDidMount() {
    this.setState({
      someKey: "otherValue",
    });
  }
}

export default SideBar;
