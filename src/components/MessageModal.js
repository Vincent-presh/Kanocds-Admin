import React from "react";

class MessageModal extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: "someValue",
      message: "",
      subject: "",
    };
  }

  render() {
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
                    type="email"
                    className="form-control"
                    value={this.props.formEmail}
                    disabled={true}
                  />
                </div>
                <div className="col-12">
                  <label className="form-label">Subject</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={e => {
                      this.setState({
                        subject: e.target.value,
                      })
                    }}
                  />
                </div>

                <div className="col-12">
                  <label className="form-label">Message</label>
                  <textarea
                    type="text"
                    className="form-control"
                    onChange={e => {
                      this.setState({
                        message: e.target.value,
                      })
                    }}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                onClick={(e) => {
                  this.props.onSubmit(this.props.formEmail, this.state.subject, this.state.message);
                }}
                type="button"
                className="btn btn-primary"
              >
                Send message
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

export default MessageModal;
