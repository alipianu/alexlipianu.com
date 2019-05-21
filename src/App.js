import './App.scss';
import React from 'react';
import {
  SplashContainer,
  AboutContainer,
  TimelineContainer,
  SkillsContainer,
  ExperienceContainer,
  ProjectsContainer,
  PensContainer
} from './containers/containers';

/**
 * App component
 */
class App extends React.Component {
  state = { data: null };

  /**
   * Loads app data
   */
  componentDidMount() {
    fetch('https://api.alexlipianu.com')
      .then((response) => response.json())
      .then((json) => {
        const data = {};
        const sections = ['splash', 'about', 'timeline', 'skills', 'experience', 'projects', 'pens'];
          sections.forEach((section) => {
            const sectionJson = json.find((x) => x._id === section);
            if (sectionJson) {
              data[section] = sectionJson;
            }
          });
        this.setState({data});
      });
  }

  /**
   * Renders app
   */
  render() {
    return this.state.data && (
      <>
        <SplashContainer {...this.state.data.splash} />
        <AboutContainer {...this.state.data.about} />
        <TimelineContainer {...this.state.data.timeline} />
        <SkillsContainer {...this.state.data.skills} />
        <ExperienceContainer {...this.state.data.experience} />
        <ProjectsContainer {...this.state.data.projects} />
        <PensContainer {...this.state.data.pens} />
      </>
    );
  }
}

export default App;
