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
      if(result.docs.length === 0){
        console.log('no matching email');
      }
      else{
        console.log(result.docs[0].skus);
        this.dispatch(result.docs[0].skus);
      }
    }).catch(()=>{
        console.log('could not access api');
      });
  }
}

export default flux.createActions(WishlistActions);
