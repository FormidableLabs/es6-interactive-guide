import React from 'react/addons';
import Playground from 'component-playground';
import Code from '../../code.jsx';
import a from 'raw!./a.example';
import b from 'raw!./b.example';
import c from 'raw!./c.example';
import d from 'raw!./d.example';
import e from 'raw!./e.example';
import f from 'raw!./f.example';

export default React.createClass({
  render() {
    return (
      <div>
        <p>Both arrays and objects now support destructuring.</p>

        <p>
          Array destructuring gives a quicker and more fine-grained approach to interacting with elements in an array. See below:
          <Playground codeText={a} es6Console={true} scope={{}} />
        </p>

        <p>
          Object destructuring is similar to array destructuring but uses key names to do the destructuring.
          <Playground codeText={b} es6Console={true} scope={{}} />
        </p>

        <p>
          Object destructuring also gives us some extra flexibility with nested objects and computed properties.
          <Playground codeText={c} es6Console={true} scope={{}} />
        </p>

        <p>
          Array and object destructuring can be used in conjuction with any nesting depth.
          <Playground codeText={d} es6Console={true} scope={{}} />
        </p>

        <p>
          Arrays also supports the rest operator <Code>...</Code>.
          This allows us to grab the remaining un-deconstructed subset of the array as an array.
          <Playground codeText={e} es6Console={true} scope={{}} />
          The rest operator looks identical to the spread operator but the two have different functions.
        </p>

        <p>
          In ES7, objects also support the rest operator.
          This allows us to grab the remaining un-deconstructed properties of the object as an object.
          <Playground codeText={f} es6Console={true} scope={{}} />
        </p>
      </div>
    );
  }
});
