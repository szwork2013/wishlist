import flux from '../flux';
import WishlistActions from '../actions/WishlistActions';

class MasterdataStore {
  constructor() {
    this.skus = [];
    this.ids = [];

    this.bindListeners({
      handleLoadIds: WishlistActions.LOAD_IDS
    });
  }

  handleLoadIds(result) {
    this.ids = result;
  }
}


export default flux.createStore(MasterdataStore, 'MasterdataStore');
