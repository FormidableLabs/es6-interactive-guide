import React from 'react/addons';
import Playground from 'component-playground';
import Code from '../../code.jsx';
import a from 'raw!./a.example';
import b from 'raw!./b.example';
import c from 'raw!./c.example';

export default React.createClass({
  render() {
    return (
      <div>
        <p>
          The spread operator <Code>...</Code> takes an iterable and expands it into the individual elements.
          The spread operator looks identical to the rest operator but instead performs the opposite action.
          <Playground codeText={a} es6Console={true} scope={{}} />
        </p>
        <p>
          This is most useful for dealing with cases like <Code>apply</Code> where you want to pass an iterable as its components.
          In fact, apply is no longer needed to pass an array as arguments.
          <Playground codeText={b} es6Console={true} scope={{}} />
        </p>
        <p>
          Spread syntax works with any iterable object, including arrays and instances of <Code>Map</Code> and <Code>Set</Code>.
          <Playground codeText={c} es6Console={true} scope={{}} />
        </p>
      </div>
    );
  }
});
