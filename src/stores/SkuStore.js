import flux from '../flux';
import CatalogActions from '../actions/CatalogActions';

class SkuStore {
  constructor() {
    //guarda os sku
    this.skus = [];

    this.bindListeners({
      handleAddSku: CatalogActions.ADD_SKU,
      setInitialState: CatalogActions.SET_INITIAL_STATE
    });
  }
  handleAddSku(sku) {
    if(this.skus.indexOf(sku) < 0) {
      this.skus.push(sku); //coloca sku no final da array de skus
    }
  }
  setInitialState(skus) {
    this.skus = skus;
  }
}

export default flux.createStore(SkuStore, 'SkuStore');
