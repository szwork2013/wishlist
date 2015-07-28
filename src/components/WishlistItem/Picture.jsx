import React from 'react';
import style from '../../styles/Picture.less'; // eslint-disable

let Picture = React.createClass({

  render() {
    return (
        <div class="col-xs-12">
          <img src="../images/wishlist1.png" className="img-thumbnail wishlistphoto"/>
        </div>
    );
  }
});

export default Picture;
