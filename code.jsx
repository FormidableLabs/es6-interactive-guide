'use strict';

import React from 'react/addons';

export default React.createClass({
  render() {
    return <span className={'inline-code-sample'}>{this.props.children}</span>
  }
});
