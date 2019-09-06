import './section.scss';
import React from 'react';
import classnames from 'classnames';
import { Container, Row, Col } from 'react-bootstrap';

/**
 * Renders section component
 * @param {*} props the component's properties
 * 
 * usage: <Section theme?="X" className?="Y" title?="Z" description?="" headshot?="">...</Section>
 */
const Section = (props) => (
  <section className={classnames(props.theme, props.className)}>
    <Container>
      {props.title && <h2>{props.title}</h2>}
      {props.description && <p>{props.description}</p>}
      {!props.headshot ? props.children : (
        <Row className="align-items-center">
          <Col md={5} lg={4}>
            <img src={props.headshot} className="headshot" alt="headshot" />
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