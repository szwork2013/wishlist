import React from 'react';
import style from '../../styles/Delete.less'; // eslint-disable-line
import WishlistActions from '../../actions/WishlistActions';
import { OverlayTrigger, Popover } from 'react-bootstrap';

let Delete = React.createClass({
  getInitialState() {
    return {clicked: false};
  },

  removeSkuFromWishlist() {
    WishlistActions.removeSku(this.props.sku);
  },

  handleClick(e) {
    if(this.state.clicked === true){
      WishlistActions.displayPopover();
      WishlistActions.removeSku(this.props.sku);
    }

    else{
      this.setState({clicked: true});
    }
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
            <button className="btn btn-sm v-remove-btn" onClick={this.handleClick}>
              <i className="glyphicon glyphicon-remove wishlist-icon"/>
            </button>
          </OverlayTrigger>
        </div>
      );
    } else {
      return (
        <button className="btn btn-link btn-sm v-remove-btn" onClick={this.removeSkuFromWishlist}>
          <i className="glyphicon glyphicon-remove wishlist-icon"/>
        </button>
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
