import React from 'react';
import 'styles/NavBar.less';


let Remove = React.createClass({
  handleClick(){
    console.log('Selecionar produtos para remover');
  },

  render() {
    return (
      <div className="col-xs-5 wishlistname-container">
      <button type="button"
      className=" buttons fa fa-times btn btn-danger buttom"
      onClick={this.handleClick}></button>
        </div>
    );
  }
});

export default Remove;
