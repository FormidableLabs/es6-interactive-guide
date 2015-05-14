'use strict';

import React from 'react/addons';

const styles = {
  background: '#E8EDF2',
  fontSize: 15,
  fontFamily: 'Consolas, Liberation Mono, monospace',
  padding: '3px 3px 2px'
};

export default React.createClass({
  render() {
    return <code style={styles}>{this.props.children}</code>
  }
});
