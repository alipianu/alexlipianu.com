import React from 'react';
import { Section, Typewrite, Paragraphs } from '../../components/components';
import analytics from '../../general/analytics';

/**
 * Renders about section
 * @param {*} props the component's properties
 * 
 * usage: <AboutContainer analytics?={{...}} title="U" headshot="V" message?={{width?: 'W', text?: 'X'}} description?={{links: ['Y', ...], text?: 'Z'}} />
 */
const AboutContainer = (props) => {
  const analyticsObj = analytics.decorate(props.analytics, {tags: 'container-about'});
  return (
    <Section analytics={analyticsObj} className="about" theme="dark" title={props.title} headshot={props.headshot}>
      {props.message && props.message.width && props.message.text && (
        <Typewrite width={`${props.message.width}px`}>
          <h4>{props.message.text}</h4>
        </Typewrite>
      )}
      <br />
      <br />
      {props.description && props.description.text && (
        <Paragraphs analytics={analyticsObj} links={props.description.links}>{props.description.text}</Paragraphs>
      )}
    </Section>
  );
};

export default AboutContainer;