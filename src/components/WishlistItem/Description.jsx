import React from 'react';

let Description = React.createClass({

  render() {
    return (
      <div>
        <p className="col-xs-8 namecatalog">{this.props.sku.description}</p>
      </div>
    );
  }
});

export default Description;
