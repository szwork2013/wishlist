import flux from '../flux';
import WishlistActions from '../actions/WishlistActions';

class WishlistStore {
  constructor() {
    //guarda os sku
    this.skus = [];

    this.bindListeners({
      handleAddSku: WishlistActions.ADD_SKU,
      handleAddList: WishlistActions.ADD_LIST
    });
  }
  handleAddSku(sku) {
    if(this.skus.indexOf(sku) < 0) {
      this.skus.push(sku);
    }
  }
  handleAddList(list) {
      this.skus = list;
  }
}

export default flux.createStore(WishlistStore, 'WishlistStore');
