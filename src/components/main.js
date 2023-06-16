import React from "react";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: "someValue",
    };
  }

  render() {
    return (
      <div className="page-content">
        <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-2 row-cols-xxl-4">
          <div className="col">
            <div className="card overflow-hidden radius-10">
              <div className="card-body">
                <div className="d-flex align-items-stretch justify-content-between overflow-hidden">
                  <div className="w-50">
                    <p>Wallet Balance</p>
                    <h4 className="">8,542</h4>
                  </div>
                  <div className="w-50">
                    <p className="mb-3 float-end text-success">
                      + 16% <i className="bi bi-arrow-up"></i>
                    </p>
                    <div id="chart1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card overflow-hidden radius-10">
              <div className="card-body">
                <div className="d-flex align-items-stretch justify-content-between overflow-hidden">
                  <div className="w-50">
                    <p>Unicard Used</p>
                    <h4 className="">12.5M</h4>
                  </div>
                  <div className="w-50">
                    <p className="mb-3 float-end text-danger">
                      - 3.4% <i className="bi bi-arrow-down"></i>
                    </p>
                    <div id="chart2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card overflow-hidden radius-10">
              <div className="card-body">
                <div className="d-flex align-items-stretch justify-content-between overflow-hidden">
                  <div className="w-50">
                    <p>Revenue</p>
                    <h4 className="">$64.5K</h4>
                  </div>
                  <div className="w-50">
                    <p className="mb-3 float-end text-success">
                      + 24% <i className="bi bi-arrow-up"></i>
                    </p>
                    <div id="chart3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card overflow-hidden radius-10">
              <div className="card-body">
                <div className="d-flex align-items-stretch justify-content-between overflow-hidden">
                  <div className="w-50">
                    <p>Unicard Printed</p>
                    <h4 className="">8K</h4>
                  </div>
                  <div className="w-50">
                    <p className="mb-3 float-end text-success">
                      + 8.2% <i className="bi bi-arrow-up"></i>
                    </p>
                    <div id="chart4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-lg-12 col-xl-12 d-flex">
            <div className="card radius-10 w-100">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <h6 className="mb-0">Recent Vouchers</h6>
                  <div className="fs-5 ms-auto dropdown">
                    <div
                      className="dropdown-toggle dropdown-toggle-nocaret cursor-pointer"
                      data-bs-toggle="dropdown"
                    >
                      <i className="bi bi-three-dots"></i>
                    </div>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="table-responsive mt-2">
                  <table className="table align-middle mb-0">
                    <thead className="table-light">
                      <tr>
                        <th>Batch ID</th>
                        <th>Description</th>
                        <th>Unit Quantity</th>
                        <th>Price</th>
                        <th>Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>#89742</td>
                        <td>
                          <div className="d-flex align-items-center gap-3">
                            <div className="product-info">
                              <h6 className="product-name mb-1">
                                Smart Mobile Phone
                              </h6>
                            </div>
                          </div>
                        </td>
                        <td>2</td>
                        <td>$214</td>
                        <td>Apr 8, 2021</td>
                      </tr>
                      <tr>
                        <td>#68570</td>
                        <td>
                          <div className="d-flex align-items-center gap-3">
                            <div className="product-info">
                              <h6 className="product-name mb-1">
                                Sports Time Watch
                              </h6>
                            </div>
                          </div>
                        </td>
                        <td>1</td>
                        <td>$185</td>
                        <td>Apr 9, 2021</td>
                      </tr>
                      <tr>
                        <td>#38567</td>
                        <td>
                          <div className="d-flex align-items-center gap-3">
                            <div className="product-info">
                              <h6 className="product-name mb-1">
                                Women Red Heals
                              </h6>
                            </div>
                          </div>
                        </td>
                        <td>3</td>
                        <td>$356</td>
                        <td>Apr 10, 2021</td>
                      </tr>
                      <tr>
                        <td>#48572</td>
                        <td>
                          <div className="d-flex align-items-center gap-3">
                            <div className="product-info">
                              <h6 className="product-name mb-1">
                                Yellow Winter Jacket
                              </h6>
                            </div>
                          </div>
                        </td>
                        <td>1</td>
                        <td>$149</td>
                        <td>Apr 11, 2021</td>
                      </tr>
                      <tr>
                        <td>#96857</td>
                        <td>
                          <div className="d-flex align-items-center gap-3">
                            <div className="product-info">
                              <h6 className="product-name mb-1">
                                Orange Micro Headphone
                              </h6>
                            </div>
                          </div>
                        </td>
                        <td>2</td>
                        <td>$199</td>
                        <td>Apr 15, 2021</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.setState({
      someKey: "otherValue",
    });
  }
}

export default Main;
