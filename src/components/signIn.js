import axios from "axios";
import React from "react";
import cookie from "react-cookies";
import { toast, ToastContainer } from "react-toastify";
import { WEB_BASE_URL } from "./webbase";
import qs from "qs";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      history: this.props.history,
      email: "",
      password: "",
    };

    //bind Function
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = (event) => {
    event.preventDefault();
    const id = toast.loading("Please wait...");

    axios
      .post(
        WEB_BASE_URL + "/admin/login.php",
        qs.stringify({
          email: this.state.email,
          password: this.state.password,
        })
      )
      .then((res) => {
        if (res.data.status === "success") {
          cookie.save("token", res.data.token, {
            path: "/",
            expires: new Date(Date.now() + 60 * 60 * 1000),
          });
          cookie.save("user", res.data.userId, {
            path: "/",
            expires: new Date(Date.now() + 60 * 60 * 1000),
          });

          this.state.history.push("/");
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
        toast.update(id, {
          render: "" + err,
          type: "error",
          isLoading: false,
        });
        console.log(err);
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
                  <div class="col-lg-6  d-flex align-items-center justify-content-center">
                    <img
                      src="assets/images/kanocds.png"
                      class="img-fluid"
                      alt=""
                      style={{ maxWidth: "50%" }}
                    />
                  </div>
                  <div class="col-lg-6">
                    <div class="card-body p-4 p-sm-5">
                      <h5 class="card-title"> ADMIN Sign In</h5>
                      <p class="card-text mb-2">Login to to get started!</p>
                      <form
                        class="form-body"
                        onSubmit={(event) => {
                          this.onSubmit(event);
                        }}
                      >
                        <div class="row g-3">
                          <div class="col-12">
                            <div class="ms-auto position-relative">
                              <div class="position-absolute top-50 translate-middle-y search-icon px-3">
                                <i class="bi bi-person-circle"></i>
                              </div>
                              <input
                                type="email"
                                class="form-control radius-30 ps-5"
                                id="inputEmailAddress"
                                placeholder="Email"
                                required={true}
                                onChange={(event) => {
                                  this.setState({ email: event.target.value });
                                }}
                              />
                            </div>
                          </div>
                          <div class="col-12">
                            <div class="ms-auto position-relative">
                              <div class="position-absolute top-50 translate-middle-y search-icon px-3">
                                <i class="bi bi-key-fill"></i>
                              </div>
                              <input
                                type="password"
                                class="form-control radius-30 ps-5"
                                id="inputChoosePassword"
                                placeholder="Enter Password"
                                required={true}
                                onChange={(event) => {
                                  this.setState({
                                    password: event.target.value,
                                  });
                                }}
                              />
                            </div>
                          </div>
                          <div class="col-6 ">
                            {" "}
                            <a href="/forgot-password">Forgot Password ?</a>
                          </div>
                          <div class="col-12">
                            <div class="d-grid">
                              <button
                                type="submit"
                                class="btn btn-primary radius-30"
                              >
                                Sign In
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

export default SignIn;
