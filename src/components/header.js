import React from "react";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: "someValue",
    };
  }

  render() {
    return (
      <header className="top-header">
        <nav className="navbar navbar-expand gap-3">
          <div className="mobile-toggle-icon fs-3">
            <i className="bi bi-list"></i>
          </div>
          <form className="searchbar">
            <div className="position-absolute top-50 translate-middle-y search-icon ms-3">
              <i className="bi bi-search"></i>
            </div>
            <input
              className="form-control"
              type="text"
              placeholder="Type here to search"
            />
            <div className="position-absolute top-50 translate-middle-y search-close-icon">
              <i className="bi bi-x-lg"></i>
            </div>
          </form>
          <div className="top-navbar-right ms-auto">
            <ul className="navbar-nav align-items-center">
              <li className="nav-item search-toggle-icon">
                <a className="nav-link" href="#">
                  <div className="">
                    <i className="bi bi-search"></i>
                  </div>
                </a>
              </li>
              <li className="nav-item dropdown dropdown-user-setting">
                <a
                  className="nav-link dropdown-toggle dropdown-toggle-nocaret"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  <div className="user-setting d-flex align-items-center">
                    <img
                      src="assets/images/avatars/avatar-1.png"
                      className="user-img"
                      alt=""
                    />
                  </div>
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <a className="dropdown-item" href="#">
                      <div className="d-flex align-items-center">
                        <img
                          src="assets/images/avatars/avatar-1.png"
                          alt=""
                          className="rounded-circle"
                          width="54"
                          height="54"
                        />
                        <div className="ms-3">
                          <h6 className="mb-0 dropdown-user-name">Jhon Deo</h6>
                          <small className="mb-0 dropdown-user-designation text-secondary">
                            HR Manager
                          </small>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/profile">
                      <div className="d-flex align-items-center">
                        <div className="">
                          <i className="bi bi-person-fill"></i>
                        </div>
                        <div className="ms-3">
                          <span>Profile</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      <div className="d-flex align-items-center">
                        <div className="">
                          <i className="bi bi-speedometer"></i>
                        </div>
                        <div className="ms-3">
                          <span>Dashboard</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <div className="d-flex align-items-center">
                        <div className="">
                          <i className="bi bi-piggy-bank-fill"></i>
                        </div>
                        <div className="ms-3">
                          <span>Earnings</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <div className="d-flex align-items-center">
                        <div className="">
                          <i className="bi bi-cloud-arrow-down-fill"></i>
                        </div>
                        <div className="ms-3">
                          <span>Download Report</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/signIn">
                      <div className="d-flex align-items-center">
                        <div className="">
                          <i className="bi bi-lock-fill"></i>
                        </div>
                        <div className="ms-3">
                          <span>Logout</span>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown dropdown-large">
                <a
                  className="nav-link dropdown-toggle dropdown-toggle-nocaret"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  <div className="notifications">
                    <span className="notify-badge">8</span>
                    <i className="bi bi-bell-fill"></i>
                  </div>
                </a>
                <div className="dropdown-menu dropdown-menu-end p-0">
                  <div className="p-2 border-bottom m-2">
                    <h5 className="h5 mb-0">Notifications</h5>
                  </div>
                  <div className="header-notifications-list p-2">
                    <a className="dropdown-item" href="#">
                      <div className="d-flex align-items-center">
                        <div className="notification-box bg-light-primary text-primary">
                          <i className="bi bi-basket2-fill"></i>
                        </div>
                        <div className="ms-3 flex-grow-1">
                          <h6 className="mb-0 dropdown-msg-user">
                            New Orders{" "}
                            <span className="msg-time float-end text-secondary">
                              1 m
                            </span>
                          </h6>
                          <small className="mb-0 dropdown-msg-text text-secondary d-flex align-items-center">
                            You have recived new orders
                          </small>
                        </div>
                      </div>
                    </a>
                    <a className="dropdown-item" href="#">
                      <div className="d-flex align-items-center">
                        <div className="notification-box bg-light-purple text-purple">
                          <i className="bi bi-people-fill"></i>
                        </div>
                        <div className="ms-3 flex-grow-1">
                          <h6 className="mb-0 dropdown-msg-user">
                            New Customers{" "}
                            <span className="msg-time float-end text-secondary">
                              7 m
                            </span>
                          </h6>
                          <small className="mb-0 dropdown-msg-text text-secondary d-flex align-items-center">
                            5 new user registered
                          </small>
                        </div>
                      </div>
                    </a>

                    <a className="dropdown-item" href="#">
                      <div className="d-flex align-items-center">
                        <div className="notification-box bg-light-success text-success">
                          <i className="bi bi-lightbulb-fill"></i>
                        </div>
                        <div className="ms-3 flex-grow-1">
                          <h6 className="mb-0 dropdown-msg-user">
                            Defense Alerts{" "}
                            <span className="msg-time float-end text-secondary">
                              2 h
                            </span>
                          </h6>
                          <small className="mb-0 dropdown-msg-text text-secondary d-flex align-items-center">
                            45% less alerts last 4 weeks
                          </small>
                        </div>
                      </div>
                    </a>
                    <a className="dropdown-item" href="#">
                      <div className="d-flex align-items-center">
                        <div className="notification-box bg-light-info text-info">
                          <i className="bi bi-bookmark-heart-fill"></i>
                        </div>
                        <div className="ms-3 flex-grow-1">
                          <h6 className="mb-0 dropdown-msg-user">
                            4 New Sign Up{" "}
                            <span className="msg-time float-end text-secondary">
                              2 w
                            </span>
                          </h6>
                          <small className="mb-0 dropdown-msg-text text-secondary d-flex align-items-center">
                            New 4 user registartions
                          </small>
                        </div>
                      </div>
                    </a>
                    <a className="dropdown-item" href="#">
                      <div className="d-flex align-items-center">
                        <div className="notification-box bg-light-bronze text-bronze">
                          <i className="bi bi-briefcase-fill"></i>
                        </div>
                        <div className="ms-3 flex-grow-1">
                          <h6 className="mb-0 dropdown-msg-user">
                            All Documents Uploaded{" "}
                            <span className="msg-time float-end text-secondary">
                              1 mo
                            </span>
                          </h6>
                          <small className="mb-0 dropdown-msg-text text-secondary d-flex align-items-center">
                            Sussessfully uploaded all files
                          </small>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="p-2">
                    <div>
                      <hr className="dropdown-divider" />
                    </div>
                    <a className="dropdown-item" href="#">
                      <div className="text-center">View All Notifications</div>
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }

  componentDidMount() {
    this.setState({
      someKey: "otherValue",
    });
  }
}

export default Header;
