import flux from '../flux';

class WishlistActions {
  addSku(sku) {
    this.dispatch(sku);
  }
}

export default flux.createActions(WishlistActions);
