import React from 'react';
import { Container } from 'react-bootstrap';
import { Timeline, Section } from '../../components/components';
import analytics from '../../general/analytics';

/**
 * Renders timeline section
 * @param {*} props the component's properties
 * 
 * usage: <TimelineContainer analytics?={{...}} title="V" description="W" data={[{year?: 'X', color?: 'Y', entries: [{shape: ('circle' || *), content: 'Z'}, ...]}]} />
 */
const TimelineContainer = (props) => {
  const analyticObj = analytics.decorate(props.analytics, {tags: 'container-timeline'});
  return (
    <Section analytics={analyticObj} theme="light" title={props.title} description={props.description}>
      <Container>
        <Timeline analytics={analyticObj} data={props.data} />
      </Container>
    </Section>
  );
};

export default TimelineContainer;