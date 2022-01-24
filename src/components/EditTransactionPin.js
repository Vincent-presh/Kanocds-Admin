import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class EditTransactionPin extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: "someValue",
    };
    this.onSave = this.onSave.bind(this);
  }

  onSave(event) {
    event.preventDefault();
    toast.success("Profile Details Saved!!!");
  }
  render() {
    return (
      <main className="page-content">
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
                  Edit Transaction Pin
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
            <form class="row g-3">
              <div class="col-12">
                <label class="form-label">Current Pin</label>
                <input type="password" class="form-control" value="********" />
              </div>
              <div class="col-6">
                <label class="form-label">New Pin</label>
                <input type="password" class="form-control" value="@jhon" />
              </div>
              <div class="col-6">
                <label class="form-label">Confirm New Pin</label>
                <input type="password" class="form-control" value="@jhon" />
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

export default EditTransactionPin;
