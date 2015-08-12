import React from 'react';
import style from '../../styles/Delete.less'; // eslint-disable-line
import WishlistActions from '../../actions/WishlistActions';
import { Tooltip, ButtonToolbar, OverlayTrigger, Button } from 'react-bootstrap';



let Delete = React.createClass({

  removeSkuFromWishlist() {
    WishlistActions.removeSku(this.props.sku);
  },


  render() {
    const tooltip = (
      <Tooltip>ATENÇÃO! Ao clicar neste botão, seu produto será deletado.</Tooltip>
    );

    return (
      <div className="col-xs-6">
        <div className="col-xs-8"></div>

          <OverlayTrigger placement='right' overlay={tooltip}>
            <Button bsStyle='danger' onClick={this.removeSkuFromWishlist}>
              <i className='glyphicon glyphicon-remove' />
            </Button>
          </OverlayTrigger>

      </div>
    );
  }
});

export default Delete;

  