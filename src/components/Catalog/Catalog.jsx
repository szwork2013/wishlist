import React from 'react';
import SkuItem from './SkuItem';
import { Link } from 'react-router';
import CookieManager from '../CookieManager';
import Header from '../Header/Header';

let Catalog = React.createClass({
  getInitialState(){
    return {
      skus: [
        {
          id: 1123,
          description: 'blusa open shoulder',
          image: 'http://placehold.it/100',
          price: 49.90
        },
        {
          id: 2123,
          description: 'regata estampada indiana',
          image: 'http://placehold.it/100',
          price: 29.90
        },
        {
          id: 3123,
          description: 'capa em tricô preta',
          image: 'http://placehold.it/100',
          price: 247.90
        },
        {
          id: 4123,
          description: 'regata mullet com estampa',
          image: 'http://placehold.it/100',
          price: 270.0
        }
      ]
    };
  },
  render() {
    return (
      <CookieManager>
      <Header/>
        <div className="container-fluid row center-block">
        <Link to="wishlist_main" className="glyphicon glyphicon-heart btn btn-default"></Link>
          <div className="content col-xs-12">
            {this.state.skus.map((sku, index) => {
              return (<SkuItem sku={sku} key={index}/>);
            })}
          </div>
        </div>
      </CookieManager>
    );
  }
});

export default Catalog;
