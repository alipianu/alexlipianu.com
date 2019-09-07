import './section.scss';
import React from 'react';
import classnames from 'classnames';
import { Container, Row, Col } from 'react-bootstrap';
import { Track, events } from '../track/track';
import analytics from '../../general/analytics';

/**
 * Renders section component
 * @param {*} props the component's properties
 * 
 * usage: <Section analytics?={{...}} theme?="X" className?="Y" title?="Z" description?="" headshot?="">...</Section>
 */
const Section = (props) => (
  <section className={classnames(props.theme, props.className)}>
    <Container>
        {props.title &&
          <Track analytics={analytics.decorate(props.analytics, {tags: 'title'}, events.visibility)}>
            <h2>{props.title}</h2>
          </Track>
        }
      {props.description &&
        <Track analytics={analytics.decorate(props.analytics, {tags: 'description'}, events.visibility)}>
          <p>{props.description}</p>
        </Track>
      }
      {!props.headshot ? props.children : (
        <Row className="align-items-center">
          <Col md={5} lg={4}>
            <Track analytics={analytics.decorate(props.analytics, {tags: 'headshot'}, events.visibility)}>
              <img src={props.headshot} className="headshot" alt="headshot" />
            </Track>
          </Col>
          <Col md={6} lg={7} className="offset-md-1">
            {props.children}
          </Col>
        </Row>
      )}
    </Container>
  </section>
);

export default Section;