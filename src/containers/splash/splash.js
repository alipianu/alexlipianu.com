import './splash.scss';
import React from 'react';
import { Splash } from '../../components/components';

/**
 * Container for splash
 * 
 * usage: <SplashContainer />
 */
class SplashContainer extends React.Component {
  state = { loaded: false };

  /**
   * Loads container data
   */
  componentDidMount() {
    // TODO: move to DB
    const data = { name: 'Alexander Lipianu', title: 'Software Developer', src: '/assets/img/bluesky.jpg' };
    this.setState({ ...data, loaded: true });
  }

  /**
   * Renders splash
   */
  render() {
    return this.state.loaded && (
      <Splash src={this.state.src}>
        <h1 id="name">{this.state.name}</h1>
        <p id="title">{this.state.title}</p>
      </Splash>
    );
  }
};

export default SplashContainer;