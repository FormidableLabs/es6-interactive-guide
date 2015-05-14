'use strict';

// import './styles/guide.styl';
// import 'component-playground/demo/styles/demo.css';
import 'component-playground/demo/styles/syntax.css';
import 'component-playground/demo/styles/codemirror.css';
import 'babel-core/polyfill';

import React from 'react/addons';
import Router from 'react-router';
import Radium from 'radium';

const DefaultRoute = Router.DefaultRoute;
const RouterLink = Router.Link;
const Route = Router.Route;
const RouteHandler = Router.RouteHandler;

import exampleListMap from './example-list';

import Container from './components/container.jsx';
import Footer from './components/footer.jsx';
import Sidebar from './components/sidebar.jsx';

const headerStyles = {
  base: {
    position: 'relative',
    zIndex: 1,
    padding: '16px 0',
    marginBottom: 30,
    background: '#2b303b',
    color: '#fff'
  },
  title: {
    fontSize: 21,
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    fontWeight: '700',
    textRendering: 'optimizeLegibility'
  }
};

const flexContainerStyles = {
  base: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    paddingLeft: 300
  }
};

const Index = React.createClass(Radium.wrap({
  render() {
    return (
      <div>
        <Radium.Style rules={[
          {
            '*': {
              boxSizing: 'border-box'
            }
          },
          {
            body: {
              margin: 0,
              fontFamily: 'proxima-nova, Helvetica Neue, Helvetica, Arial, sans-serif',
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale',
              color: '#2b303b'
            }
          },
          {
            'h1, h2, h3, h4, h5, h6, p': {
              margin: 0
            }
          },
          {
            '.Prose a': {
              color: '#d71920'
            }
          },
          {
            '.Prose a:hover': {
              color: '#2b303b'
            }
          },
          {
            '.Prose p': {
              fontSize: 18,
              marginBottom: '1.4rem'
            }
          },
          {
            '.Prose p:last-child': {
              marginBottom: 0
            }
          },
          {
            '.Prose h3': {
              marginBottom: 8,
              marginTop: 36,
              fontSize: 24
            }
          },
          {
            '.playground': {
              margin: '20px -10px'
            }
          },
          {
            '.playgroundCode': {
              fontSize: 14
            }
          },
          {
            '.playgroundPreview': {
              fontSize: 14,
              background: '#E8EDF2',
              border: '1px solid #D0D4D8',
              borderTopWidth: 0
            }
          },
          {
            '.cm-s-monokai.CodeMirror': {
              background: '#2b303b'
            }
          }
        ]} />

        <Sidebar examples={exampleListMap} />

        <div style={flexContainerStyles.base}>
          <Container style={{paddingTop: 48, paddingBottom: 48, flex: '1'}}>
            <RouteHandler />
          </Container>

          <Footer />
        </div>
      </div>
    );
  }
}));

const headingStyles = {
  base: {
    fontSize: 36,
    fontFamily: 'kulturista-web',
    fontWeight: '300',
    marginBottom: 16,
    textAlign: 'center'
  },

  counter: {
    background: '#d71920',
    display: 'inline-block',
    textAlign: 'center',
    color: '#fff',
    borderRadius: '50%',
    marginRight: 12,
    fontFamily: 'proxima-nova',
    fontWeight: '700',
    height: 24,
    width: 24,
    lineHeight: '26px',
    fontSize: 18,
    position: 'relative',
    top: -6
  }
};

const exampleHandlers = exampleListMap.map((exampleObj, index) => {
  return React.createClass(Radium.wrap({
    displayName: exampleObj.name,
    render() {
      return (
        <div className="Prose" key={index}>
          <h2 style={headingStyles.base}>
            <span style={headingStyles.counter}>{index + 1}</span>
            {exampleObj.name}
          </h2>
          <exampleObj.example />
        </div>
      );
    }
  }));
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
