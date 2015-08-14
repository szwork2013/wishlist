import React from 'react';

import Picture from './Picture';
import Delete from './Delete';
import Price from './Price';
import AddCart from './AddCart';
import Description from './Description';
import '../../styles/WishlistItem.less';
import WishlistActions from '../../actions/WishlistActions';

let WishlistItem = React.createClass({

  render() {
    return (
        <div className="wishlistcontent col-xs-12">
          <Picture sku={this.props.sku}/>
          <Delete sku={this.props.sku}/>
          <div className="col-xs-8 description">
            <div>
              <Description sku={this.props.sku}/>
              </div>
              <div>
                <Price sku={this.props.sku}/>
                <AddCart sku={this.props.sku}/>
              </div>
            </div>
        </div>
    );
  }
});

export default WishlistItem;
/*<Delete sku={this.props.sku}/>*/
