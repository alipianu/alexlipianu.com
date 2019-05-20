import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { Section, Codepen } from '../../components/components';

/**
 * Renders pens section
 * @param {*} props - the component's properties
 * 
 * usage: <PensContainer title="V" description="W" entriesPerRow?={X} data?={[{hash: "Y", title: "Z" }, ...]} />
 */
const PensContainer = (props) => {
  const entriesPerRow = Math.round(props.entriesPerRow || 0);
  const colWidth = Math.floor(12 / props.entriesPerRow);
  return (
    <Section theme="light" title={props.title} description={props.description}>
      <Container>
          {[...Array(Math.ceil(props.data.length / entriesPerRow)).keys()].map((row) => {
            const start = row * entriesPerRow;
            return (
              <Row key={row} className="justify-content-md-center">
                {props.data.slice(start, start + entriesPerRow).map((pen, col) => (
                  <Col key={col} md={colWidth}>
                    <Codepen title={pen.title} hash={pen.hash} user="alipianu" height={300} defaultTab="result" />
                  </Col>
                ))}
              </Row>
            );
          })}
        </Container>
    </Section>
  );
};

export default PensContainer;