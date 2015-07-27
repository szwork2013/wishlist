import React from 'react';
import style from '../../styles/WishlistItem.less'; // eslint-disable

let Picture = React.createClass({

  render() {
    return (
      <div className="row container-fluid">
        <img src="https://placekitten.com/g/200/300" className="img-responsive img-rounded product__img center-block"/>
      </div>
    );
  }
});

export default Picture;
