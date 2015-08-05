import React from 'react';
import style from '../../styles/Description.less'; // eslint-disable-line

let Description = React.createClass({

  render() {
    return (
        <p className="namecatalog">{this.props.sku.description}</p>
    );
  }
});

export default Description;
