import React from 'react/addons';
import Playground from 'component-playground';
import Code from '../../code.jsx';
import a from 'raw!./a.example';

export default React.createClass({
  render() {
    return (
      <div>
        <p>In object literals and classes we can condense <Code>render: function () {"{}"}</Code> to <Code>render() {}</Code></p>
        <Playground codeText={a} es6Console={true} scope={{}} />
      </div>
    );
  }
});
