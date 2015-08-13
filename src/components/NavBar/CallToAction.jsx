import React from 'react';
import { Popover } from 'react-bootstrap';
import 'styles/CallToAction.less';

let CallToAction = React.createClass({
  handleClick(){
      console.log('Abre o modal para login. VETX ID');
  },

  render() {
    return (
      <div style={{ height: 80}}>
        <Popover placement='bottom' className='popoverColor popoverPosition'>
        Faça <a href="#" className="alert-link" onClick={this.handleClick}>login</a> para lembrarmos de você</Popover>
      </div>


    );
  }
});

export default CallToAction;
