import axios from "axios";
import React from "react";
import DatePicker from "react-datepicker";
import Select from "react-select";
import { WEB_BASE_URL } from "./webbase";
import { toast, ToastContainer } from "react-toastify";
import qs from "qs";

class Complete extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      history: this.props.history,
      user: this.props.history.location.state,
      otp: "",
      contributor: "",
      contribution: "",
      gender: "",
      age: "",
      affiliated: "",
      date: new Date(),
      associationOptions: [],
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
    };

    //bind Function
    this.onSubmit = this.onSubmit.bind(this);
    this.setStartDate = this.setStartDate.bind(this);
    this.myContributionHandler = this.myContributionHandler.bind(this);
    this.myAgeHandler = this.myAgeHandler.bind(this);
    this.myGenderHandler = this.myGenderHandler.bind(this);
    console.log(this.state.user);
  }
  setStartDate(date) {
    this.setState({
      date: date,
    });
  }

  getAffAssociationOptions() {
    axios
      .get(WEB_BASE_URL + "/user/getAffAssociation.php")
      .then((res) => {
        let associations = [];
        console.log(res.data);
        associations.push({
          value: "None",
          label: "None",
        });
        for (let association in res.data) {
          associations.push({
            value: res.data[association].name,
            label: res.data[association].name,
          });
        }

        this.setState({ associationOptions: associations });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  myContributorHandler = (selectedOption) => {
    this.setState({
      contributor: selectedOption.value,
    });
  };
  myAgeHandler = (selectedOption) => {
    this.setState({
      age: selectedOption.value,
    });
  };

  myContributionHandler = (selectedOption) => {
    this.setState({
      contribution: selectedOption.value,
    });
  };

  myGenderHandler = (selectedOption) => {
    this.setState({
      gender: selectedOption.value,
    });
  };

  myAssociationHandler = (selectedOption) => {
    this.setState({
      affiliated: selectedOption.value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    const id = toast.loading("Please wait...");
    const user_e = {
      name: this.state.user.name,
      phone: this.state.user.phone,
      email: this.state.user.email,
      password: this.state.user.password,
      country: this.state.user.country,
      state: this.state.user.state,
      lga: this.state.user.lga,
      association: this.state.affiliated,
      otp: this.state.otp,
      contributor_type: this.state.contributor,
      contributor_frequency: this.state.contribution,
      age_group: this.state.age,
      gender: this.state.gender,
    };
    axios
      .post(
        WEB_BASE_URL + "/user/signUp.php",
        qs.stringify({
          name: this.state.user.name,
          phone: this.state.user.phone,
          email: this.state.user.email,
          password: this.state.user.password,
          country: this.state.user.country,
          state: this.state.user.state,
          lga: this.state.user.lga,
          association: this.state.affiliated,
          otp: this.state.otp,
          contributor_type: this.state.contributor,
          contributor_frequency: this.state.contribution,
          age_group: this.state.age,
          gender: this.state.gender,
        })
      )
      .then((res) => {
        console.log(res);
        if (res.data.status === "success") {
          toast.update(id, {
            render: "User Registered Successfully",
            type: "Success",
            isLoading: false,
          });
          setTimeout(() => {
            toast.dismiss(id);
          }, 3000);
        } else {
          toast.update(id, {
            render: "Error while registering User",
            type: "error",
            isLoading: false,
          });
          setTimeout(() => {
            toast.dismiss(id);
          }, 3000);
        }
      });
  };

  componentDidMount() {
    this.getAffAssociationOptions();
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
                          this.onSubmit(event);
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
                                required={true}
                                onChange={(event) => {
                                  this.setState({
                                    otp: event.target.value,
                                  });
                                }}
                              />
                            </div>
                          </div>
                          <div className="col-12 ">
                            <div className="ms-auto position-relative">
                              <div className="col-12">
                                <Select
                                  onChange={this.myAssociationHandler}
                                  options={this.state.associationOptions}
                                  styles={customStyles}
                                  width="100%"
                                  placeholder="Affliated Associations"
                                  borderRadius="17px"
                                  required={true}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="ms-auto position-relative">
                              <div className="col-12">
                                <Select
                                  onChange={this.myContributorHandler}
                                  options={this.state.represent}
                                  styles={customStyles}
                                  width="100%"
                                  placeholder="Contributor Type"
                                  borderRadius="17px"
                                  required={true}
                                />
                              </div>
                              <div className="col-12 mt-3">
                                <Select
                                  onChange={this.myContributionHandler}
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
                                  required={true}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="ms-auto position-relative">
                              <div className="col-12">
                                <Select
                                  onChange={this.myGenderHandler}
                                  options={[
                                    { value: "Male", label: "Male" },
                                    { value: "Female", label: "Female" },
                                  ]}
                                  styles={customStyles}
                                  width="100%"
                                  placeholder="Gender"
                                  borderRadius="17px"
                                  required={true}
                                />
                              </div>
                              <div className="col-12 mt-3">
                                <Select
                                  onChange={this.myAgeHandler}
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
                                  required={true}
                                />
                              </div>
                            </div>
                          </div>

                          <div className="col-12">
                            <label className="form-label">
                              Effective Date:
                            </label>
                            <DatePicker
                              selected={this.state.date}
                              onSelect={(date) => this.setStartDate(date)}
                              onChange={(date) => this.setStartDate(date)}
                              minDate={new Date()}
                              placeholderText="Effective Date"
                              required={true}
                            />
                          </div>
                          <div className="col-12">
                            <div className="form-check form-switch">
                              <label
                                className="form-check-label"
                                for="flexSwitchCheckChecked"
                              >
                                I Agree to the{" "}
                                <a href="/terms-conditions">
                                  Terms & Conditions
                                </a>
                                <br />
                                <input
                                  style={{ marginLeft: "0px" }}
                                  className="form-check-input"
                                  type="checkbox"
                                  id="flexSwitchCheckChecked"
                                  required={true}
                                  onChange={(event) => {
                                    this.setState({
                                      checked: event.target.checked,
                                    });
                                  }}
                                />
                              </label>
                            </div>
                          </div>

                          <div className="col-12">
                            <div className="d-grid">
                              <button
                                type="submit"
                                className="btn btn-primary radius-30"
                                disabled={!this.state.checked}
                              >
                                Register
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
}

export default Complete;
