import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'intersection-observer';
import React from 'react';
import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.css';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

// build font awesome library
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCode, faScroll, faProjectDiagram, faHammer, faChartLine, faSitemap, faExchangeAlt, faChevronDown, faChevronUp, faCodeBranch, faBook, faChalkboard, faInfoCircle, faChevronLeft, faChevronRight, faLock, faLevelUpAlt, faGlobe, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn, faCodepen, faDocker, faJs, faFigma } from '@fortawesome/free-brands-svg-icons'
library.add(
  // solid
  faCode, faCodeBranch, faBook, faScroll, faProjectDiagram, faHammer, faChartLine, faSitemap, faExchangeAlt, faChevronDown, faChevronUp, faChalkboard, faInfoCircle, faChevronLeft, faChevronRight, faLock, faLevelUpAlt, faGlobe, faTimes,
  // brands
  faGithub, faLinkedinIn, faCodepen, faDocker, faJs, faFigma
);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
