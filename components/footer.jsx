'use strict';

import React from 'react/addons';
import Radium from 'radium';

import Container from './container.jsx';

const styles = {
  footer: {
    padding: '36px 0',
    background: '#2b303b',
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    borderTop: '1px solid #1D2227'
  },

  logoLink: {
    display: 'block',
    margin: '16px 0'
  },

  link: {
    fontWeight: 700,
    color: '#FF4136',

    ':hover': {
      color: '#fff'
    }
  }
};

export default React.createClass(Radium.wrap({
  displayName: 'Footer',

  render() {
    return (
      <footer style={styles.footer}>
        <Container>
          <p>
           Made with love in Seattle by

           <a
             style={styles.logoLink}
             href="http://formidablelabs.com"
            >
             <img
               width="300"
               src="img/formidable-logo.svg"
               alt="Formidable Labs" />
           </a>
         </p>

         <p>
           {'P.S. '}
           <a
             ref="link"
             style={styles.link}
             href="http://formidablelabs.com/careers/">
             We’re hiring
            </a>
            .
          </p>
        </Container>
      </footer>
    );
  }
}));
