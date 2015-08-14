import React from 'react';
import SkuItem from './SkuItem';
import CookieManager from '../CookieManager';
import Header from '../Header/Header';
import CatalogStore from '../../stores/CatalogStore';

let Catalog = React.createClass({
  getInitialState(){
    return CatalogStore.getState();
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
