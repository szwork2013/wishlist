import React from 'react';

let ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

let CallToAction = React.createClass({
  render() {
    return (
      <div>
        <ReactCSSTransitionGroup transitionName="CallToAction">
        <img src="https://pbs.twimg.com/profile_images/2599691738/image.jpg" />
        </ReactCSSTransitionGroup>
      </div>
    );
  }
});

export default CallToAction;
