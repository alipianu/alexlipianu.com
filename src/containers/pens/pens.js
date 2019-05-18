import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import Codepen from 'react-codepen-embed';
import { Section } from '../../components/components';

/**
 * Container for pens section
 * 
 * usage: <PensContainer />
 */
class PensContainer extends React.Component {
  state = { loaded: false };

  /**
   * Loads container data
   */
  componentDidMount() {
    // TODO: move to DB
    const data = {
      title: 'Pens',
      description: 'Pens give me the freedom and opportunity to easily experiment with different front-end technologies and tools, all while having fun designing quirky little animations and art. Below you’ll find some of my pens along with their source code, feel free to checkout my CodePen for more!'
    };
    this.setState({ ...data, loaded: true });
  }

  /**
   * Renders pens section
   */
  render() {
    return this.state.loaded && (
      <Section theme="light" title={this.state.title} description={this.state.description}>
        <Container>
          <Row>
            <Col md={6}>
              <Codepen hash="pVazKa" user="alipianu" height={250} defaultTab="result" title="Hamburger Loading Animation (CSS + HTML)" loader={(props) => (props.error) ? <div>Error</div> : <div>Loading...</div>} />
            </Col>
            <Col md={6}>
              <Codepen hash="GGoNOa" user="alipianu" height={250} defaultTab="result" title="Paint Roller Loading Animation" loader={(props) => (props.error) ? <div>Error</div> : <div>Loading...</div>} />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Codepen hash="XYdpzP" user="alipianu" height={250} defaultTab="result" title="Alarm Clock Loading Screen" loader={(props) => (props.error) ? <div>Error</div> : <div>Loading...</div>} />
            </Col>
            <Col md={6}>
              <Codepen hash="XqXONv" user="alipianu" height={250} defaultTab="result" title="iPhone 8" loader={(props) => (props.error) ? <div>Error</div> : <div>Loading...</div>} />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Codepen hash="MzeJWZ" user="alipianu" height={250} defaultTab="result" title="Color-Changing Polyhedrons" loader={(props) => (props.error) ? <div>Error</div> : <div>Loading...</div>} />
            </Col>
            <Col md={6}>
              <Codepen hash="XyKxNq" user="alipianu" height={250} defaultTab="result" title="Coil Generator" loader={(props) => (props.error) ? <div>Error</div> : <div>Loading...</div>} />
            </Col>
          </Row>
        </Container>
      </Section>
    );
  }
};

export default PensContainer;