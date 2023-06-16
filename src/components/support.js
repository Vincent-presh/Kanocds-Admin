import React from "react";

class Support extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: "someValue",
    };
  }

  render() {
    return (
      <main className="page-content">
        <div className="card bg-transparent shadow-none">
          <div className="card-body">
            <h6 className="mb-0 text-uppercase">Support Lines</h6>
            <div className="my-3 border-top"></div>
            <div className="row row-cols-1 row-cols-lg-2 justify-content-center g-lg-5">
              <div className="col">
                <div className="card">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src="assets/images/gallery/60.png"
                        alt="..."
                        className="card-img"
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">Abba</h5>
                        <p className="card-text">
                          Voice and SMS
                        </p>
                        <p className="card-text">
                          <small className="text-muted">08136784544</small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src="assets/images/gallery/60.png"
                        alt="..."
                        className="card-img "
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">Ibrahim</h5>
                        <p className="card-text">Voice and SMS</p>
                        <p className="card-text">
                          <small className="text-muted">08136784544</small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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

export default Support;
