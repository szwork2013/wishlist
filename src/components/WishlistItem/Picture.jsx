import React from 'react';
import '../../styles/Picture.less';

let Picture = React.createClass({
  render() {
    return (
        <div className="col-xs-4 photocontainer">
          <div className="wishlistphoto">
            <img className="img-thumbnail" src={this.props.sku.image}/>
          </div>
        </div>
    );
  }
});

export default Picture;
