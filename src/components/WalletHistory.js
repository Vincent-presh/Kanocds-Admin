import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class WalletHistory extends React.Component {
  constructor() {
    super();
    this.state = {
      startDate: new Date(),
      endDate: new Date(),
    };
    //binding this to event-handler functions
    this.setStartDate = this.setStartDate.bind(this);
    this.setEndDate = this.setEndDate.bind(this);
  }
  setStartDate(date) {
    this.setState({
      startDate: date,
    });
  }

  setEndDate(date) {
    this.setState({
      endDate: date,
    });
  }

  componentDidMount() {}

  render() {
    return (
      <main className="page-content">
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
                  Wallet History
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
                  <label className="form-label">Time Frame (FROM):</label>
                  <DatePicker
                    selected={this.state.startDate}
                    onSelect={(date) => this.setStartDate(date)}
                    onChange={(date) => this.setStartDate(date)}
                  />
                </div>
                <div className="col-6">
                  <label className="form-label">Time Frame (TO):</label>
                  <DatePicker
                    selected={this.state.endDate}
                    onSelect={(date) => this.setEndDate(date)}
                    onChange={(date) => this.setEndDate(date)}
                  />
                </div>
              </div>
              <div className="row my-3">
                <div className="col-4">
                  <label className="form-label">Transaction Status</label>
                  <select
                    className="form-select mb-3"
                    aria-label="Default select example"
                    value={this.props.formRole}
                    onChange={(event) => this.props.onChangeRole(event)}
                  >
                    <option selected=""> Select Status</option>
                    <option value="1">All</option>
                    <option value="2">Paid</option>
                    <option value="3">Pending</option>
                    <option value="4">Failed</option>
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

        <div class="card">
          <div className="card-header py-3">
            <div className="row g-3">
              <div className="col-lg-3 col-md-6 me-auto">
                <div className="ms-auto position-relative">
                  <div className="position-absolute top-50 translate-middle-y search-icon px-3">
                    <i className="bi bi-search"></i>
                  </div>
                  <input
                    className="form-control ps-5"
                    type="text"
                    placeholder="Search Payment"
                  />
                </div>
              </div>

              <div className="col-lg-2 col-6 col-md-3">
                <select className="form-select">
                  <option>Show 10</option>
                  <option>Show 30</option>
                  <option>Show 50</option>
                </select>
              </div>
            </div>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table
                id="example"
                class="table table-striped table-bordered"
                style={{ width: "100%" }}
              >
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Transaction date</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <i
                        className="bi bi-arrow-down"
                        style={{ color: "red", marginRight: "5px" }}
                      ></i>
                      Tiger Nixon
                    </td>
                    <td>
                      {" "}
                      <span class="badge rounded-pill alert-warning">
                        Pending
                      </span>
                    </td>

                    <td>2011/04/25</td>
                    <td>$320,800</td>
                  </tr>
                  <tr>
                    <td>
                      <i
                        className="bi bi-arrow-up"
                        style={{ color: "green", marginRight: "5px" }}
                      ></i>
                      Garrett Winters
                    </td>
                    <td>
                      <span class="badge rounded-pill alert-danger">
                        Failed
                      </span>
                    </td>

                    <td>2011/07/25</td>
                    <td>$170,750</td>
                  </tr>

                  <tr>
                    <td>
                      <i
                        className="bi bi-arrow-up"
                        style={{ color: "green", marginRight: "5px" }}
                      ></i>
                      Garrett Winters
                    </td>
                    <td>
                      <span class="badge rounded-pill alert-warning">
                        Pending
                      </span>
                    </td>

                    <td>2011/07/25</td>
                    <td>$170,750</td>
                  </tr>
                  <tr>
                    <td>
                      <i
                        className="bi bi-arrow-up"
                        style={{ color: "green", marginRight: "5px" }}
                      ></i>
                      Garrett Winters
                    </td>
                    <td>
                      {" "}
                      <span class="badge rounded-pill alert-success">
                        Success
                      </span>
                    </td>

                    <td>2011/07/25</td>
                    <td>$170,750</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default WalletHistory;
