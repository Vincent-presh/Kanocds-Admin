
import React from "react";
import { getFirestore, collection, getDocs, addDoc, getDoc, doc, runTransaction } from 'firebase/firestore/lite';
import app from "../firebase";


class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      db: getFirestore(app),
      someKey: "someValue",
      visitors: 0,
    };
  }

  componentDidMount() {

    const addViewCount = async () => {
      const sitedocRef = doc(this.state.db, "stats", "siteStats");
      try {
        await runTransaction(this.state.db, async (transaction) => {
          const sfDoc = await transaction.get(sitedocRef);
          if (!sfDoc.exists()) {
            this.setState({
              visitors: 0,
            })
          } else {
            const currentVisitors = sfDoc.data().visitors || 0;
            this.setState({
              visitors: currentVisitors,
            })
          }
        });
      } catch (e) {
        console.log("Transaction failed: ", e);
      }

    }
    addViewCount();

  }

  render() {
    return (
      <header className="top-header">
        <nav className="navbar navbar-expand gap-3">
          <div className="mobile-toggle-icon fs-3">
            <i className="bi bi-list"></i>
          </div>

          <div className="top-navbar-right ms-auto">
            <ul className="navbar-nav align-items-center">
              <li className="nav-item dropdown dropdown-large">
                <a
                  className="nav-link dropdown-toggle dropdown-toggle-nocaret"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  Website Visitors: {this.state.visitors}
                </a>
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


}

export default Header;
