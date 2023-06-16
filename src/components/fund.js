import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class Fund extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: "someValue",
    };
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
                    <div className="card-body">
                      <h4 className="card-title text-muted">
                        Step 1 Make Transfer to CDS Bank Account
                      </h4>
                      <hr />
                      <p className="card-text">
                        Make Payment to CDS Bank Account below:
                      </p>
                      <p className="card-text">
                        Account Name: <i>KANOCDS</i>
                      </p>
                      <p className="card-text">
                        Account Number: <i>0098675635</i> Wema Bank
                      </p>
                      <p className="card-text">Bank Name: Wema Bank</p>
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
                        <form className="row g-3">
                          <div className="col-12">
                            <label className="form-label">Account Name</label>
                            <input
                              onChange={(event) => {}}
                              type="text"
                              className="form-control"
                              value={""}
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
                              onChange={(event) => {}}
                              type="number"
                              className="form-control"
                              value={""}
                            />
                          </div>
                          <div className="col-6">
                            <label className="form-label">Transfer Date</label>
                            <DatePicker
                              selected={this.state.endDate}
                              onSelect={(date) => this.setEndDate(date)}
                              onChange={(date) => this.setEndDate(date)}
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
