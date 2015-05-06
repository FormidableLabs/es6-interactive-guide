'use strict';

import './guide.styl';
import 'component-playground/demo/styles/demo.css'
import 'component-playground/demo/styles/syntax.css'
import 'component-playground/demo/styles/codemirror.css'

import React from 'react/addons';
import exampleList from './example-list';


var Index = React.createClass({
  render() {
    var navList = [];
    var contentList = [];

    exampleList.forEach(function (exampleObj, index) {
      var link = exampleObj.name.replace(" ", "-").toLowerCase();

      navList.push(
        <li>
          <a className={'guide-nav-link'} href={'#' + link}>
            <span className={'guide-nav-item-reference'}>{index + 1}</span>
            {exampleObj.name}
          </a>
        </li>
      );

      contentList.push(
        <div>
          <h2 className={'guide-heading'}>
            <span className={'guide-heading-reference'}>{index + 1}</span>
            {exampleObj.name}
            <a href={'#' + link}>#</a>
          </h2>
          <exampleObj.example />
        </div>
      );
    });

    return (
      <div>
        <header className={'guide-header guide-slider'}>
          <div className={'container'}>
            <h1>ES6 Interactive Guide</h1>
          </div>
        </header>
        <div className={'guide-nav'}>
          <ul className={'nav-list'} >
            {navList}
          </ul>
        </div>
        <div className={'guide-content guide-slider'}>
          <div className={'container'}>
            {contentList}
          </div>
        </div>
      </div>
    );
  }
});

React.render(<Index/>, document.getElementById('root-component'));
