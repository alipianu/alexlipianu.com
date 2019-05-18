import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { Footer } from './components/components';
import * as serviceWorker from './serviceWorker';

// build font awesome library
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCogs, faCaretDown, faGlobe, faGamepad, faDownload, faEnvelope, faStar } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faCodepen } from '@fortawesome/free-brands-svg-icons'
library.add(
  // solid
  faCogs, faCaretDown, faGlobe, faGamepad, faDownload, faEnvelope, faStar,
  // brands
  faGithub, faLinkedin, faCodepen
);

// render app
ReactDOM.render(<App />, document.getElementById('root'));
// render footer
const footerElement = document.getElementsByTagName('footer')[0];
if (footerElement) {
  ReactDOM.render( <Footer />, footerElement);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
