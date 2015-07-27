import React from 'react';
import style from '../../styles/Description.less';

let Description = React.createClass({

  render() {
    return (
      <div className="col-xs-4">
        <p className="col-xs-8 namecatalog">{this.props.sku.description}</p>
      </div>
    );
  }
});

export default Description;
