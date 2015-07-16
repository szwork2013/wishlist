import React from 'react';

let Buy = React.createClass({
  handleClick() {
    alert("vai compra nada não");
  },

  render() {
    return (
    	<div className="col-md-4 navbar-form">
	        <button type="button" 
	        className="btn btn-success" 
	        onClick={this.handleClick}>
	        	Comprar essa lista
	        </button> 
	    </div>
    );
  }
});

export default Buy;