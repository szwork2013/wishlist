import React from 'react';

let Menu = React.createClass({
  handleClick() {
    console.log('não tem menu ainda');
  },

  render() {
    return (
      <div className="col-xs-4 navbar-form row container-fluid">
        <button
        className="glyphicon glyphicon-menu-hamburger btn btn-default"
        onClick={this.handleClick}></button>
      </div>
    );
  }
});

export default Menu;
