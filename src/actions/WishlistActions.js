import flux from '../flux';

class WishlistActions {
  addSku(sku) {
	  this.dispatch(sku);
  }

  addList(skus){
	  this.dispatch(skus);
  }

  removeSku(sku) {
	  this.dispatch(sku);
  }

  displayPopover() {
    this.dispatch();
  }

}

export default flux.createActions(WishlistActions);
