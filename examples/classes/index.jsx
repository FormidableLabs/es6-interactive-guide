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
          Class syntax has been added to ES6.
          The underlying inheritance model is still prototypal but the class syntax can make it easier to reason about relationships.
          To create a class just use the <Code>Class</Code> keyword. Classes can be created with class expressions or class declarations.
          Unlike function declarations, class declarations are not hoisted.
          <Playground codeText={a} es6Console={true} scope={{}} />
        </p>
        <p>
          ES6 classes support <Code>Super</Code>, <Code>constructor</Code>, <Code>get</Code>, <Code>set</Code>, and <Code>static</Code> methods.
          Inheritance is achieved with the <Code>extends</Code> keyword.
          <Playground codeText={b} es6Console={true} scope={{}} />
        </p>
        <p>
          Classes can have computed method names, including setters and getters, and generator methods.
          <Playground codeText={c} es6Console={true} scope={{}} />
        </p>
      </div>
    );
  }
});
