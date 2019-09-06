import React from 'react';
import { Container } from 'react-bootstrap';
import { Timeline, Section } from '../../components/components';

/**
 * Renders timeline section
 * @param {*} props the component's properties
 * 
 * usage: <TimelineContainer analytics?={['U', ...]} title="V" description="W" data={[{year?: 'X', color?: 'Y', entries: [{shape: ('circle' || *), content: 'Z'}, ...]}]} />
 */
const TimelineContainer = (props) => {
  // analytics tags
  const tags = [...(props.analytics || []), 'timeline'];
  return (
    <Section analytics={tags} theme="light" title={props.title} description={props.description}>
      <Container>
        <Timeline analytics={tags} data={props.data} />
      </Container>
    </Section>
  );
};

export default TimelineContainer;