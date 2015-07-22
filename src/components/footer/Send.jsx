import React from 'react';

let Buy = React.createClass({
  handleClick() {
    console.log('vai enviar nada não');
  },

  render() {
    return (
      <div className="col-xs-4 navbar-form navbar-left row container-fluid">
        <button type="button"
        className="btn btn-info"
        onClick={this.handleClick}>
          Enviar essa lista
        </button>
      </div>
    );
  }
});

export default Buy;
