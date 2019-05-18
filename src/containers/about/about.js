import React from 'react';
import { Section, Typewrite, Paragraph } from '../../components/components';

/**
 * Container for about section
 * 
 * usage: <AboutContainer />
 */
class AboutContainer extends React.Component {
  state = { loaded: false };

  /**
   * Loads container data
   */
  componentDidMount() {
    // TODO: move to DB
    const data = {
      headshot: 'assets/img/headshot.jpg',
      message: {
        text: 'Hi there, I\'m Alex!',
        width: 247
      },
      introduction: {
        text: 'My name is Alexander Lipianu and I am a Software Developer from Ontario, Canada.\nI am a second-year student pursuing a Bachelor of Computer Science at the {{0}}. Passionate about software, my learning doesn’t stop in the classroom. In my spare time I love to experiment with different languages, frameworks, and areas of software development – always eager to expand my horizons and push boundaries.\nCurrently, I am working at as a Web Developer Co-op at {{1}}.\nMy previous positions include Web Developer at {{1}}, Application Developer at {{2}}, Software Developer at {{3}}, and Simulation Sub Team Member on the {{4}} student design team.',
        links: [
          {
            label: 'University of Waterloo',
            href: 'https://cs.uwaterloo.ca/'
          },
          {
            label: 'Avibots Corp.',
            href: 'https://www.avidbots.com/'
          },
          {
            label: 'CareGo Tek Inc.',
            href: 'https://carego.com/'
          },
          {
            label: 'InFlight Corp.',
            href: 'https://www.inflightintegration.com/'
          },
          {
            label: 'WATonomous',
            href: 'https://watonomous.ca/'
          }
        ]
      }
    };
    this.setState({...data, loaded: true});
  }

  /**
   * Renders about section
   */
  render() {
    return this.state.loaded && (
      <Section className="about" title="About" theme="dark" headshot={this.state.headshot}>
        <Typewrite width={`${this.state.message.width}px`}>
          <h4>{this.state.message.text}</h4>
        </Typewrite>
        <br />
        <br />
        <Paragraph links={this.state.introduction.links}>{this.state.introduction.text}</Paragraph>
      </Section>
    );
  }
};

export default AboutContainer;