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
  loadList(list) {
    this.dispatch(list);
  }
}

export default flux.createActions(WishlistActions);
