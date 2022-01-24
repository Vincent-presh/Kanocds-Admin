import React from "react";
import { ToastContainer, toast } from "react-toastify";

class GenerateVoucher extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: "someValue",
      description: "",
      units: "",
      unitAmount: "",
      transactionPin: "",
    };
    this.onSave = this.onSave.bind(this);
    this.setDescription = this.setDescription.bind(this);
    this.setUnits = this.setUnits.bind(this);
    this.setUnitAmount = this.setUnitAmount.bind(this);
    this.setTransactionPin = this.setTransactionPin.bind(this);
  }

  onSave(event) {
    event.preventDefault();
    toast.success("Voucher Generated");
  }

  //write setter function
  setDescription(description) {
    this.setState({
      description: description.target.value,
    });
  }

  setUnits(units) {
    this.setState({
      units: units.target.value,
    });
  }

  setUnitAmount(unitAmount) {
    this.setState({
      unitAmount: unitAmount.target.value,
    });
  }

  setTransactionPin(transactionPin) {
    this.setState({
      transactionPin: transactionPin.event.value,
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
                  Generate New Voucher
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
                Wallet Balance : $ {this.props.walletBalance}
              </button>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <form
              class="row g-3"
              onSubmit={(event) => {
                this.onSave(event);
              }}
            >
              <div class="col-12">
                <label class="form-label">Voucher Description</label>
                <input
                  type="text"
                  class="form-control"
                  value={this.state.description}
                  onChange={(event) => this.setDescription(event)}
                  required
                />
              </div>
              <div class="col-6">
                <label class="form-label">Units</label>
                <input
                  type="number"
                  class="form-control"
                  value={this.state.units}
                  onChange={(event) => this.setUnits(event)}
                  required
                />
              </div>
              <div class="col-6">
                <label class="form-label">Unit Amount</label>
                <input
                  type="number"
                  class="form-control"
                  value={this.state.unitAmount}
                  onChange={(event) => this.setUnitAmount(event)}
                  required
                />
              </div>
              <div class="col-6">
                <label class="form-label">Transaction Pin:</label>
                <input
                  type="password"
                  class="form-control"
                  value={this.state.transactionPin}
                  onChange={(event) => this.setTransactionPin(event)}
                  required
                />
              </div>
              <div class="text-start">
                <input
                  type="submit"
                  class="btn btn-primary px-4"
                  value="Generate New Voucher"
                />
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

export default GenerateVoucher;
