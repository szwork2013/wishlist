import flux from '../flux';

class WishlistActions {
  addSku(sku) {
    this.dispatch(sku);
  }
  addList(skus){
    this.dispatch(skus);
  }
}

export default flux.createActions(WishlistActions);
