import React, { Component, Fragment } from "react";

export class ErrorBound extends Component {
  state = {
    hasError: false
  };

  componentDidCatch(error, info) {
    console.log("helloooooooo");
    this.setState({
      hasError: true
    });
  }

  onClickErrorDismiss = () => {
    this.setState({
      hasError: false
    });
  };

  render() {
    return (
      <Fragment>
        {this.state.hasError && (
          <div className="my-modal">
            <div className="my-modal__content">
              <h3>Galat!, terjadi kesalahan</h3>
              <p>More info</p>
            </div>
          </div>
        )}

        {this.props.children}
      </Fragment>
    );
  }
}

export default ErrorBound;
