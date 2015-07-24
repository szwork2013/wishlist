import React from 'react';

let Delete = React.createClass({
  delClick() {
    console.log('Produto excluido');
  },

    render() {
      return (
        <div className="col-xs-4 navbar-form navbar-right row container-fluid">
          <button type="button"
          className="btn btn-success"
          onClick={this.handleClick}>
            X
          </button>
        </div>
      );
    }
  });

export default Delete;
