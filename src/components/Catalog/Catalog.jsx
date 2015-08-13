import React from 'react';
import SkuItem from './SkuItem';
import CookieManager from '../CookieManager';
import Header from '../Header/Header';
import WishlistStore from '../../stores/WishlistStore';

import image1 from '../../images/catalogo.png';
import image2 from '../../images/catalogo2.png';
import image3 from '../../images/catalogo3.png';
import image4 from '../../images/catalogo4.png';

let Catalog = React.createClass({
  getInitialState(){
    return {
      skus: [
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
      ]
    }
  },
  
  render() {
    return (
      <div className="main-container">
        <CookieManager>
          <Header/>
          <div className="row center-block">
            <div className="content col-xs-12">
              {this.state.skus.map((sku, index) => {
                return (<SkuItem sku={sku} key={index}/>);
              })}
            </div>
          </div>
        </CookieManager>
      </div>
    );
  }
});

export default Catalog;
