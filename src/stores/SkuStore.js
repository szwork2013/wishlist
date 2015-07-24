import flux from '../flux';
import CatalogActions from '../actions/CatalogActions';

class SkuStore {
  constructor() {
    //guarda os sku
    this.skus = [];

    this.bindListeners({
      handleAddSku: CatalogActions.ADD_SKU
    });
  }
  handleAddSku(sku) {
    this.skus.push(sku); //coloca sku no final da array de skus
  }
}

export default flux.createStore(SkuStore, 'SkuStore');
