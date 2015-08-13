import React from 'react';
import style from '../../styles/Delete.less'; // eslint-disable-line
import WishlistActions from '../../actions/WishlistActions';
import { Tooltip, ButtonToolbar, OverlayTrigger, Button, Popover } from 'react-bootstrap';


let Delete = React.createClass({
  getInitialState() {
    return {clicked: false};
  },

  removeSkuFromWishlist() {
    WishlistActions.removeSku(this.props.sku);
    console.log(this.props.popoverBeenDisplayed);
  },

  handleClick(e) {
    if(this.state.clicked === true){
      WishlistActions.displayPopover();
    }

    this.setState({clicked: true});
    console.log(this.props.popoverBeenDisplayed);
  },

  displayPopover() {
    const popover = (
      <Popover title='ATENÇÃO!'>  Se você clicar no ícone mais uma vez, o item será removido
      da sua wishlist.</Popover>
    );

    if (this.props.popoverBeenDisplayed === false) {
      return (
        <div>
          <OverlayTrigger trigger='click' rootClose placement='right' overlay={popover}>
            <Button bsStyle='danger' onClick={this.handleClick}>
              <i className='glyphicon glyphicon-remove' />
            </Button>
          </OverlayTrigger>
        </div>
      );
    } else {
      return (
        <div>
          <Button bsStyle='danger' onClick={this.removeSkuFromWishlist}>
            <i className='glyphicon glyphicon-remove' />
          </Button>
        </div>
      );
    }
  },


  render() {
    return (
      <div>
        { this.displayPopover() }
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