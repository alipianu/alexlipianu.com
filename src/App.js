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

class App extends React.Component {
  render() {
    return (
      <>
        <SplashContainer />
        <AboutContainer />
        <TimelineContainer />
        <SkillsContainer />
        <ExperienceContainer />
        <ProjectsContainer />
        <PensContainer />
      </>
    );
  }
}

export default App;
