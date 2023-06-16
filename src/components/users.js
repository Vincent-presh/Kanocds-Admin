import React from "react";
import Modal from "./modal";
import { toast, ToastContainer } from "react-toastify";
import "react-datepicker/dist/react-datepicker.css";
import { WEB_BASE_URL } from "./webbase";
import cookie from "react-cookies";
import DatePicker from "react-datepicker";
import qs from "qs";
import axios from "axios";
import MessageModal from "./MessageModal";
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore/lite';
import app from "../firebase";

class Users extends React.Component {
  constructor() {
    super();
    this.state = {
      db: getFirestore(app),
      token: cookie.load("token"),
      formEmail: "",
      formRole: "",
      users: [],
    };
    this.onInviteUser = this.onInviteUser.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeRole = this.onChangeRole.bind(this);
    this.sendEmail = this.sendEmail.bind(this);
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
        WEB_BASE_URL + "/admin/getAllUsers.php",
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

  async sendEmail(recipient, subject, message) {

    const id = toast.loading("Please wait...");
    try {
      let mail = collection(this.state.db, 'mail');
      const docRef = await addDoc(mail, {
        to: recipient,
        message: {
          subject: subject,
          html: message,
          text: message
        },
      });
      toast.update(id, {
        render: 'Email sent successfully',
        type: "success",
        isLoading: false,
      });
      setTimeout(window.location.reload(), 4000)
    } catch (error) {
      toast.update(id, {
        render: "Failed to send Email",
        type: "error",
        isLoading: false,
      });
      console.error('Error adding document:', error);
    }
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
                  All Contributors
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
                Total users: {this.state.users.length}
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
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <form className="row">
              <div className="row my-3">
                <div className="col-4">
                  <label className="form-label">Group By</label>
                  <select
                    className="form-select mb-3"
                    aria-label="Default select example"
                    value={this.props.formRole}
                    onChange={(event) => this.props.onChangeRole(event)}
                  >
                    <option selected=""> Select Status</option>
                    <option value="1">Country</option>
                    <option value="2">State</option>
                  </select>
                </div>
                <div className="col-4">
                  <button
                    style={{ marginTop: 29 }}
                    className="btn btn-primary d-flex"
                  >
                    <div>
                      <i class="bi bi-cloud-arrow-down-fill"></i>
                    </div>
                    <div className="mx-3">Download Report</div>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <div className="d-flex align-items-center">
              <h5 className="mb-0">All Registered Contributors</h5>
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
                    <th>Phone Number</th>
                    <th>Country</th>
                    <th>State</th>
                    <th>LGA</th>
                    <th>Contributor type</th>
                    <th>Affliated Associations</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.users.map((user) => (
                    <>
                      <tr>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.phone}</td>
                        <td>{user.country}</td>
                        <td>{user.state}</td>
                        <td>{user.lga}</td>
                        <td>{user.contributor_type}</td>
                        <td>{user.association}</td>
                        <td>
                          <a
                            href="javascript:;"
                            data-bs-toggle="modal"
                            data-bs-target={"#editModal" + user.id}
                            title="Message"
                          >
                            <i class="bi  bi-chat-dots-fill"></i>
                          </a>
                        </td>
                      </tr>
                      <MessageModal
                        title="Message User"
                        id={"editModal" + user?.id}
                        onSubmit={this.sendEmail}
                        formEmail={user?.email}
                      ></MessageModal>
                    </>
                  ))}
                </tbody>
              </table>

            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Users;
