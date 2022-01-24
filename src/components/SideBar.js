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
              src="assets/images/logo-icon.png"
              className="logo-icon"
              alt="logo icon"
            />
          </div>
          <div>
            <img
              src="assets/images/llogo2.png"
              className="logo-text"
              style={{ maxWidth: "150px", padding: "10px" }}
              alt="logo text"
            />
          </div>
          <div className="toggle-icon ms-auto">
            {" "}
            <i className="bi bi-list"></i>
          </div>
        </div>

        <ul className="metismenu" id="menu">
          <li>
            <a href="/">
              <div className="parent-icon">
                <i className="bi bi-house-fill"></i>
              </div>
              <div className="menu-title">Dashboard</div>
            </a>
          </li>
          <li>
            <a href="/transactions">
              <div className="parent-icon">
                <i className="bi bi-credit-card-fill"></i>
              </div>
              <div className="menu-title">Transactions</div>
            </a>
          </li>

          <li>
            <a className="has-arrow" href="javascript:;">
              <div className="parent-icon">
                <i className="bi bi-receipt"></i>
              </div>
              <div className="menu-title">Manage Voucher</div>
            </a>
            <ul>
              <li>
                <a href="/generate-voucher">
                  <i className="bi bi-circle"></i>Generate Voucher
                </a>
              </li>
              <li>
                <a href="/vouchers">
                  <i className="bi bi-circle"></i> View Vouchers
                </a>
              </li>
            </ul>
          </li>

          <li>
            <a className="has-arrow" href="javascript:;">
              <div className="parent-icon">
                <i className="bi bi-wallet-fill"></i>
              </div>
              <div className="menu-title">Manage Wallet</div>
            </a>
            <ul>
              <li>
                <a href="/fund">
                  <i className="bi bi-circle"></i>Fund Wallet
                </a>
              </li>
              <li>
                <a href="/transfer-fund">
                  <i className="bi bi-circle"></i>Transfer Fund
                </a>
              </li>
              <li>
                <a href="/wallet-history">
                  <i className="bi bi-circle"></i>Wallet History
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a className="has-arrow" href="javascript:;">
              <div className="parent-icon">
                <i className="bi bi-person-lines-fill"></i>
              </div>
              <div className="menu-title">Manage Users</div>
            </a>
            <ul>
              <li>
                <a href="/create-users">
                  <i className="bi bi-circle"></i>Create User
                </a>
              </li>
              <li>
                <a href="/users">
                  <i className="bi bi-circle"></i>Manage Users
                </a>
              </li>
            </ul>
          </li>

          <li>
            <a className="has-arrow" href="javascript:;">
              <div className="parent-icon">
                <i className="bi bi-gear-fill"></i>
              </div>
              <div className="menu-title">Settings</div>
            </a>
            <ul>
              <li>
                <a href="/profile">
                  <i className="bi bi-circle"></i>View Profile
                </a>
              </li>

              <li>
                <a href="/edit-transaction-pin">
                  <i className="bi bi-circle"></i>Edit Transaction Pin
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
