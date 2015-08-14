import flux from '../flux';
import CatalogActions from '../actions/CatalogActions';
import image1 from '../../images/catalogo.png';
import image2 from '../../images/catalogo2.png';
import image3 from '../../images/catalogo3.png';
import image4 from '../../images/catalogo4.png';

class CatalogStore {
  constructor() {
    this.wishlistSkus = [];
    this.skus = [
      {
        id: 1123,
        description: 'blusa open shoulder',
        image: image2,
        price: 49.90
      },
      {
        id: 2123,
        description: 'regata estampada indiana',
        image: image1,
        price: 29.90
      },
      {
        id: 3123,
        description: 'capa em tricô preta',
        image: image3,
        price: 247.90
      },
      {
        id: 4123,
        description: 'regata mullet com estampa',
        image: image4,
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
    console.log(array);
  }

}

export default flux.createStore(CatalogStore, 'CatalogStore');
