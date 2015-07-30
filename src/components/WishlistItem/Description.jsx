import React from 'react';
import style from '../../styles/Description.less'; // eslint-disable-line

let Description = React.createClass({

  render() {
    return (
        <p className="col-xs-12 namecatalog">{this.props.sku.description}</p>
    );
  }
});

export default Description;
