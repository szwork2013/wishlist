import React from 'react';
import ProductActions from './ProductActions';

let Info = React.createClass({
  getId: function() {
    var id = this.return this.map(sku, 'id');
  },
  render() {
    return (
      <div className="col-xs-4 ">
        <input ref ={this.getId}/>
      </div>
    );
  }
});

export default Info;
