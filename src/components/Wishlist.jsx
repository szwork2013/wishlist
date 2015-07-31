import React from 'react';
import WishlistStore from '../stores/WishlistStore';
import WishlistItem from '../components/WishlistItem/WishlistItem';
import style from '../styles/WishlistPage.less'; // eslint-disable-line

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
      <ul>
        {this.state.skus.map( (sku, index) => {
          return (<li key={index}>
            <WishlistItem sku={sku} />
            </li>);
        })}
      </ul>
    );
  }
});
export default Wishlist;
