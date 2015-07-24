import React from 'react';

let Description = React.createClass({

  render() {
    return (
      <div className="col-xs-4 ">
        <p className="text-center navbar-brand">{this.props.sku.description}</p>
      </div>
    );
  }
});

export default Description;
