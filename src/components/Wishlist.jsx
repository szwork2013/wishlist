import React from 'react';
import WishlistStore from '../stores/WishlistStore';
import WishlistItem from '../components/WishlistItem/WishlistItem';

let Wishlist = React.createClass({
  getInitialState() {
    return {
      skuList: WishlistStore.getState().skus
    };
  },

  componentDidMount() {
    WishlistStore.listen(this.onChange);
  },

  componentWillUnmount() {
    WishlistStore.listen(this.onChange);
  },

  onChange(state) {
    this.setState({skuList: state.skus});
  },

  render() {
    console.log(this.state.skuList);

    return (
      <ul>
        {this.state.skuList.map( (sku, index) => {
          return (<li key={index}>
            <WishlistItem sku={sku} />
            </li>);
        })}
      </ul>
    );
  }
});
export default Wishlist;
