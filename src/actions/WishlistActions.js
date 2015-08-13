import flux from '../flux';
import WishlistFetcher from '../fetchers/WishlistFetcher'

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
  searchEmail(email) {
    WishlistFetcher.fetch(email).then((result)=>{
      console.log(result);
    }).catch(()=>{});
  }
}

export default flux.createActions(WishlistActions);
