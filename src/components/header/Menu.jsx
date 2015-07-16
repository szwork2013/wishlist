import React from 'react';

let Menu = React.createClass({
  handleClick() {
    alert("não tem menu ainda");
  },

  render() {
    return (
        <img className="glyphicon glyphicon-menu-hamburger" onClick={this.handleClick}/>
    );
  }
});

export default Menu;