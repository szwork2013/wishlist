import flux from '../flux';
import WishlistFetcher from '../fetchers/WishlistFetcher';

class CatalogActions {
  convertToSkus(ids){
    this.dispatch(ids);
  }

  searchEmail(email) {
    WishlistFetcher.fetch(email)
      .then((result) => {
        if (result.docs.length === 0) {
          console.log('no matching email');
        }
        else {
          console.log(result.docs[0].skus);
          this.actions.convertToSkus(result.docs[0].skus);
        }
      }).catch(() => {
          console.log('could not access api');
      });

    this.dispatch();
  }
}
export default flux.createActions(CatalogActions);
