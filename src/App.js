import './App.scss';
import React from 'react';
import analytics from './general/analytics';
import request from './general/request';
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

  componentDidMount() {
    analytics.start();
  }

  async componentWillUnmount() {
    await analytics.end();
  }

  /**
   * Fetch app data
   */
  loader() {
    return request.get('sections');
  }

  /**
   * Load data into containers
   */
  onSuccess(result) {
    result = result.data;
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
   * Handle server errors
   */
  onError(error) {
    // do nothing right now, TODO
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
