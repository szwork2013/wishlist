import React from 'react';
import Picture from './Picture';
import Price from './Price';
import AddCart from './AddCart';
import Delete from './Delete';
import Description from './Description';
import WishlistActions from '../../actions/WishlistActions';

let WishlistItem = React.createClass({


  render() {
    return (
      <nav className="wishlistcontent col-xs-12 navbar uk-thumbnail">
        <div className="wishlistlist navbar uk-thumbnail" onClick={this.removeSkuFromWishlist}>
          <Picture sku={this.props.sku}/>
          <div className="col-xs-8 description">
            <div>
              <Description sku={this.props.sku}/>
            </div>
            <div>
              <Price sku={this.props.sku}/>
              <Delete sku={this.props.sku}/>
              <AddCart sku={this.props.sku}/>
            </div>
          </div>
        </div>
      </nav>
    );
  }
});

export default WishlistItem;
/*<Delete sku={this.props.sku}/>*/
