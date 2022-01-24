import React from "react";
import { ToastContainer, toast } from "react-toastify";
import TransferModal from "./TransferModal";

class TransferFund extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: "someValue",
    };
  }

  onSubmit(event) {
    event.preventDefault();
    toast.loading("Transferring Funds...");
    setTimeout(() => {
      toast.dismiss();
      toast.success("Funds Transferred");
    }, 2000);
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
                Wallet Balance : $200 {this.props.walletBalance}
              </button>
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
                        <button
                          type="button"
                          className="btn btn-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#TransferModal"
                        >
                          Transfer
                        </button>
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
                        <button
                          type="button"
                          className="btn btn-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#addModal"
                        >
                          Transfer
                        </button>
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
                        <button
                          type="button"
                          className="btn btn-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#addModal"
                        >
                          Transfer
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <TransferModal
                title="Transfer Funds to User"
                id="TransferModal"
                onSubmit={this.onSubmit}
                formEmail={"Thomas@gmail.com"}
                formRole={this.state.formRole}
              ></TransferModal>
            </div>
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

export default TransferFund;
