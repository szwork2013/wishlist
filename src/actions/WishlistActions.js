import flux from '../flux';

class WishlistActions {
  addSku(sku) {
	  this.dispatch(sku);
  }
  removeSku(sku) {
	  this.dispatch(sku);
  }
  displayPopover() {
    this.dispatch();
  }
  retrieveSkus(skus) {
    this.dispatch(skus);
  }
}

export default flux.createActions(WishlistActions);
