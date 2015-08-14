import flux from '../flux';
import CatalogActions from '../actions/CatalogActions';

class CatalogStore {
  constructor() {
    this.wishlistSkus = [];
    this.skus = [
      {
        id: 1123,
        description: 'blusa open shoulder',
        image: 'http://placehold.it/110',
        price: 49.90
      },
      {
        id: 2123,
        description: 'regata estampada indiana',
        image: 'http://placehold.it/110',
        price: 29.90
      },
      {
        id: 3123,
        description: 'capa em tricô preta',
        image: 'http://placehold.it/110',
        price: 247.90
      },
      {
        id: 4123,
        description: 'regata mullet com estampa',
        image: 'http://placehold.it/110',
        price: 270.0
      }
    ];
    this.bindListeners({
      handleConvertToSkus: CatalogActions.CONVERT_TO_SKUS
    });
  }

  handleConvertToSkus(ids) {
    let array = [];
    ids.forEach(id => {
      this.skus.forEach(sku => {
        if(sku.id == id){
         array.push(sku);
        }
      })
    });
    this.wishlistSkus = array;
  }

}

export default flux.createStore(CatalogStore, 'CatalogStore');
