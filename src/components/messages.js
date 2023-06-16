import React from "react";
import Modal from "./modal";
import { toast, ToastContainer } from "react-toastify";
import "react-datepicker/dist/react-datepicker.css";
import { WEB_BASE_URL } from "./webbase";
import cookie from "react-cookies";
import DatePicker from "react-datepicker";
import qs from "qs";
import axios from "axios";
class Messages extends React.Component {
  constructor() {
    super();
    this.state = {
      token: cookie.load("token"),
      formEmail: "",
      formRole: "",
      users: [],
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

  getAllUsers() {
    const id = toast.loading("Please wait...");
    axios
      .post(
        WEB_BASE_URL + "/admin/getMessages.php",
        qs.stringify({
          take_key: this.state.token,
        })
      )
      .then((res) => {
        if (res.data.status !== "success") {
          console.log(res.data);
          this.setState({
            users: res.data,
          });
        } else {
          console.log(res);
          toast.update(id, {
            render: res.data.error,
            type: "error",
            isLoading: false,
          });
        }
      })
      .then((res) => {
        setTimeout(() => {
          toast.dismiss(id);
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //set state for formRole
  onChangeRole(event) {
    this.setState({
      formRole: event.target.value,
    });
  }

  componentDidMount() {
    this.getAllUsers();
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
                  All Contact Messages
                </li>
              </ol>
            </nav>
          </div>
          <div className="ms-auto">
            <div className="btn-group">
              <div className="d-flex align-items-center">
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
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <div className="table-responsive mt-3">
              <table className="table align-middle">
                <thead className="table-secondary">
                  <tr>
                    <th>ID</th>
                    <th>Email</th>
                    <th>Message</th>
                    <th>Type</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.users.map((user) => (
                    <tr>
                      <td>{user.id}</td>
                      <td>{user.user_email}</td>
                      <td>{user.message}</td>
                      <td>{user.type}</td>
                      <td>{user.datew}</td>
                    </tr>
                  ))}
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

export default Messages;
