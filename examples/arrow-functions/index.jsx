import React from 'react/addons';
import Playground from 'component-playground';
import a from 'raw!./a.example';
import b from 'raw!./b.example';
import c from 'raw!./c.example';
import Code from '../../code.jsx';

export default React.createClass({
  render() {
    return (
      <div>
        <p>Arrow functions are shorthand for an anonymous function that keep the current context. E.g.</p>
        <Playground codeText={a} es6Console={true} scope={{}} />

        <p>Can be written as:</p>
        <Playground codeText={b} es6Console={true} scope={{}} />

        <p>This is most useful for cases like map or reduce:</p>
        <Playground codeText={c} es6Console={true} scope={{}} />

        <h3>Arrow function syntax</h3>

        <p>Arrow functions take the following form:
          <Code>{"(<arguments>) => <return statement>"}</Code>.
          When there is only a single argument, the parens are optional e.g.
          <Code>{"(x) => x * x` and `x => x * x"}</Code>
           are both valid. When there are 0 or 2 or more arguments, parens are required. e.g.
          <Code>{"() => 'zblah'` or `(x, y) => x * y"}</Code>
        </p>
      </div>
    );
  }
});
