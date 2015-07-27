import React from 'react';

import Picture from './Picture';
import Price from './Price';
import AddCart from './AddCart';
import Delete from './Delete';
import Description from './Description';

let WishlistItem = React.createClass({

  render: function() {
    return (
      <nav className="col-md-12 navbar navbar-default">
        <div className="container-fluid row">
          <div className="col-xs-4 navbar-default">
            <Picture sku={this.props.sku}/>
          </div>
          <div className="col-xs-4 navbar-default">
            <Description sku={this.props.sku}/>
          </div>
          <div className="col-xs-4 navbar-deafult">
            <div className = "col-xs-12">
              <div className = "col-xs-6">
                <Price sku={this.props.sku}/>
              </div>
              <div className = "col-xs-6">
                <Delete sku={this.props.sku}/>
              </div>
            </div>
            <div className = "col-xs-12">
              <AddCart sku={this.props.sku}/>
            </div>
          </div>
        </div>
      </nav>
    );
  }
});

export default WishlistItem;
