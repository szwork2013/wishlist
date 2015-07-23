import React from 'react';

import AddCart from './product/AddCart';
//import Delete from './product/Delete';
import Info from './product/Info';
//import Picture from './product/Picture';
//import Price from './product/Price';

let Product = React.createClass({

  render: function() {
    return (
      <div>
        <h3>MINHA WISHLIST</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.funcaodoguigs}>
          <input onChange={this.onChange} value={this.state.text} />
          <button>{'Add #' + (this.state.items.length + 1)}</button>
        </form>
      </div>
    );
  }
});

export default Product;
