'use strict';

import React from 'react/addons';
import Radium from 'radium';

var styles = {
  paddingRight: 16,
  paddingLeft: 16,
  maxWidth: 1024,

  '@media (min-width: 500px)': {
    paddingRight: 32,
    paddingLeft: 32
  },

  '@media (min-width: 800px)': {
    paddingRight: 48,
    paddingLeft: 48
  },

  '@media (min-width: 1024px)': {
    paddingRight: 80,
    paddingLeft: 80
  }
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
