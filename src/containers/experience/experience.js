import './experience.scss';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Section, Collapsible } from '../../components/components';

/**
 * Container for experience section
 * 
 * usage: <ExperienceContainer />
 */
class ExperienceContainer extends React.Component {
  state = { loaded: false };

  /**
   * Loads container data
   */
  componentDidMount() {
    // TODO: move to DB
    const data = {
      title: 'Experience',
      description: 'Flexibility, adaptability and versatility are some of the most important traits that a software developer can possess. That is why I have taken it upon myself to learn as much as I can, both inside and outside the workplace, in several different areas of software development. Toggle the icons below to learn about my experiences in each area.',
      data: [
        {
          details: 'Looking for a developer with experience in testing or developing testing frameworks and applications? Having spent two summers at InFlight Corporation developing internal testing tools for enterprise systems, testing serves as my backbone and one of my earliest exposures to software development. At InFlight Corporation, I redesigned the UI of and added Google Chrome support to an internal demoing tool, as well as added new features to an internal Fiddler debugging extension. I also developed an automated client-side black-box web application testing framework, and conducted functional testing of HTTP requests, SSO, JSON objects, and web page elements.',
          icon: 'cogs',
          label: 'Testing'
        },
        {
          details: 'Need an experienced and enthusiastic web developer on your team? At the end of my freshman year of university, I worked at CareGo Tek Inc. doing full-stack web development and basic database administration for a web application. On the front-end, I added new pages, styled pages with both static and dynamic layouts, incorporated new interactive elements, created components for tables and forms, and improved mobile responsiveness. On the back-end, I optimized database queries, lowered the number of database calls, reduced web page load times, and improved the efficiency of frequently used data transformations and computations. In my spare time, when I’m not busy developing and maintaining this website, I like to practice my front-end web development skills and make contributions to the web development community through CodePen.',
          icon: 'globe',
          label: 'Web'
        },
        {
          details: 'Graphics and games have always been two of my greatest interests. In my junior year of high school, my interest in games led me to create a two-player street fighter videogame called Paint Street Fighter. The following year, my interest in low-level graphics drew me to DirectX 12 - reading and working through Frank D. Luna’s 3D Programming with DirectX 12. Throughout my freshman year of university, I worked on a student design team called WATonomous at the University of Waterloo, where I focused on vehicle camera simulation. During this period, I also developed a steganography program, Imgrypt, that encrypts and decrypts messages from image pixel data.',
          icon: 'gamepad',
          label: 'Games'
        }
      ]
    };
    this.setState({ ...data, colWidth: Math.floor(12 / data.data.length), loaded: true });
  }

  /**
   * Renders experience section
   */
  render() {
    return this.state.loaded && (
      <Section theme="light" title={this.state.title} description={this.state.description}>
        <Collapsible.Grid className="grid-experience">
          <Collapsible.Row>
            {this.state.data.map((experience, i) => (
              <Collapsible.Col key={i} md={this.state.colWidth} body={experience.details}>
                <FontAwesomeIcon icon={experience.icon} />
                <h5>{experience.label}</h5>
              </Collapsible.Col>
            ))}
          </Collapsible.Row>
        </Collapsible.Grid>
      </Section>
    );
  }
};

export default ExperienceContainer;