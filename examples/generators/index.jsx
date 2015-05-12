import React from 'react/addons';
import Playground from 'component-playground';
import Code from '../../code.jsx';
import a from 'raw!./a.example';
import b from 'raw!./b.example';
import c from 'raw!./c.example';
import d from 'raw!./d.example';
import e from 'raw!./e.example';

export default React.createClass({
  render() {
    return (
      <div>
        <p>
          Generators functions take the following form <Code>function* name() {"{}"}</Code>.
          Or our preferred <Code>const name = function* () {"{}"};</Code>,
          since we avoid function declarations in favor of function expressions.
        </p>

        <p>Calling a generator doesn't actually run any of it's contents. A call to a generator returns a generator instance.</p>
        <Playground codeText={a} es6Console={true} scope={{}} />

        <p>To use a generator instance we have to call <Code>.next()</Code></p>
        <Playground codeText={b} es6Console={true} scope={{}} />

        <p><Code>.next()</Code> returns an object that looks like this:</p>
        <p><Code>{"{"} value: undefined, done: true {"}"}</Code></p>

        <p>What do <Code>value</Code> and <Code>done</Code> mean?</p>
        <p>
          <Code>done</Code> means that the generator {"doesn't"} have any more code to execute.
          AKA we are past the last <Code>yield</Code> statement.
          To understand <Code>value</Code>, we have to look at <Code>yield</Code>.
        </p>
        <Playground codeText={c} es6Console={true} scope={{}} />

        <p>
          A <Code>yield</Code> statement tells the generator to stop executing and return the following value.
          You can have <Code>yield</Code> statements without a return value.
          The generator will return <Code>done: true</Code> on the subsequent call to <Code>next</Code> after the last <Code>yield</Code> statement (see above).
        </p>

        <p><Code>yield</Code> statements can also be used to pass in new information to the generator.</p>
        <Playground codeText={d} es6Console={true} scope={{}} />

        <p>
          A little confusing right? What happens when we hit the first <Code>yield</Code> is we pass out <Code>x</Code> as <Code>value</Code>.
          The <Code>yield x</Code> statement then becomes whatever is passed into <Code>.next()</Code>.
          <Code>x</Code> is still <Code>5</Code> but <Code>yield x</Code> is now <Code>8</Code>.
        </p>

        <p>
          Note: <Code>return</Code> statements in generators are not a good idea.
          Although they are easy to reason about for <Code>done: true</Code>, they {"don't"} show up in <Code>for..of</Code> loops. See below
        </p>

        <p>Generators can be used with <Code>for..of</Code> loops for iterating to completion</p>
        <Playground codeText={d} es6Console={true} scope={{}} />

        <p>
          In the <Code>for..of</Code> the the variable <Code>Y</Code> is the result of the <Code>yield</Code> statements.
          As mentioned above, any return statement will be ignored by the loop.
        </p>

        <p>For a more detailed overview of generators see <a href={"http://davidwalsh.name/es6-generators"}>{"http://davidwalsh.name/es6-generators"}</a></p>

{/*

        <p>Can be written as:</p>

        <p>This is most useful for cases like map or reduce:</p>
        <Playground codeText={c} es6Console={true} scope={{}} />

        <h3>Arrow function syntax</h3>*/}
      </div>
    );
  }
});
