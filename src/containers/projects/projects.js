import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Section, Project } from '../../components/components';
import analytics from '../../general/analytics';

/**
 * Renders projects section
 * @param {*} props the component's properties
 * 
 * usage: <ProjectsContainer analytics?={{...}} entriesPerRow?={X} title="Y" description="Z" data={{projects: [...], tagMap: ...}} />
 */

 const ProjectsContainer = (props) => {
  const analyticsObj = analytics.decorate(props.analytics, {tags: 'container-projects'});
  const entriesPerRow = Math.round(props.entriesPerRow || 0);
  const colWidth = Math.floor(12 / props.entriesPerRow);
  return (
    <Section analytics={analyticsObj} theme="dark" title={props.title} description={props.description}>
      <Container>
        {[...Array(Math.ceil(props.data.projects.length / entriesPerRow)).keys()].map((row) => {
          const start = row * entriesPerRow;
          return (
            <Row key={row} className="justify-content-md-center">
              {props.data.projects.slice(start, start + entriesPerRow).map((project, col) => (
                <Col key={col} md={colWidth}>
                  <Project analytics={analyticsObj} {...{...project, tagMap: props.data.tagMap}} />
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