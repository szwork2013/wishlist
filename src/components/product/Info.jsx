import React from 'react';

let Info = React.createClass({
  getId: function(sku){
    return sku.id;
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
