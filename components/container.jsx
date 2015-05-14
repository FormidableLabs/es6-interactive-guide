'use strict';

import React from 'react/addons';
import Radium from 'radium';

var styles = {
  paddingRight: 80,
  paddingLeft: 80,
  maxWidth: 1024,
};

export default React.createClass(Radium.wrap({
  render() {
    return (
      <div style={[ styles, this.props.style && this.props.style ]}>
        {this.props.children}
      </div>
    );
  }
}));
