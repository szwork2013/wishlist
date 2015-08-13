import flux from '../flux';
import WishlistActions from '../actions/WishlistActions';

class MasterdataStore {
  constructor() {
    this.skus = [];

    this.bindListeners({
      handleLoadSkus: WishlistActions.LOAD_SKUS
    });
  }

  handleLoadSkus(skus) {
  }
}


export default flux.createStore(MasterdataStore, 'MasterdataStore');
