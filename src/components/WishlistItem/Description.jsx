import React from 'react';
import '../../styles/Description.less';

let Description = React.createClass({

  render() {
    return (
        <p className="namecatalog">{this.props.sku.description}</p>
    );
  }
});

export default Description;
