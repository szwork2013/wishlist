import React from 'react';
import style from '../../styles/Menu.less'; // eslint-disable-line
import { Navigation } from 'react-router';

let Menu = React.createClass({
  mixins:[Navigation],

  handleClick() {
    this.transitionTo('/wishlist/catalog');
  },

  render() {
    return (
      <div className="col-xs-3 menu">
        <button
        className="glyphicon glyphicon-menu-hamburger btn btn-default buttom"
        onClick={this.handleClick}></button>
      </div>
    );
  }
});

export default Menu;
