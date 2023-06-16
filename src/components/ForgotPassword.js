import React from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import cookie from "react-cookies";
import { WEB_BASE_URL } from "./webbase";
import qs from "qs";

class ForgotPassword extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      history: this.props.history,
      formEmail: "",
      formPassword: "",
    };

    //bind all events
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
  }

  onChangeEmail = (event) => {
    this.setState({
      formEmail: event.target.value,
    });
  };

  onChangePassword = (event) => {
    this.setState({
      formPassword: event.target.value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    const id = toast.loading("Please wait...");

    //axios post to sign in
    axios
      .post(
        WEB_BASE_URL +
        "/admin/reset-password.php", qs.stringify({
          email: this.state.formEmail,
        })
      )
      .then((res) => {

        if (res.data.status === "success") {
          toast.update(id, {
            render: "New Password sent to your email",
            type: "success",
            isLoading: false,
          });
          setTimeout(() => this.state.history.push("/signIn"), 2000);
        } else {
          console.log(res);
          toast.update(id, {
            render: "Invalid Credentials",
            type: "error",
            isLoading: false,
          });
          setTimeout(() => {
            toast.dismiss(id);
          }, 2000);
        }
      })
      .catch((err) => {
        toast.update(id, {
          render: "" + err,
          type: "error",
          isLoading: false,
        });
        console.log(err)
        setTimeout(() => {
          toast.dismiss(id);
        }, 2000);
      });
  };

  render() {
    return (
      <div class="">
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
        <main class="authentication-content">
          <div class="container-fluid">
            <div class="authentication-card">
              <div class="card shadow rounded-0 overflow-hidden">
                <div class="row g-0">
                  <div class="col-lg-6 d-flex align-items-center justify-content-center">
                    <img
                      src="assets/images/kanocds.png"
                      class="img-fluid"
                      alt=""
                      style={{ maxWidth: "50%" }}
                    />
                  </div>
                  <div class="col-lg-6">
                    <div class="card-body p-4 p-sm-5">
                      <h5 class="card-title">Forgot your password?</h5>
                      <p class="card-text mb-2">Enter your Email Address</p>
                      <p class="card-text mb-3">We will generate a new password that will be sent to your mail and saved permanently!! </p>
                      <form
                        class="form-body"
                        onSubmit={(event) => {
                          event.preventDefault();
                          this.onSubmit(event);
                        }}
                      >
                        <div class="row g-3">
                          <div class="col-12">
                            <div class="ms-auto position-relative">
                              <div class="position-absolute top-50 translate-middle-y search-icon px-3">
                                <i class="bi bi-envelope-fill"></i>
                              </div>
                              <input
                                type="email"
                                class="form-control radius-30 ps-5"
                                id="inputEmailAddress"
                                placeholder="Email Address"
                                required={true}
                                onChange={this.onChangeEmail}
                              />
                            </div>
                          </div>

                          <div class="col-12">
                            <div class="d-grid">
                              <button
                                type="submit"
                                class="btn btn-primary radius-30"
                              >
                                Get New Password
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

  componentDidMount() { }
}

export default ForgotPassword;
