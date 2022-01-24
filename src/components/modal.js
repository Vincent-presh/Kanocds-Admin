import React from "react";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let ifEmailEditable = this.props.title === "Edit User" ? true : false;
    return (
      <div
        className="modal fade"
        id={this.props.id}
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {this.props.title}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="row g-3">
                <div className="col-12">
                  <label className="form-label">User Email</label>
                  <input
                    onChange={(event) => this.props.onChangeEmail(event)}
                    type="email"
                    className="form-control"
                    value={this.props.formEmail}
                    disabled={ifEmailEditable}
                  />
                </div>
                <div className="col-12">
                  <label className="form-label">Role</label>
                  <select
                    className="form-select mb-3"
                    aria-label="Default select example"
                    value={this.props.formRole}
                    onChange={(event) => this.props.onChangeRole(event)}
                  >
                    <option selected=""> Select Role</option>
                    <option value="1">Operator</option>
                    <option value="2">Agent</option>
                  </select>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                onClick={(e) => {
                  this.props.onSubmit(e);
                }}
                type="button"
                className="btn btn-primary"
              >
                Invite User
              </button>
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

export default Modal;
