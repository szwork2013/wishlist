import flux from '../flux';

class CatalogActions {
  addSku(sku) {
    this.dispatch(sku);
  }
  setInitialState(skus) {
	this.dispatch(skus);
  }
}

export default flux.createActions(CatalogActions);
