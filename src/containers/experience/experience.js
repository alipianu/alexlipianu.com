import './experience.scss';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Section, Collapsible } from '../../components/components';
import analytics from '../../general/analytics';

/**
 * Renders experience section
 * @param {*} props the component's properties
 * 
 * usage: <ExperienceContainer analytics?={{...}} title="V" description="W" data={[{details: 'X', icon: 'Y', label?: 'Z'}, ...]} />
 */
const ExperienceContainer = (props) => {
  const analyticsObj = analytics.decorate(props.analytics, {tags: 'container-experience'});
  const colWidth = Math.floor(12 / props.data.length);
  return (
    <Section analytics={analyticsObj} theme="light" title={props.title} description={props.description}>
      <Collapsible.Grid className="grid-experience">
        <Collapsible.Row>
          {props.data.map((experience, i) => {
            const analyticsObj2 = analytics.decorate(analyticsObj, {tags: 'experience', name: `experience-${(experience.label + '').toLowerCase().replace(/\s/g, '')}`});
            return (
              <Collapsible.Col key={i} analytics={analyticsObj2} md={colWidth} body={experience.details}>
                <FontAwesomeIcon icon={experience.icon}/>
                {experience.label && <h5>{experience.label}</h5>}
              </Collapsible.Col>
          )})}
        </Collapsible.Row>
      </Collapsible.Grid>
    </Section>
  );
};

export default ExperienceContainer;