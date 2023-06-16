import React from "react";
import { ToastContainer, toast } from "react-toastify";

class CreateUser extends React.Component {
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
                  Create User
                </li>
              </ol>
            </nav>
          </div>
          <div className="ms-auto">
            <div className="btn-group">
              <button type="button" className="btn btn-primary">
                Wallet Balance: $200
              </button>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <form className="row">
              <div className="row">
                <div className="col-6">
                  <label className="form-label">Email</label>
                  <input
                    type="text"
                    onChange={(event) => this.onChangeEmail(event)}
                    value={this.state.formEmail}
                    class="form-control datepicker "
                    id="P1254294827"
                    required
                  />
                </div>
              </div>
              <div className="row my-3">
                <div className="col-4">
                  <label className="form-label">Role</label>
                  <select
                    className="form-select mb-3"
                    aria-label="Default select example"
                    value={this.state.formRole}
                    onChange={(event) => this.onChangeRole(event)}
                    required
                  >
                    <option selected=""> Select Role</option>
                    <option value="1">Operator</option>
                    <option value="2">Agent</option>
                  </select>
                </div>
                <div className="col-4">
                  <button
                    type="submit"
                    style={{ marginTop: 29 }}
                    className="btn btn-primary d-flex"
                  >
                    <div>
                      <i class="bi bi-cloud-arrow-down-fill"></i>
                    </div>
                    <div className="mx-3">Invite User</div>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    );
  }

  componentDidMount() {
    this.setState({
      someKey: "otherValue",
    });
  }
}

export default CreateUser;
