import React from 'react';
import WishlistStore from '../stores/WishlistStore';
import WishlistItem from '../components/WishlistItem/WishlistItem';

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

  render() {
    return (
      <div>
        {this.state.skus.map( (sku, index) => {
          return (<div key={index}>
            <WishlistItem sku={sku} />
            </div>);
        })}
      </div>
    );
  }
});
export default Wishlist;
