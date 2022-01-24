import React from "react";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      history: this.props.history,
    };
  }
  render() {
    return (
      <div class="">
        <main class="authentication-content">
          <div class="container-fluid">
            <div class="authentication-card">
              <div class="card shadow rounded-0 overflow-hidden">
                <div class="row g-0">
                  <div class="col-lg-6 bg-login d-flex align-items-center justify-content-center">
                    <img
                      src="assets/images/error/login-img.png"
                      class="img-fluid"
                      alt=""
                    />
                  </div>
                  <div class="col-lg-6">
                    <div class="card-body p-4 p-sm-5">
                      <h5 class="card-title">Sign In</h5>
                      <p class="card-text mb-5">Login to to get started!</p>
                      <form
                        class="form-body"
                        onSubmit={(event) => {
                          event.preventDefault();
                          this.state.history.push("/");
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
                              />
                            </div>
                          </div>
                          <div class="col-12">
                            <div class="ms-auto position-relative">
                              <div class="position-absolute top-50 translate-middle-y search-icon px-3">
                                <i class="bi bi-lock-fill"></i>
                              </div>
                              <input
                                type="password"
                                class="form-control radius-30 ps-5"
                                id="inputChoosePassword"
                                placeholder="Enter Password"
                                required={true}
                              />
                            </div>
                          </div>
                          <div class="col-6">
                            <div class="form-check form-switch">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                id="flexSwitchCheckChecked"
                                checked=""
                              />
                              <label
                                class="form-check-label"
                                for="flexSwitchCheckChecked"
                              >
                                Remember Me
                              </label>
                            </div>
                          </div>
                          <div class="col-6 text-end">
                            {" "}
                            <a href="forgot-password.html">Forgot Password ?</a>
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
                          <div class="col-12">
                            <p class="mb-0">
                              Don't have an account yet?{" "}
                              <a href="/signUp">Sign up here</a>
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

export default SignIn;
