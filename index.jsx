'use strict';

import './styles/guide.styl';
import 'component-playground/demo/styles/demo.css';
import 'component-playground/demo/styles/syntax.css';
import 'component-playground/demo/styles/codemirror.css';
import 'babel-core/polyfill';

import React from 'react/addons';
import Router from 'react-router';

const DefaultRoute = Router.DefaultRoute;
const RouterLink = Router.Link;
const Route = Router.Route;
const RouteHandler = Router.RouteHandler;

import exampleListMap from './example-list';


const Index = React.createClass({
  render() {
    return (
      <div>
        <header className={'guide-header guide-slider'}>
          <div className={'container'}>
            <h1>ES6 Interactive Guide</h1>
          </div>
        </header>
        <div className={'guide-nav'}>
          <ul className={'nav-list'}>
            {exampleListMap.map((exampleObj, index) => {
              return (
                <li>
                  <RouterLink className={'guide-nav-link'} to={exampleObj.name.replace(/\s+/g, "-").toLowerCase()}>
                    <span className={'guide-nav-item-reference'}>{index + 1}</span>
                    {exampleObj.name}
                  </RouterLink>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={'guide-content guide-slider'}>
          <div className={'container'}>
            <RouteHandler />
          </div>
        </div>
      </div>
    );
  }
});

const exampleHandlers = exampleListMap.map((exampleObj, index) => {
  return React.createClass({
    displayName: exampleObj.name,
    render() {
      return (
        <div>
          <h2 className={'guide-heading'}>
            <span className={'guide-heading-reference'}>{index + 1}</span>
            {exampleObj.name}
          </h2>
          <exampleObj.example />
        </div>
      );
    }
  });
});

const routes = (
  <Route name="index" path="/" handler={Index}>
    {exampleHandlers.map((handler, i) => {
      return (
        <Route
          key={i}
          name={exampleListMap[i].name.replace(/\s+/g, "-").toLowerCase()}
          handler={handler}>
        </Route>
      )
    })}
    <DefaultRoute handler={exampleHandlers[0]}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('root-component'));
});
