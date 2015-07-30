import React from 'react';
import style from '../../styles/AddCart.less'; // eslint-disable-line

let Delete = React.createClass({
  delClick() {
    console.log('Produto excluido');
  },

    render() {
      return (
        <div className="col-xs-4">
          <button type="button"
          className="btn btn-danger buttons glyphicon btn btn-default col-xs-5 buttom"
          onClick={this.delClick}>
            X
          </button>
        </div>
      );
    }
  });

export default Delete;
