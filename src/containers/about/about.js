import React from 'react';
import { Section, Typewrite, Paragraph } from '../../components/components';

/**
 * Renders about section
 * @param {*} props the component's properties
 * 
 * usage: <AboutContainer title="U" headshot="V" message?={{width?: 'W', text?: 'X'}} description?={{links: ['Y', ...], text?: 'Z'}} />
 */
const AboutContainer = (props) => {
  // analytics tags
  const tags = [...(props.analytics || []), 'about'];
  return (
    <Section analytics={tags} className="about" theme="dark" title={props.title} headshot={props.headshot}>
      {props.message && props.message.width && props.message.text && (
        <Typewrite width={`${props.message.width}px`}>
          <h4>{props.message.text}</h4>
        </Typewrite>
      )}
      <br />
      <br />
      {props.description && props.description.text && (
        <Paragraph analytics={tags} links={props.description.links}>{props.description.text}</Paragraph>
      )}
    </Section>
  );
};

export default AboutContainer;