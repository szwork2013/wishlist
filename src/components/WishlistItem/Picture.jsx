import React from 'react';
import style from '../../styles/Picture.less'; // eslint-disable-line

let Picture = React.createClass({

  render() {
    return (
        <div className="col-xs-12">
          <img src="http://i717.photobucket.com/albums/ww172/louisearaujo/23cheerful-cat.jpg" className="img-thumbnail wishlistphoto"/>
        </div>
    );
  }
});

export default Picture;
