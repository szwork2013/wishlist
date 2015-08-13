import React from 'react';
import style from '../../styles/Delete.less'; // eslint-disable-line
import WishlistActions from '../../actions/WishlistActions';
import { Tooltip, ButtonToolbar, OverlayTrigger, Button, Popover } from 'react-bootstrap';


let Delete = React.createClass({

  removeSkuFromWishlist() {
    WishlistActions.removeSku(this.props.sku);
  },

  getInitialState() {
    return {clicked: false};
  },

  handleClick(e) {
    this.setState({clicked: true});
    if(this.state = false)
      this.removeSkuFromWishlist();
  },



  render() {
    const popover = (
      <Popover title='ATENÇÃO!'>  Se você clicar no ícone mais uma vez, o item será removido
      da sua wishlist.</Popover>
    );

    return (
      <div>
        <OverlayTrigger trigger='click' rootClose placement='right' 
        overlay={popover}>
          <Button bsStyle='danger' onClick={this.handleClick}>
            <i className='glyphicon glyphicon-remove' />
          </Button>
        </OverlayTrigger>
      </div>
    );
  }
});

export default Delete;

  //   const tooltip = (
  //     <Tooltip>ATENÇÃO! Ao clicar neste botão, seu produto será deletado.</Tooltip>
  //   );

  //   return (
  //     <div className="col-xs-6">
  //       <div className="col-xs-8"></div>

  //         <OverlayTrigger placement='right' overlay={tooltip}>
  //           <Button bsStyle='danger' onClick={this.removeSkuFromWishlist}>
  //             <i className='glyphicon glyphicon-remove' />
  //           </Button>
  //         </OverlayTrigger>

  //     </div>
  //   );
  // 