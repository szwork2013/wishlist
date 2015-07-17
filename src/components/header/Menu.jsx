import React from 'react';

let Menu = React.createClass({
  handleClick() {
    alert("não tem menu ainda");
  },

  render() {
    return (
    	<div className="col-md-4 navbar-form">
        	<button 
        	className="glyphicon glyphicon-menu-hamburger btn btn-default" 
        	onClick={this.handleClick}></button>
        </div>
    );
  }
});

export default Menu;