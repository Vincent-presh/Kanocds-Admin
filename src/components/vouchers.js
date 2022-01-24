import React from "react";

class Vouchers extends React.Component {
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
                  View Vouchers
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

        <div class="card">
          <div class="card-header py-3">
            <div class="row g-3">
              <div class="col-lg-3 col-md-6 me-auto">
                <div class="ms-auto position-relative">
                  <div class="position-absolute top-50 translate-middle-y search-icon px-3">
                    <i class="bi bi-search"></i>
                  </div>
                  <input
                    class="form-control ps-5"
                    type="text"
                    placeholder="Search Payment"
                  />
                </div>
              </div>
              <div class="col-lg-2 col-6 col-md-3">
                <select class="form-select">
                  <option>Status</option>
                  <option>Active</option>
                  <option>Disabled</option>
                  <option>Pending</option>
                  <option>Show All</option>
                </select>
              </div>
              <div class="col-lg-2 col-6 col-md-3">
                <select class="form-select">
                  <option>Show 10</option>
                  <option>Show 30</option>
                  <option>Show 50</option>
                </select>
              </div>
            </div>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table align-middle mb-0">
                <thead class="table-light">
                  <tr>
                    <th>Batch ID</th>
                    <th>Description</th>
                    <th>Units</th>
                    <th>Unit Amount</th>
                    <th>Status</th>
                    <th>Created On </th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>#8562</td>
                    <td>
                      <div class="d-flex align-items-center gap-3 cursor-pointer">
                        <div class="">
                          <p class="mb-0">Thomas Hardy</p>
                        </div>
                      </div>
                    </td>
                    <td>4</td>
                    <td>$854.00</td>
                    <td>
                      <span class="badge rounded-pill alert-success">
                        Not Used
                      </span>
                    </td>

                    <td>14 Apr 2020</td>
                    <td>
                      <div class="d-flex align-items-center gap-3 fs-6">
                        <a
                          href="javascript:;"
                          class="text-primary"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="Activate"
                          data-bs-original-title="View detail"
                          aria-label="Views"
                        >
                          <i class="bi bi-collection-play-fill"></i>
                        </a>

                        <a
                          href="javascript:;"
                          class="text-success"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title=""
                          data-bs-original-title="Download"
                          aria-label="Download"
                        >
                          <i class="bi bi-cloud-arrow-down-fill"></i>
                        </a>
                        <a
                          href="javascript:;"
                          class="text-danger"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="Block"
                          data-bs-original-title="Delete"
                          aria-label="Delete"
                        >
                          <i class="bi bi-stop-circle-fill"></i>
                        </a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <nav class="float-end mt-3">
              <ul class="pagination">
                <li class="page-item disabled">
                  <a class="page-link" href="#">
                    Previous
                  </a>
                </li>
                <li class="page-item active">
                  <a class="page-link" href="#">
                    1
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    2
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    3
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
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

export default Vouchers;
