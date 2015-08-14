import flux from '../flux';
import WishlistActions from '../actions/WishlistActions';

class WishlistStore {
  constructor() {
    this.skus = [];
    this.popoverBeenDisplayed = false;

    this.bindListeners({
      handleAddSku: WishlistActions.ADD_SKU,
      handleRemoveSku: WishlistActions.REMOVE_SKU,
      handleDisplayPopover: WishlistActions.DISPLAY_POPOVER,
      handleRetrieveSkus: WishlistActions.RETRIEVE_SKUS
    });
  }

  handleAddSku(sku) {
    if(this.skus.filter((item) => item.id === sku.id).length === 0) {
      this.skus.push(sku);
    }
  }
  handleRemoveSku(sku) {
    this.skus.splice(this.skus.indexOf(sku), 1);
  }
  handleDisplayPopover(){
    this.popoverBeenDisplayed = true;
  }
  handleRetrieveSkus(skus) {
    this.skus = skus;
  }
}


export default flux.createStore(WishlistStore, 'WishlistStore');
