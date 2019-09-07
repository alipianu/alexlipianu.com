import './skills.scss';
import React from 'react';
import { Section, Collapsible, SkillBar } from '../../components/components';
import analytics from '../../general/analytics';

/**
 * Renders skills section
 * @param {*} props the component's properties
 * 
 * usage: <SkillsContainer analytics?={{...}} entriesPerRow?="X" title="X" description="Y" groups={[{name: 'Z', data: [...]}, ...]} />
 */
const SkillsContainer = (props) => {
  const analyticsObj = analytics.decorate(props.analytics, {tags: 'container-skills'});
  const entriesPerRow = Math.round(props.entriesPerRow || 0);
  const colWidth = Math.floor(12 / entriesPerRow);
  return (
    <Section analytics={analyticsObj} theme="dark" title={props.title} description={props.description}>
      <Collapsible.Grid className="grid-skills">
        {props.groups.map((group) => (
          [<h6>{group.name}:</h6>, ...[...Array(Math.ceil(group.data.length / entriesPerRow)).keys()].map((row) => {
            const start = row * entriesPerRow;
            return (
              <Collapsible.Row key={row}>
                {group.data.slice(start, start + entriesPerRow).map((skill, col) => {
                  const analyticsObj2 = analytics.decorate(analyticsObj, {name: `skillbar-${(skill.label + '').toLowerCase().replace(/\s/g, '')}`, tags: 'skillbar'})
                  return (
                    <Collapsible.Col analytics={analyticsObj2} key={col} md={colWidth} body={
                      !Array.isArray(skill.details) || !skill.details.length ? skill.details :
                        <ul>{skill.details.map((detail, i) => <li key={i}>{detail}</li>)}</ul>
                      }>
                      <SkillBar label={skill.label} level={skill.level} />
                    </Collapsible.Col>
                )})}
              </Collapsible.Row>
            );
          })]
        ))}
      </Collapsible.Grid>
    </Section>
  );
};

export default SkillsContainer;