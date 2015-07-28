import flux from '../flux';
import WishlistActions from '../actions/WishlistActions';

class WishlistStore {
  constructor() {
    this.skus = [];

    this.bindListeners({
      handleAddSku: WishlistActions.ADD_SKU,
      handleAddList: WishlistActions.ADD_LIST,
      handleRemoveSku: WishlistActions.REMOVE_SKU
    });
  }

  handleAddSku(sku) {
    if(this.skus.filter((item) => item.id === sku.id).length === 0) { //filtra 'skus' comparando 'id's de cada item
    //quando js compara 2 objetos ele não compara conteúdo, só referências.
      this.skus.push(sku);
    }
  }

  handleAddList(list) {
    this.skus = list;
  }

  handleRemoveSku(sku) {
    //console.log(sku);
    this.skus.splice(this.skus.indexOf(sku), 1);
  }
}

export default flux.createStore(WishlistStore, 'WishlistStore');
