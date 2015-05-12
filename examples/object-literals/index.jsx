import React from 'react/addons';
import Playground from 'component-playground';
import Code from '../../code.jsx';
import a from 'raw!./a.example';

export default React.createClass({
  render() {
    return (
      <div>
        <p>
          Object literals have gotten a new shorthand notation.
          <Code>{"{name: name, title: title}"}</Code> can be condensed to <Code>{"{name, title}"}</Code>
        </p>
        <Playground codeText={a} es6Console={true} scope={{}} />
      </div>
    );
  }
});
