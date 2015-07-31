import React from 'react';

import Picture from './Picture';
import Price from './Price';
import AddCart from './AddCart';
import Delete from './Delete';
import Description from './Description';

import style from '../../styles/WishlistPage.less'; // eslint-disable-line

let WishlistItem = React.createClass({

  render: function() {
    return (
      <nav className="col-md-12 wishlistcontent">
        <div className="col-xs-4">
          <Picture sku={this.props.sku}/>
        </div>
          <div className="col-xs-4">
            <Description sku={this.props.sku}/>
            <Price sku={this.props.sku}/>
          </div>
          <div className="col-xs-4">
              <div className="col-xs-6"></div>
              <Delete sku={this.props.sku}/>
              <AddCart sku={this.props.sku}/>
          </div>
      </nav>
    );
  }
});

export default WishlistItem;
