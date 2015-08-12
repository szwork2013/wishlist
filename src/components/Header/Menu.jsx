import React from 'react';

import { Navigation } from 'react-router';
import '../../styles/Menu.less';

let Menu = React.createClass({
  mixins:[Navigation],

  handleClick() {
    this.transitionTo('/wishlist/catalog');
  },

  render() {
    return (
      <div className="col-xs-4 menu">
        <button
        className="glyphicon glyphicon-menu-hamburger btn btn-default"
        onClick={this.handleClick}></button>
      </div>
    );
  }
});

export default Menu;
