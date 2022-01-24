import React from "react";
import Modal from "./modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
class Users extends React.Component {
  constructor() {
    super();
    this.state = {
      formEmail: "",
      formRole: "",
    };
    this.onInviteUser = this.onInviteUser.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeRole = this.onChangeRole.bind(this);
  }

  onInviteUser(event) {
    event.preventDefault();
    if (this.state.formEmail !== "" && this.state.formRole !== "") {
      toast.success("User Invited!!!");
    } else {
      toast.error("User Not Invited!!!");
    }
  }

  //set state for formEmail
  onChangeEmail(event) {
    this.setState({
      formEmail: event.target.value,
    });
  }

  //set state for formRole
  onChangeRole(event) {
    this.setState({
      formRole: event.target.value,
    });
  }

  componentDidMount() {}

  render() {
    return (
      <main className="page-content">
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
          <div className="ps-3">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0 p-0">
                <li className="breadcrumb-item">
                  <a href="javascript:;">
                    <i className="bx bx-home-alt"></i>
                  </a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  All Users
                </li>
              </ol>
            </nav>
          </div>
          <div className="ms-auto">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#addModal"
              >
                Create New User
              </button>
              <button
                type="button"
                className="btn btn-primary split-bg-primary dropdown-toggle dropdown-toggle-split"
                data-bs-toggle="dropdown"
              >
                {" "}
                <span className="visually-hidden">Toggle Dropdown</span>
              </button>
              <Modal
                title="Create New User"
                id="addModal"
                onSubmit={this.onInviteUser}
                onChangeEmail={this.onChangeEmail}
                onChangeRole={this.onChangeRole}
                formEmail={this.state.formEmail}
                formRole={this.state.formRole}
              ></Modal>
              {/* <div className="dropdown-menu dropdown-menu-right dropdown-menu-lg-end">
                {" "}
                <a className="dropdown-item" href="javascript:;">
                  Action
                </a>
                <a className="dropdown-item" href="javascript:;">
                  Another action
                </a>
                <a className="dropdown-item" href="javascript:;">
                  Something else here
                </a>
                <div className="dropdown-divider"></div>{" "}
                <a className="dropdown-item" href="javascript:;">
                  Separated link
                </a>
              </div> */}
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="d-flex align-items-center">
              <h5 className="mb-0">All Users Under You</h5>
              <form className="ms-auto position-relative">
                <div className="position-absolute top-50 translate-middle-y search-icon px-3">
                  <i className="bi bi-search"></i>
                </div>
                <input
                  className="form-control ps-5"
                  type="text"
                  placeholder="search"
                />
              </form>
            </div>
            <div className="table-responsive mt-3">
              <table className="table align-middle">
                <thead className="table-secondary">
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>
                      <div className="d-flex align-items-center gap-3 cursor-pointer">
                        <img
                          src="assets/images/avatars/avatar-1.png"
                          className="rounded-circle"
                          width="44"
                          height="44"
                          alt=""
                        />
                        <div className="">
                          <p className="mb-0">Thomas Hardy</p>
                        </div>
                      </div>
                    </td>
                    <td>Thomas@gmail.com</td>
                    <td>Admin</td>
                    <td>
                      <div className="table-actions d-flex align-items-center gap-3 fs-6">
                        <a
                          href="javascript:;"
                          className="text-warning"
                          data-bs-toggle="modal"
                          data-bs-target="#editModal"
                          title="Edit"
                        >
                          <i className="bi bi-pencil-fill"></i>
                        </a>
                        <a
                          href="javascript:;"
                          className="text-danger"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="Delete"
                        >
                          <i className="bi bi-trash-fill"></i>
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>
                      <div className="d-flex align-items-center gap-3 cursor-pointer">
                        <img
                          src="assets/images/avatars/avatar-2.png"
                          className="rounded-circle"
                          width="44"
                          height="44"
                          alt=""
                        />
                        <div className="">
                          <p className="mb-0">Victoria Hardy</p>
                        </div>
                      </div>
                    </td>
                    <td>victoria12@gmail.com</td>
                    <td>Operator</td>

                    <td>
                      <div className="table-actions d-flex align-items-center gap-3 fs-6">
                        <a
                          href="javascript:;"
                          className="text-warning"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="Edit"
                        >
                          <i className="bi bi-pencil-fill"></i>
                        </a>
                        <a
                          href="javascript:;"
                          className="text-danger"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="Delete"
                        >
                          <i className="bi bi-trash-fill"></i>
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>
                      <div className="d-flex align-items-center gap-3 cursor-pointer">
                        <img
                          src="assets/images/avatars/avatar-3.png"
                          className="rounded-circle"
                          width="44"
                          height="44"
                          alt=""
                        />
                        <div className="">
                          <p className="mb-0">Maria Anders</p>
                        </div>
                      </div>
                    </td>
                    <td>Maria44@gmail.com</td>
                    <td>Agent</td>
                    <td>
                      <div className="table-actions d-flex align-items-center gap-3 fs-6">
                        <a
                          href="javascript:;"
                          className="text-warning"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="Edit"
                        >
                          <i className="bi bi-pencil-fill"></i>
                        </a>
                        <a
                          href="javascript:;"
                          className="text-danger"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="Delete"
                        >
                          <i className="bi bi-trash-fill"></i>
                        </a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <Modal
                title="Edit User"
                id="editModal"
                onSubmit={this.onInviteUser}
                onChangeEmail={this.onChangeEmail}
                onChangeRole={this.onChangeRole}
                formEmail={"Thomas@gmail.com"}
                formRole={this.state.formRole}
              ></Modal>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Users;
