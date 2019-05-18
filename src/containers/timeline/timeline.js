import React from 'react';
import { Container } from 'react-bootstrap';
import { Timeline, Section } from '../../components/components';

/**
 * Container for timeline section
 * 
 * usage: <TimelineContainer />
 */
class TimelineContainer extends React.Component {
  state = { loaded: false };

  /**
   * Loads container data
   */
  componentDidMount() {
    // TODO: move to DB
    const data = {
      title: 'Timeline',
      description: 'Below you\'ll find a timeline of my projects, co-ops, internships, and design teams throughout my high school and undergrad education. Hover the timeline entries to view their descriptions.', 
      data: [
        {
          year: 2016,
          color: 'darkcyan',
          entries: [
            {
              shape: 'circle',
              content: 'Software Developer at InFlight Corp. (Jul. – Sept.)'
            }
          ]
        },
        {
          year: 2017,
          color: 'darkorchid',
          entries: [
            {
              shape: 'circle',
              content: 'Software Developer in Test at InFlight Corp. (Jul. – Sept.)'
            },
            {
              shape: 'square',
              content: 'Start of BCS Degree at University of Waterloo (Sept.)'
            },
            {
              shape: 'circle',
              content: 'Simulation Sub Team Member at WATonomous (Sept. – Dec.)'
            }
          ]
        },
        {
          year: 2018,
          color: 'darkslateblue',
          entries: [
            {
              shape: 'circle',
              content: 'Application Developer at CareGo Tek Inc. (Apr. – Aug.)'
            }
          ]
        },
        {
          year: 2019,
          color: '#E91E63',
          entries: [
            {
              shape: 'circle',
              content: 'Full Stack Developer at Avidbots Corp. (Jan. – Apr.)'
            }
          ]
        }
      ]
    }
    this.setState({ ...data, loaded: true });
  }

  /**
   * Renders timeline section
   */
  render() {
    return this.state.loaded && (
      <Section theme="light" title={this.state.title} description={this.state.description}>
        <Container>
          <Timeline data={this.state.data} />
        </Container>
      </Section>
    );
  }
};

export default TimelineContainer;