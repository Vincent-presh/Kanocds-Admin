import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.onSave = this.onSave.bind(this);
  }

  onSave(event) {
    event.preventDefault();
    toast.success("Profile Details Saved!!!");
  }

  componentDidMount() {}

  render() {
    return (
      <main class="page-content">
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <div class="page-breadcrumb d-none d-sm-flex align-items-center">
          <div class="ps-3">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb mb-0 p-0">
                <li class="breadcrumb-item">
                  <a href="javascript:;">
                    <i class="bx bx-home-alt text-white"></i>
                  </a>
                </li>
                <li
                  class="breadcrumb-item active text-white"
                  aria-current="page"
                >
                  User Profile
                </li>
              </ol>
            </nav>
          </div>
          <div class="ms-auto">
            <div class="btn-group">
              <button type="button" class="btn btn-light">
                Settings
              </button>
              <button
                type="button"
                class="btn btn-light split-bg-light dropdown-toggle dropdown-toggle-split"
                data-bs-toggle="dropdown"
              >
                {" "}
                <span class="visually-hidden">Toggle Dropdown</span>
              </button>
              <div class="dropdown-menu dropdown-menu-right dropdown-menu-lg-end">
                {" "}
                <a class="dropdown-item" href="javascript:;">
                  Action
                </a>
                <a class="dropdown-item" href="javascript:;">
                  Another action
                </a>
                <a class="dropdown-item" href="javascript:;">
                  Something else here
                </a>
                <div class="dropdown-divider"></div>{" "}
                <a class="dropdown-item" href="javascript:;">
                  Separated link
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="profile-cover bg-dark"></div>

        <div class="row">
          <div class="col-12 col-lg-8">
            <div class="card shadow-sm border-0">
              <div class="card-body">
                <h5 class="mb-0">My Account</h5>
                <hr />
                <div class="card shadow-none border">
                  <div class="card-header">
                    <h6 class="mb-0">USER INFORMATION</h6>
                  </div>
                  <div class="card-body">
                    <form class="row g-3">
                      <div class="col-6">
                        <label class="form-label">Full Name</label>
                        <input
                          type="text"
                          class="form-control"
                          value="@jhon"
                          disabled
                        />
                      </div>
                      <div class="col-6">
                        <label class="form-label">Email address</label>
                        <input
                          type="text"
                          class="form-control"
                          value="xyz@example.com"
                          disabled
                        />
                      </div>
                      <div class="col-6">
                        <label class="form-label">Full Name</label>
                        <input type="text" class="form-control" value="jhon" />
                      </div>
                    </form>
                  </div>
                </div>
                <div class="card shadow-none border">
                  <div class="card-header">
                    <h6 class="mb-0">Update Password</h6>
                  </div>
                  <div class="card-body">
                    <form class="row g-3">
                      <div class="col-12">
                        <label class="form-label">Current Password</label>
                        <input
                          type="password"
                          class="form-control"
                          value="********"
                        />
                      </div>
                      <div class="col-6">
                        <label class="form-label">New Password</label>
                        <input
                          type="password"
                          class="form-control"
                          value="@jhon"
                        />
                      </div>
                      <div class="col-6">
                        <label class="form-label">Confirm New Password</label>
                        <input
                          type="password"
                          class="form-control"
                          value="@jhon"
                        />
                      </div>
                    </form>
                  </div>
                </div>
                <div class="text-start">
                  <button
                    onClick={(e) => {
                      this.onSave(e);
                    }}
                    type="button"
                    class="btn btn-primary px-4"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-4">
            <div class="card shadow-sm border-0 overflow-hidden">
              <div class="card-body">
                <div class="text-center mt-4">
                  <h4 class="mb-1">Jhon Deo, 27</h4>

                  <div class="mt-4"></div>
                  <h6 class="mb-1">HR Manager - Codervent Technology</h6>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Profile;
