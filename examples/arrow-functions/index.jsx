import React from 'react/addons';
import Playground from 'component-playground';
import a from 'raw!./a.example';
import b from 'raw!./b.example';

export default React.createClass({
  render() {
    return (
      <div>
        <Playground codeText={a} es6Console={true} scope={{}} />
        <Playground codeText={b} es6Console={true} scope={{}} />
      </div>
    );
  }
});
