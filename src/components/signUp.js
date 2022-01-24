import React from "react";
import Select from "react-select";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      locationOptions: [
        { value: "Merchant", label: "Merchant" },
        { value: "Agent", label: "Agent" },
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
                  <div className="col-lg-6 bg-login d-flex align-items-center justify-content-center">
                    <img
                      src="assets/images/error/login-img.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="col-lg-6">
                    <div className="card-body p-4 p-sm-5">
                      <h5 className="card-title">Sign Up</h5>
                      <p className="card-text mb-5">Register to get started!</p>
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
                                <i className="bi bi-person-circle"></i>
                              </div>
                              <input
                                type="text"
                                className="form-control radius-30 ps-5"
                                id="inputMerchantName"
                                placeholder="Merchant Name"
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
                                placeholder="Enter Name"
                              />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="ms-auto position-relative">
                              <div className="position-absolute top-50 translate-middle-y search-icon px-3">
                                <i className="bi bi-envelope-fill"></i>
                              </div>
                              <input
                                type="email"
                                className="form-control radius-30 ps-5"
                                id="inputEmailAddress"
                                placeholder="Email Address"
                              />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="ms-auto position-relative">
                              <div className="position-absolute top-50 translate-middle-y search-icon px-3">
                                <i className="bi bi-envelope-fill"></i>
                              </div>
                              <Select
                                onChange={this.myRoleHandler}
                                options={this.state.locationOptions}
                                styles={customStyles}
                                width="100%"
                                placeholder="Register As..."
                                borderRadius="17px"
                              />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="ms-auto position-relative">
                              <div className="position-absolute top-50 translate-middle-y search-icon px-3">
                                <i className="bi bi-lock-fill"></i>
                              </div>
                              <input
                                type="password"
                                className="form-control radius-30 ps-5"
                                id="inputChoosePassword"
                                placeholder="Enter Password"
                              />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="ms-auto position-relative">
                              <div className="position-absolute top-50 translate-middle-y search-icon px-3">
                                <i className="bi bi-lock-fill"></i>
                              </div>
                              <input
                                type="password"
                                className="form-control radius-30 ps-5"
                                id="inputChoosePassword"
                                placeholder="Confirm Password"
                              />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-check form-switch">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="flexSwitchCheckChecked"
                              />
                              <label
                                className="form-check-label"
                                for="flexSwitchCheckChecked"
                              >
                                I Agree to the Trems & Conditions
                              </label>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="d-grid">
                              <button
                                type="submit"
                                className="btn btn-primary radius-30"
                              >
                                Sign Up
                              </button>
                            </div>
                          </div>
                          <div className="col-12">
                            <p className="mb-0">
                              Already have an account?{" "}
                              <a href="/signIn">Sign in here</a>
                            </p>
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

export default SignUp;
