import React from "react";

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
                  Fund Wallet
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

        <div className="">
          <div className="">
            <div className="container py-2">
              <h2
                className="font-weight-light text-left text-muted"
                style={{ paddingLeft: "6.7%" }}
              >
                Fund Your Wallet
              </h2>

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

                <div className="col py-2">
                  <div className="card radius-15">
                    <div className="card-body">
                      <h4 className="card-title text-muted">
                        Step 1 Transfer to Bank Account
                      </h4>
                      <hr />
                      <p className="card-text">
                        Fund your TopUpBox wallet by transferring funds(Naira)
                        via local bank
                      </p>
                      <p className="card-text">
                        <i>0098675635</i> Wema Bank
                      </p>
                      <p className="card-text">
                        Account Name: <i>ZEEDLABS</i>
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
                        Step 2 Fill in Transfer Details
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
                              Amount (in Naira)
                            </label>
                            <input
                              onChange={(event) => {}}
                              type="number"
                              className="form-control"
                              value={""}
                            />
                          </div>
                        </form>
                      </p>
                      <button className="btn btn-sm btn-primary" type="button">
                        Submit For Confirmation
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
                      <p>Wait For Confirmation Mail</p>
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
