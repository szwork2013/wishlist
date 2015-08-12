import React from 'react';
import style from '../../styles/AddCart.less'; // eslint-disable-line
import WishlistActions from '../../actions/WishlistActions';



let Delete = React.createClass({

  removeSkuFromWishlist() {
    WishlistActions.removeSku(this.props.sku);
  },

    render() {
      return (
        <div className="col-xs-6">
          <div className="col-xs-8"></div>
          <button type="button"
          className="col-xs-4 right-block btn btn-danger buttons glyphicon glyphicon-remove col-xs-5 buttom"
          onClick={this.removeSkuFromWishlist}>
          </button>
        </div>
      );
    }
  });

export default Delete;
