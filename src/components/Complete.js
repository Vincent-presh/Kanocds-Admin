import React from "react";
import DatePicker from "react-datepicker";
import Select from "react-select";

class Complete extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      locationOptions: [
        { value: "Merchant", label: "Merchant" },
        { value: "Agent", label: "Agent" },
      ],
      represent: [
        { value: "Individual", label: "Individual" },
        { value: "Family", label: "Family" },
        { value: "Association", label: "Association" },
        { value: "Government", label: " Government" },
        { value: "NGO", label: "NGO" },
        { value: "Corporate", label: "Corporate" },
      ],
      history: this.props.history,
    };
  }

  render() {
    const customStyles = {
      menu: (provided, state) => ({
        ...provided,
        borderBottom: "1px dotted pink",
        color: state.selectProps.menuColor,
        padding: 20,
      }),

      control: (provided, { selectProps: { width } }) => ({
        ...provided,

        borderRadius: "25px",
        padding: "2px 4px",
        width: width,
        minWidth: "310px",
      }),
    };
    return (
      <div>
        <main className="authentication-content">
          <div className="container-fluid">
            <div className="authentication-card">
              <div className="card shadow rounded-0 overflow-hidden">
                <div className="row g-0">
                  <div className="col-lg-6 bg- d-flex align-items-center justify-content-center">
                    <img
                      src="assets/images/kanocds.png"
                      class="img-fluid"
                      alt=""
                      style={{ maxWidth: "50%" }}
                    />
                  </div>
                  <div className="col-lg-6">
                    <div className="card-body p-4 p-sm-5">
                      <h5 className="card-title">Complete Sign Up</h5>
                      <p className="card-text mb-5">Enter OTP to complete</p>
                      <form
                        className="form-body"
                        onSubmit={(event) => {
                          event.preventDefault();
                          this.state.history.push("/");
                        }}
                      >
                        <div className="row g-3">
                          <div className="col-12 ">
                            <div className="ms-auto position-relative">
                              <div className="position-absolute top-50 translate-middle-y search-icon px-3">
                                <i className="bi bi-key-fill"></i>
                              </div>
                              <input
                                type="text"
                                className="form-control radius-30 ps-5"
                                id="inputMerchantName"
                                placeholder="OTP"
                              />
                            </div>
                          </div>
                          <div className="col-12 ">
                            <div className="ms-auto position-relative">
                              <div className="position-absolute top-50 translate-middle-y search-icon px-3">
                                <i className="bi bi-person-circle"></i>
                              </div>
                              <input
                                type="text"
                                className="form-control radius-30 ps-5"
                                id="inputName"
                                placeholder="Affiliated Development Association (if any)"
                              />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="ms-auto position-relative">
                              <div className="col-12">
                                <Select
                                  onChange={this.myRoleHandler}
                                  options={this.state.represent}
                                  styles={customStyles}
                                  width="100%"
                                  placeholder="Contributor Type"
                                  borderRadius="17px"
                                />
                              </div>
                              <div className="col-12 mt-3">
                                <Select
                                  onChange={this.myRoleHandler}
                                  options={[
                                    { value: "One Off", label: "One Off" },
                                    { value: "Monthly", label: "Monthly" },
                                    { value: "Quaterly", label: "Quaterly" },
                                    { value: "Yearly", label: "Yearly" },
                                  ]}
                                  styles={customStyles}
                                  width="100%"
                                  placeholder="Contribution Frequency"
                                  borderRadius="17px"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="ms-auto position-relative">
                              <div className="col-12">
                                <Select
                                  onChange={this.myRoleHandler}
                                  options={[
                                    { value: "Male", label: "Male" },
                                    { value: "Female", label: "Female" },
                                  ]}
                                  styles={customStyles}
                                  width="100%"
                                  placeholder="Gender"
                                  borderRadius="17px"
                                />
                              </div>
                              <div className="col-12 mt-3">
                                <Select
                                  onChange={this.myRoleHandler}
                                  options={[
                                    { value: "15-20", label: "15-20" },
                                    { value: "21-30", label: "21-30" },
                                    { value: "31-40", label: "31-40" },
                                    { value: "41-50", label: "41-50" },
                                    { value: "51-60", label: "51-60" },
                                    { value: "61-70", label: "61-70" },
                                    { value: "Over 70", label: "Over 70" },
                                  ]}
                                  styles={customStyles}
                                  width="100%"
                                  placeholder="Age Group"
                                  borderRadius="17px"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="col-12">
                            <label className="form-label">
                              Effective Date:
                            </label>
                            <DatePicker
                              selected={this.state.endDate}
                              onSelect={(date) => this.setEndDate(date)}
                              onChange={(date) => this.setEndDate(date)}
                            />
                          </div>

                          <div className="col-12">
                            <div className="d-grid">
                              <button
                                type="submit"
                                className="btn btn-primary radius-30"
                              >
                                Complete
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  componentDidMount() {}
}

export default Complete;
