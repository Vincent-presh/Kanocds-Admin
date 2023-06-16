import React from "react";
import DatePicker from "react-datepicker";
import { toast, ToastContainer } from "react-toastify";
import "react-datepicker/dist/react-datepicker.css";
import { WEB_BASE_URL } from "./webbase";
import cookie from "react-cookies";
import qs from "qs";
import axios from "axios";

class Fund extends React.Component {
  constructor() {
    super();
    this.state = {
      token: cookie.load("token"),
      date: new Date(),
      accountName: "",
      transactionType: "",
      amount: 0,
      contributionType: "monetary",
    };

    this.setStartDate = this.setStartDate.bind(this);
    this.mytransTypeHandler = this.mytransTypeHandler.bind(this);
    this.myAmountHandler = this.myAmountHandler.bind(this);
    this.myAccountNameHandler = this.myAccountNameHandler.bind(this);
  }
  setStartDate(date) {
    this.setState({
      date: date,
    });
  }

  myAccountNameHandler(event) {
    this.setState({
      accountName: event.target.value,
    });
  }

  myAmountHandler(event) {
    this.setState({
      amount: event.target.value,
    });
  }

  mytransTypeHandler = (selectedOption) => {
    this.setState({ transactionType: selectedOption.value });
  };

  onSubmit(event) {
    event.preventDefault();
    const id = toast.loading("Please wait...");

    axios
      .post(
        WEB_BASE_URL + "/user/makeDonation.php",
        qs.stringify({
          accountName: this.state.accountName,
          amount: this.state.amount,
          take_key: this.state.token,
        })
      )
      .then((res) => {
        if (res.data.status === "success") {
          console.log(res.data);
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

  render() {
    return (
      <main className="page-content">
        <div className="">
          <div className="">
            <div className="container py-2">
              <h3
                className="font-weight-light text-left text-muted"
                style={{ paddingLeft: "6.7%" }}
              >
                Contribution Payment
              </h3>

              <div className="row">
                <div className="col-auto text-center flex-column d-none d-sm-flex">
                  <div className="row h-50">
                    <div className="col">&nbsp;</div>
                    <div className="col">&nbsp;</div>
                  </div>
                  <h5 className="m-2">
                    <span className="badge rounded-pill bg-light border">
                      &nbsp;
                    </span>
                  </h5>
                  <div className="row h-50">
                    <div className="col border-end">&nbsp;</div>
                    <div className="col">&nbsp;</div>
                  </div>
                </div>

                <div className="col">
                  <div className="card radius-15">
                    <div className="card-body" style={{ lineHeight: "1.5rem" }}>
                      <h4 className="card-title text-muted">
                        Step 1 Make Transfer to CDS Bank Account
                      </h4>
                      <hr />
                      <p className="card-text">
                        Make payment to the relevant CDS Bank Account below:
                      </p>
                      <p className="card-text">
                        <b>Payments in Nigerian Naira:</b> <br /> Account Name:{" "}
                        <i>
                          Green Horizon Community Support Initiative (Kano CDS)
                        </i>
                        <br />
                        Account Number: <i>0002383555</i>
                        <br></br>
                        Bank Name: Taj Bank.
                      </p>
                      <p className="card-text">
                        <b>Payments in foreign currency:</b>
                        <i>
                          <br /> Account Name: Green Horizon Community Support
                          Initiative (Kano CDS)
                        </i>
                        <br />
                        Account Number: <i>0002383672</i>
                        <br></br>
                        Bank Name: Taj Bank
                        <br></br>
                        Swift code: TAJJNGLA
                        <br></br>
                        Sort code: 302120031
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-auto text-center flex-column d-none d-sm-flex">
                  <div className="row h-50">
                    <div className="col border-end">&nbsp;</div>
                    <div className="col">&nbsp;</div>
                  </div>
                  <h5 className="m-2">
                    <span className="badge rounded-pill bg-primary">
                      &nbsp;
                    </span>
                  </h5>
                  <div className="row h-50">
                    <div className="col border-end">&nbsp;</div>
                    <div className="col">&nbsp;</div>
                  </div>
                </div>
                <div className="col py-2">
                  <div className="card border-primary shadow radius-15">
                    <div className="card-body">
                      <h4 className="card-title text-primary">
                        Send Transfer Details to CDS
                      </h4>
                      <p className="card-text">
                        <form
                          className="row g-3"
                          onSubmit={(event) => this.onSubmit(event)}
                        >
                          <div className="col-12">
                            <label className="form-label">Account Name</label>
                            <input
                              onChange={(event) => {
                                this.myAccountNameHandler(event);
                              }}
                              type="text"
                              className="form-control"
                              value={this.state.accountName}
                            />
                          </div>
                          <div className="col-12">
                            <label className="form-label">
                              Transaction Type
                            </label>
                            <select
                              className="form-select"
                              aria-label="Default select example"
                              value={this.props.formRole}
                              onChange={(event) =>
                                this.props.onChangeRole(event)
                              }
                            >
                              <option selected=""> Select Type</option>
                              <option value="Transfer">Transfer</option>
                              <option value="Cash">Cash</option>
                              <option value="eNaira">eNaira</option>
                              <option value="POS">POS</option>
                              <option value="Bank Transfer">
                                Bank Transfer
                              </option>
                              <option value="Online Transfer">
                                Online Transfer
                              </option>
                              <option value="Wire">Wire</option>
                              <option value="Western Union">
                                Western Union
                              </option>
                              <option value="MoneyGram">MoneyGram</option>
                              <option value="Other">Other</option>
                            </select>
                          </div>
                          <div className="col-12">
                            <label className="form-label">
                              Amount (in Naira)
                            </label>
                            <input
                              onChange={(event) => {
                                this.myAmountHandler(event);
                              }}
                              type="number"
                              className="form-control"
                              value={this.state.amount}
                            />
                          </div>
                          <div className="col-6">
                            <label className="form-label">Transfer Date</label>
                            <DatePicker
                              selected={this.state.date}
                              onSelect={(date) => this.setStartDate(date)}
                              onChange={(date) => this.setStartDate(date)}
                            />
                          </div>
                        </form>
                      </p>
                      <button className="btn btn-md btn-primary" type="button">
                        Send to CDS
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-auto text-center flex-column d-none d-sm-flex">
                  <div className="row h-50">
                    <div className="col border-end">&nbsp;</div>
                    <div className="col">&nbsp;</div>
                  </div>
                  <h5 className="m-2">
                    <span className="badge rounded-pill bg-light border">
                      &nbsp;
                    </span>
                  </h5>
                  <div className="row h-50">
                    <div className="col border-end">&nbsp;</div>
                    <div className="col">&nbsp;</div>
                  </div>
                </div>
                <div className="col py-2">
                  <div className="card radius-15">
                    <div className="card-body">
                      <h4 className="card-title">
                        Step 3 Wait For Confirmation
                      </h4>
                      <p>Wait For Confirmation Mail via Email or SMS</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <hr />
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

export default Fund;
