import './App.scss';
import React from 'react';
import { Home } from './views/views';

/**
 * App component
 */
class App extends React.Component {
  constructor(props) {
    super(props);
    this.updateCSSVars = this.updateCSSVars.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateCSSVars);
    this.updateCSSVars();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateCSSVars);
  }

  updateCSSVars() {
    // set the real vh (workaround for mobile device address bar)
    document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
  }

  /**
   * Renders app
   */
  render() {
    return (
      <Home />
    );
  }
}

export default App;
