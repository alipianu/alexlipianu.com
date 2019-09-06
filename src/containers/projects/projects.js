import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Section, Project } from '../../components/components';

/**
 * Renders projects section
 * @param {*} props the component's properties
 * 
 * usage: <ProjectsContainer entriesPerRow?={X} title="Y" description="Z" data={{projects: [...], tagMap: ...}} />
 */

 const ProjectsContainer = (props) => {
  // analytics tags
  const tags = [...(props.analytics || []), 'projects'];
  const entriesPerRow = Math.round(props.entriesPerRow || 0);
  const colWidth = Math.floor(12 / props.entriesPerRow);
  return (
    <Section analytics={tags} theme="dark" title={props.title} description={props.description}>
      <Container>
        {[...Array(Math.ceil(props.data.projects.length / entriesPerRow)).keys()].map((row) => {
          const start = row * entriesPerRow;
          return (
            <Row key={row} className="justify-content-md-center">
              {props.data.projects.slice(start, start + entriesPerRow).map((project, col) => (
                <Col key={col} md={colWidth}>
                  <Project analytics={tags} {...{...project, tagMap: props.data.tagMap}} />
                </Col>
              ))}
            </Row>
          );
        })}
      </Container>
    </Section>
  );
 };

export default ProjectsContainer;