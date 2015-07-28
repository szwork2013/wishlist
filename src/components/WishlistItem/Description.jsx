import React from 'react';
import style from '../../styles/Description.less';

let Description = React.createClass({

  render() {
    return (
        <p className="col-xs-8 namecatalog">{this.props.sku.description}</p>
    );
  }
});

export default Description;
