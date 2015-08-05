import flux from '../flux';
import WishlistActions from '../actions/WishlistActions';

class WishlistStore {
  constructor() {
    this.skus = [];
    this.popoverBeenDisplayed = false;

    this.bindListeners({
      handleAddSku: WishlistActions.ADD_SKU,
      handleAddList: WishlistActions.ADD_LIST,
      handleRemoveSku: WishlistActions.REMOVE_SKU,
      handleDisplayPopover: WishlistActions.DISPLAY_POPOVER
    });
  }

  handleAddSku(sku) {
    if(this.skus.filter((item) => item.id === sku.id).length === 0) {
      this.skus.push(sku);
    }
  }

  handleAddList(list) {
    this.skus = list;
  }

  handleRemoveSku(sku) {
    this.skus.splice(this.skus.indexOf(sku), 1);
  }

  handleDisplayPopover(){
    this.popoverBeenDisplayed = true;
  }
  onSearchLists(query) {
    this.skus = query.skus;
    console.log(this.query.skus);
  }
}


export default flux.createStore(WishlistStore, 'WishlistStore');
