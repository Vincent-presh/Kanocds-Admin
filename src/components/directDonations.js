import axios from "axios";
import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-datepicker/dist/react-datepicker.css";
import { WEB_BASE_URL } from "./webbase";
import cookie from "react-cookies";
import DatePicker from "react-datepicker";
import qs from "qs";

import "react-datepicker/dist/react-datepicker.css";

class Directdonations extends React.Component {
  constructor() {
    super();
    this.state = {
      token: cookie.load("token"),
      contributions: [],
      startDate: new Date(),
      endDate: new Date(),
    };
    //binding this to event-handler functions
    this.setStartDate = this.setStartDate.bind(this);
    this.setEndDate = this.setEndDate.bind(this);
    this.getContributions = this.getContributions.bind(this);
    this.confirmTransaction = this.confirmTransaction.bind(this);
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
    axios
      .post(
        WEB_BASE_URL + "/admin/getDirect.php",
        qs.stringify({
          take_key: this.state.token,
        })
      )
      .then((res) => {
        if (res.data.status !== "success") {
          console.log(res.data);
          this.setState({
            contributions: res.data,
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
                    value={this.props.formRole}
                    onChange={(event) => this.props.onChangeRole(event)}
                  >
                    <option selected=""> Select time</option>
                    <option value="1">Last 30 days</option>
                    <option value="2">Last 90 days</option>
                    <option value="3">Last 1 year</option>
                    <option value="3">All Time</option>
                  </select>
                </div>
                <div className="col-6">
                  <label className="form-label">Order By</label>
                  <select
                    className="form-select mb-3"
                    aria-label="Default select example"
                    value={this.props.formRole}
                    onChange={(event) => this.props.onChangeRole(event)}
                  >
                    <option selected=""> Select Column</option>
                    <option value="1">Name</option>
                    <option value="2">Transaction Date</option>
                    <option value="3">Amount</option>
                  </select>
                </div>
              </div>
              <div className="row my-3">
                <div className="col-6">
                  <label className="form-label">Filter Contribution Type</label>
                  <select
                    className="form-select mb-3"
                    aria-label="Default select example"
                    value={this.props.formRole}
                    onChange={(event) => this.props.onChangeRole(event)}
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
                    value={this.props.formRole}
                    onChange={(event) => this.props.onChangeRole(event)}
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
                    <th>Reference</th>
                    <th>User Email</th>
                    <th>User Name</th>
                    <th>Phone Number</th>
                    <th>Country</th>
                    <th>Amount</th>
                    <th>Transaction date</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.contributions.map((inst) => (
                    <tr>
                      <td>{inst.reference}</td>
                      <td>{inst.user_email}</td>
                      <td>{inst.user_name}</td>
                      <td>
                        <i
                          className="bi bi-arrow-down"
                          style={{ color: "red", marginRight: "5px" }}
                        ></i>
                        {inst.phone_number}
                      </td>
                      <td>{inst.country}</td>

                      <td>&#8358;{inst.amount}</td>
                      <td>{inst.date_of}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot></tfoot>
              </table>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Directdonations;
