import axios from "axios";
import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-datepicker/dist/react-datepicker.css";
import { WEB_BASE_URL } from "./webbase";
import cookie from "react-cookies";
import DatePicker from "react-datepicker";
import { CSVLink, CSVDownload } from "react-csv";
import qs from "qs";

import "react-datepicker/dist/react-datepicker.css";

class Transaction extends React.Component {
  constructor() {
    super();
    this.state = {
      token: cookie.load("token"),
      contributions: [],
      startDate: new Date(),
      endDate: new Date(),
      contribution_type: "",
      time_frame: "",
      orderBy: "",
      transaction_type: ""
    };
    //binding this to event-handler functions
    this.setStartDate = this.setStartDate.bind(this);
    this.setEndDate = this.setEndDate.bind(this);
    this.getContributions = this.getContributions.bind(this);
    this.confirmTransaction = this.confirmTransaction.bind(this);
    this.reset = this.reset.bind(this);
  }


  reset() {
    this.setState({
      contribution_type: "",
      time_frame: "",
      orderBy: "",
      transaction_type: ""
    })
    this.getContributions()
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

  getContributions() {
    const id = toast.loading("Please wait...");
    console.log(WEB_BASE_URL + "/admin/getAllContributions.php?contribution_type="
      + this.state.contribution_type
      + "&transaction_type=" + this.state.transaction_type
      + "&order_by=" + this.state.orderBy
      + "&time_frame=" + this.state.time_frame)
    axios
      .post(
        WEB_BASE_URL + "/admin/getAllContributions.php?contribution_type="
        + this.state.contribution_type
        + "&transaction_type=" + this.state.transaction_type
        + "&order_by=" + this.state.orderBy
        + "&time_frame=" + this.state.time_frame,
        qs.stringify({
          take_key: this.state.token,
        })
      )
      .then((res) => {
        console.log(res.data)
        if (res.data.status !== "success") {
          console.log(res.data);
          this.setState({
            contributions: res.data,
          });
          toast.update(id, {
            render: "Transactions Received",
            type: "success",
            isLoading: false,
          });
          setTimeout(() => {
            toast.dismiss(id);
          }, 2000);
        } else {
          toast.update(id, {
            render: res.data.error,
            type: "error",
            isLoading: false,
          });
          setTimeout(() => {
            toast.dismiss(id);
          }, 2000);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  confirmTransaction(transactionId) {
    if (window.confirm("Confirm Transaction?") === true) {
      const id = toast.loading("Please wait...");
      axios
        .post(
          WEB_BASE_URL + "/admin/approveTrans.php",
          qs.stringify({
            take_key: this.state.token,
            transactionId: transactionId,
          })
        )
        .then((res) => {
          if (res.data.status === "success") {
            console.log(res.data);
            toast.update(id, {
              render: res.data.message,
              type: "success",
              isLoading: false,
            });
            setTimeout(() => {
              toast.dismiss(id);
            }, 2000);
          } else {
            console.log(res);
            toast.update(id, {
              render: res.data.error,
              type: "error",
              isLoading: false,
            });
            setTimeout(() => {
              toast.dismiss(id);
            }, 2000);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  componentDidMount() {
    this.getContributions();
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
                  Contributions
                </li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <form className="row">
              <div className="row">
                <div className="col-6">
                  <label className="form-label">Time Frame</label>
                  <select
                    className="form-select mb-3"
                    aria-label="Default select example"
                    value={this.state.time_frame}
                    onChange={(event) => this.setState({
                      time_frame: event.target.value,
                    })}
                  >
                    <option selected=""> Select time</option>
                    <option value="last_30_days">Last 30 days</option>
                    <option value="last_90_days">Last 90 days</option>
                    <option value="one_year">Last 1 year</option>
                    <option value="all">All Time</option>
                  </select>
                </div>
                <div className="col-6">
                  <label className="form-label">Order By</label>
                  <select
                    className="form-select mb-3"
                    aria-label="Default select example"
                    value={this.state.orderBy}
                    onChange={(event) => this.setState({
                      orderBy: event.target.value,
                    })}
                  >
                    <option selected=""> Select Column</option>
                    <option value="name">Name</option>
                    <option value="amount">Amount</option>
                  </select>
                </div>
              </div>
              <div className="row my-3">
                <div className="col-6">
                  <label className="form-label">Filter Contribution Type</label>
                  <select
                    className="form-select mb-3"
                    aria-label="Default select example"
                    value={this.state.contribution_type}
                    onChange={(event) => this.setState({
                      contribution_type: event.target.value,
                    })}
                  >
                    <option selected=""> Select Filter</option>

                    <option value="Monetary">Monetary</option>
                  </select>
                </div>
                <div className="col-6">
                  <label className="form-label">Filter Transaction Type</label>
                  <select
                    className="form-select mb-3"
                    aria-label="Default select example"
                    value={this.state.transaction_type}
                    onChange={(event) => this.setState({
                      transaction_type: event.target.value,
                    })}
                  >
                    <option selected=""> Select Filter</option>
                    <option value="Transfer">Transfer</option>
                    <option value="Cash">Cash</option>
                    <option value="eNaira">eNaira</option>
                    <option value="POS">POS</option>
                    <option value="Bank Transfer">Bank Transfer</option>
                    <option value="Online Transfer">Online Transfer</option>
                    <option value="Wire">Wire</option>
                    <option value="Western Union">Western Union</option>
                    <option value="MoneyGram">MoneyGram</option>
                  </select>
                </div>
                <div className="col-9">
                  <div className="d-flex">
                    <button
                      style={{ marginTop: 29 }}
                      className="btn btn-primary d-flex"
                      onClick={e => {
                        e.preventDefault()
                        this.getContributions()
                      }}
                    >

                      <div>
                        <i class="bi"></i>
                      </div>
                      <div className="mx-3">Generate Report</div>
                    </button>
                    <CSVLink
                      filename={"KanoCDS Contributions.csv"}
                      data={this.state.contributions}
                      style={{ marginTop: 29 }}
                      className="btn btn-primary d-flex"
                      onClick={e => {

                      }}
                    >

                      <div>
                        <i class="bi bi-cloud-arrow-down-fill"></i>
                      </div>
                      <div className="mx-3">Download Report</div>
                    </CSVLink>

                    <button
                      style={{ marginTop: 29 }}
                      className="btn btn-secondary d-flex mx-3"
                      onClick={e => {
                        e.preventDefault()
                        this.reset()
                      }}
                    >
                      <div>
                        <i class="bi bi-close"></i>
                      </div>
                      <div className="mx-3">Clear Options</div>
                    </button>
                  </div>
                </div>

                <div className="col-4">

                </div>
              </div>
            </form>
          </div>
        </div >

        <div className="card">
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
                    <th>User Name</th>
                    <th>Contribution type</th>
                    <th>Transaction type</th>
                    <th>Transaction date</th>
                    <th>Status</th>
                    <th>Amount</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.contributions.map((inst) => (
                    <tr>
                      <td>
                        <i
                          className="bi bi-arrow-down"
                          style={{ color: "red", marginRight: "5px" }}
                        ></i>
                        {inst.account_name}
                      </td>
                      <td>{inst.contribution_type}</td>
                      <td>{inst.transaction_type}</td>
                      <td>{inst.date}</td>
                      <td
                        style={{ cursor: "pointer" }}
                        onClick={(event) => {
                          this.confirmTransaction(inst.id);
                        }}
                      >
                        <span class="badge rounded-pill alert-success">
                          {inst.status}
                        </span>
                      </td>
                      <td>&#8358;{inst.amount}</td>
                      <td>
                        <a
                          href="javascript:void(0);"
                          type="button"
                          class="text-danger mr-2 p-2"
                          onClick={(event) => {
                            this.confirmTransaction(inst.id);
                          }}
                        >
                          Confirm
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot></tfoot>
              </table>
            </div>
          </div>
        </div>
      </main >
    );
  }
}

export default Transaction;
