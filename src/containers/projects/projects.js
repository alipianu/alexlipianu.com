import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Section, Project } from '../../components/components';

/**
 * Container for projects section
 * 
 * usage: <ProjectsContainer />
 */
class ProjectsContainer extends React.Component {
  state = { loaded: false };

  /**
   * Loads container data
   */
  componentDidMount() {
    // TODO: move to DB
    const data = {
      title: 'Projects',
      description: 'The next coolest thing may just be right under your nose! Below you’ll find some of my personal projects with GitHub and download links, please feel free to try them out yourself!',
      entriesPerRow: 2,
      data: {
        tagMap: {
          languages: {
            color: '#03A9F4',
            accent: '#015a83'
          },
          frameworks: {
            color: '#4CAF50',
            accent: '#285c29'
          },
          libraries: {
            color: '#FF9800',
            accent: '#814e00'
          }
        },
        projects: [
          {
            title: 'Paint Street Fighter',
            image: 'assets/img/imgrypt/encrypt.png',
            description: 'Two-player retro street fighter video game featuring animated characters and health bars, soundtracks, and four maps to play on.',
            tools: {
              languages: ['Turing']
            },
            links: {
              github: 'https://github.com/alipianu/PSF',
              download: 'https://github.com/alipianu/PSF/archive/v1.0.0.zip'
            }
          },
          {
            title: 'Website',
            image: 'assets/img/site/about.png',
            description: 'My personal website that provides additional personal information and showcases all my projects.',
            tools: {
              languages: ['JavaScript', 'HTML', 'SCSS'],
              frameworks: ['React'],
              libraries: ['Bootstrap']
            },
            links: {
              github: 'https://github.com/alipianu/alipianu.github.io'
            }
          },
          {
            title: 'Imgrypt',
            image: 'assets/img/psf/map4.jpg',
            description: 'Steganography program that conceals and reveals messages in the pixel data of images, leaving no noticeable pixel noise. Encrypted pixel data is uncrackable and passwords have up to a 1 in 10^27 chance of being cracked.',
            tools: {
              languages: ['C#'],
              frameworks: ['.NET']
            },
            links: {
              github: 'https://github.com/alipianu/Imgrypt',
              download: 'https://github.com/alipianu/Imgrypt/archive/v1.0.0.zip'
            }
          }
        ]
      }
    };
    data.entriesPerRow = Math.round(data.entriesPerRow || 0);
    this.setState({ ...data, colWidth: Math.floor(12 / data.entriesPerRow), loaded: true });
  }

  /**
   * Renders project section
   */
  render() {
    return this.state.loaded && (
      <Section theme="dark" title={this.state.title} description={this.state.description}>
        <Container>
          {[...Array(Math.ceil(this.state.data.projects.length / this.state.entriesPerRow)).keys()].map((row) => {
            const start = row * this.state.entriesPerRow;
            return (
              <Row key={row} className="justify-content-md-center">
                {this.state.data.projects.slice(start, start + this.state.entriesPerRow).map((project, col) => (
                  <Col key={col} md={this.state.colWidth}>
                    <Project {...{...project, tagMap: this.state.data.tagMap}} />
                  </Col>
                ))}
              </Row>
            );
          })}
        </Container>
      </Section>
    );
  }
};

export default ProjectsContainer;