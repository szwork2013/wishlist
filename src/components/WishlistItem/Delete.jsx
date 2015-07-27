import React from 'react';

let Delete = React.createClass({
  delClick() {
    console.log('Produto excluido');
  },

    render() {
      return (
        <div className="col-xs-4 navbar-form row container-fluid">
          <button type="button"
          className="btn btn-danger"
          onClick={this.delClick}>
            X
          </button>
        </div>
      );
    }
  });

export default Delete;
