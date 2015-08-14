import React from 'react';
import WishlistStore from '../stores/WishlistStore';
import WishlistItem from '../components/WishlistItem/WishlistItem';
import EmptyWishlist from '../components/EmptyWishlist/EmptyWishlist';



let Wishlist = React.createClass({
  getInitialState() {
    return WishlistStore.getState();
  },

  componentDidMount() {
    WishlistStore.listen(this.onChange);
  },

  componentWillUnmount() {
    WishlistStore.unlisten(this.onChange);
  },

  onChange(state) {
    this.setState(state);
  },

  createWishlistComponent() {
    if (this.state.skus.length==0) {
      return <EmptyWishlist/>;
    }
    else {
      return <div className="wishlist_inner">
        {this.state.skus.map( (sku, index) => {
          return (<div key={index}>
            <WishlistItem sku={sku} />
            </div>);
        })}
      </div>;
    }
  },

  render() {
    return (
      <div className="col-sm-12 no-padding">
       { this.createWishlistComponent() }
      </div>
    );
  }
});
export default Wishlist;
