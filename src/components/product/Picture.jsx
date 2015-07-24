import React from 'react';

let Picture = React.createClass({

  render() {
    return (
      <div className="col-xs-4 navbar-form navbar-right row container-fluid">
        <button type="button"
        className="btn btn-success"
        onClick={this.handleClick}>
          Pic
        </button>
      </div>
    );
  }
});

export default Picture;
