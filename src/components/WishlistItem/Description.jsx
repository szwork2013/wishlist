import React from 'react';

let Description = React.createClass({

  render() {
    return (
      <div>
        <p className="text-center navbar-form">{this.props.sku.description}</p>
      </div>
    );
  }
});

export default Description;
