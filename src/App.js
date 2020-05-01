import './App.scss';
import React from 'react';
import { Static } from './models/models';
import { Loader, Footer, LoadingAnimation } from './components/components';
import {
  SplashContainer,
  AboutContainer,
  TimelineContainer,
  SkillsContainer,
  ExperienceContainer,
  ProjectsContainer,
  PensContainer,
} from './containers/containers';

/**
 * App component
 */
class App extends React.Component {
  _contentID = 0;

  constructor(props) {
    super(props);
    this.state = { data: null, errorMessage: 'api.alexlipianu.com is currently unavailable or cannot be reached' };
    this.loader = this.loader.bind(this);
    this.onSuccess = this.onSuccess.bind(this);
  }

  /**
   * Fetch app data
   */
  loader() {
    return Static.getContent(this._contentID);
  }

  /**
   * Load data into containers
   */
  onSuccess({data}) {
    this.setState({data});
  }

  /**
   * Renders app
   */
  render() {
    return (
      <Loader loader={this.loader} animation={LoadingAnimation} onSuccess={this.onSuccess} errorMessage={this.state.errorMessage}>
        {this.state.data && <>
          <SplashContainer {...this.state.data.splash} />
          <AboutContainer {...this.state.data.about} />
          <TimelineContainer {...this.state.data.timeline} />
          <SkillsContainer {...this.state.data.skills} />
          <ExperienceContainer {...this.state.data.experience} />
          <ProjectsContainer {...this.state.data.projects} />
          <PensContainer {...this.state.data.pens} />
          <Footer />
        </>}
      </Loader>
    );
  }
}

export default App;
