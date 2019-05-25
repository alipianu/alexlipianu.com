import './App.scss';
import React from 'react';
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
    return fetch('https://api.alexlipianu.com').then((response) => response.json());
  }

  /**
   * Load data into containers
   */
  onSuccess(result) {
    const data = {};
    const sections = ['splash', 'about', 'timeline', 'skills', 'experience', 'projects', 'pens'];
    sections.forEach((section) => {
      const sectionData = result.find((x) => x._id === section);
      if (sectionData) {
        data[section] = sectionData;
      }
    });
    this.setState({ data });
  }

  /**
   * Renders app
   */
  render() {
    return (
      <Loader loader={this.loader} animation={LoadingAnimation} onSuccess={this.onSuccess} onError={this.onError} errorMessage={this.state.errorMessage}>
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
