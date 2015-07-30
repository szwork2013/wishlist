import React from 'react';
import style from '../../styles/AddCart.less'; // eslint-disable-line

let Delete = React.createClass({
  delClick() {
    console.log('Produto excluido');
  },

    render() {
      return (
        <div className="col-xs-6">
          <div className="col-xs-8"></div>
          <button type="button"
          className=" col-xs-4 right-block btn btn-danger buttons glyphicon glyphicon-remove col-xs-5 buttom"
          onClick={this.delClick}></button>
        </div>
      );
    }
  });

export default Delete;
