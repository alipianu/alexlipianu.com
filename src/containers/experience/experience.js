import './experience.scss';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Section, Collapsible } from '../../components/components';

/**
 * Renders experience section
 * @param {*} props - the component's properties
 * 
 * usage: <ExperienceContainer title="V" description="W" data={[{details: 'X', icon: 'Y', label?: 'Z'}, ...]} />
 */
const ExperienceContainer = (props) => {
  const colWidth = Math.floor(12 / props.data.length);
  return (
    <Section theme="light" title={props.title} description={props.description}>
      <Collapsible.Grid className="grid-experience">
        <Collapsible.Row>
          {props.data.map((experience, i) => (
            <Collapsible.Col key={i} md={colWidth} body={experience.details}>
              <FontAwesomeIcon icon={experience.icon} />
              {experience.label && <h5>{experience.label}</h5>}
            </Collapsible.Col>
          ))}
        </Collapsible.Row>
      </Collapsible.Grid>
    </Section>
  );
};

export default ExperienceContainer;