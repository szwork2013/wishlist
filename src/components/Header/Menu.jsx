import React from 'react';

import '../../styles/Menu.less';

let Menu = React.createClass({
  render() {
    return (
      <div className="col-xs-4 menu">
        <button
        className="glyphicon glyphicon-menu-hamburger btn btn-default">
        </button>
      </div>
    );
  }
});

export default Menu;
