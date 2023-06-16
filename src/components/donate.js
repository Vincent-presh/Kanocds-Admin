import axios from "axios";
import React from "react";
import Select from "react-select";
import { WEB_BASE_URL } from "./webbase";

class Donate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      country: "",
      name: "",
      state: "",
      phone: "",
      amount: "",
      lgas: "",
      locationOptions: [
        { value: "Merchant", label: "Merchant" },
        { value: "Agent", label: "Agent" },
      ],
      countryOptions: [],
      statesOptions: [],
      lgasOptions: [],
      history: this.props.history,
    };

    //bind
    this.getCountryOptions = this.getCountryOptions.bind(this);
    this.myCountryHandler = this.myCountryHandler.bind(this);
    this.myStateHandler = this.myStateHandler.bind(this);
    this.myLgaHandler = this.myLgaHandler.bind(this);
  }

  myCountryHandler = (selectedOption) => {
    this.setState({ country: selectedOption.value });
    this.getStateOptions(selectedOption.value);
  };

  myStateHandler = (selectedOption) => {
    this.setState({ state: selectedOption.value });
    this.getLgaOptions(selectedOption.value);
  };

  myLgaHandler = (selectedOption) => {
    this.setState({ lgas: selectedOption.value });
  };

  getCountryOptions() {
    axios
      .get(WEB_BASE_URL + "/user/getCountries.php")
      .then((res) => {
        let countries = [];
        console.log(res.data);
        for (let country in res.data) {
          countries.push({
            value: res.data[country].name,
            label: res.data[country].name,
          });
        }

        this.setState({ countryOptions: countries });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getStateOptions(country) {
    if (country === "Nigeria") {
      axios
        .get(WEB_BASE_URL + "/user/getStates.php?country_id=" + country)
        .then((res) => {
          if (res.data.status === "success") {
            let states = [];

            for (let state in res.data.states) {
              states.push({
                value: res.data.states[state].name,
                label: res.data.states[state].name,
              });
            }

            this.setState({ statesOptions: states });
          } else {
            console.log(res);
            this.setState({
              statesOptions: [{ value: "No State", label: "No State" }],
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      this.setState({
        statesOptions: [{ value: "No State", label: "No State" }],
      });
    }
  }

  getLgaOptions(state) {
    if (this.state.country === "Nigeria") {
      console.log(state);
      axios
        .get(WEB_BASE_URL + "/user/getlocalGa.php?state_id=" + state)
        .then((res) => {
          if (res.data.status === "success") {
            let lgas = [];
            for (let lga in res.data.lgas) {
              lgas.push({
                value: res.data.lgas[lga].name,
                label: res.data.lgas[lga].name,
              });
            }

            this.setState({ lgasOptions: lgas });
          } else {
            this.setState({
              lgasOptions: [{ value: "No LGA", label: "No LGA" }],
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  myAmountHandler = (event) => {
    this.setState({ amount: event.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    //user from state
    const user = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      country: this.state.country,
      state: this.state.state,
      lga: this.state.lgas,
      phone: this.state.phone,
    };

    console.log(user);
  };

  componentDidMount() {
    this.getCountryOptions();
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
                  <div className="col-lg-6 d-flex align-items-center justify-content-center">
                    <img
                      src="assets/images/kanocds.png"
                      class="img-fluid"
                      alt=""
                      style={{ maxWidth: "50%" }}
                    />
                  </div>
                  <div className="col-lg-6">
                    <div className="card-body p-4 p-sm-5">
                      <h5 className="card-title">Donate</h5>
                      <p className="card-text mb-2">Lend a helping Hand!!</p>
                      <form
                        className="form-body"
                        onSubmit={(event) => {
                          this.onSubmit(event);
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
                                id="inputName"
                                placeholder="Enter Name"
                                onChange={(event) => {
                                  this.setState({ name: event.target.value });
                                }}
                                value={this.state.name}
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
                                id="inputMerchantName"
                                placeholder="Phone Number"
                                value={this.state.phone}
                                onChange={(event) => {
                                  this.setState({ phone: event.target.value });
                                }}
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
                                onChange={(event) => {
                                  this.setState({ email: event.target.value });
                                }}
                              />
                            </div>
                          </div>
                          <div className="col-12 ">
                            <div className="ms-auto position-relative">
                              <div className="position-absolute top-50 translate-middle-y search-icon px-3">
                                <i className="bi bi-cash"></i>
                              </div>
                              <input
                                type="text"
                                className="form-control radius-30 ps-5"
                                id="inputMerchantName"
                                placeholder="Amount to donate (in NGN)"
                                value={this.state.amount}
                                onChange={(event) => {
                                  this.setState({ amount: event.target.value });
                                }}
                              />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="ms-auto position-relative">
                              <div className="col-6">
                                <Select
                                  onChange={this.myCountryHandler}
                                  options={this.state.countryOptions}
                                  styles={customStyles}
                                  width="50%"
                                  placeholder="Country"
                                  borderRadius="17px"
                                />
                              </div>
                              <div className="col-6 mt-3">
                                <Select
                                  onChange={this.myStateHandler}
                                  options={this.state.statesOptions}
                                  styles={customStyles}
                                  width="50%"
                                  placeholder="State"
                                  borderRadius="17px"
                                />
                              </div>
                              <div className="col-6 mt-3">
                                <Select
                                  onChange={this.myLgaHandler}
                                  options={this.state.lgasOptions}
                                  styles={customStyles}
                                  width="50%"
                                  placeholder="LGA"
                                  borderRadius="17px"
                                />
                              </div>
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
                                I Agree to the{" "}
                                <a href="/terms-conditions">
                                  Terms & Conditions
                                </a>
                              </label>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="d-grid">
                              <button
                                type="submit"
                                className="btn btn-primary radius-30"
                              >
                                Donate
                              </button>
                            </div>
                          </div>
                          <div className="col-12">
                            <p className="mb-0">
                              Already have an account?{" "}
                              <a href="/signIn">Log In</a>
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
}

export default Donate;
