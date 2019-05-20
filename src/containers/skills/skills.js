import './skills.scss';
import React from 'react';
import { Section, Collapsible, SkillBar } from '../../components/components';

/**
 * Renders skills section
 * @param {*} props - the component's properties
 * 
 * usage: <SkillsContainer entriesPerRow?="X" title="X" description="Y" groups={[{name: 'Z', data: [...]}, ...]} />
 */
const SkillsContainer = (props) => {
  const entriesPerRow = Math.round(props.entriesPerRow || 0);
  const colWidth = Math.floor(12 / entriesPerRow);
  return (
    <Section theme="dark" title={props.title} description={props.description}>
      <Collapsible.Grid className="grid-skills">
        {props.groups.map((group) => (
          [<h6>{group.name}</h6>, ...[...Array(Math.ceil(group.data.length / entriesPerRow)).keys()].map((row) => {
            const start = row * entriesPerRow;
            return (
              <Collapsible.Row key={row}>
                {group.data.slice(start, start + entriesPerRow).map((skill, col) => (
                  <Collapsible.Col key={col} md={colWidth} body={skill.details}>
                    <SkillBar label={skill.label} level={skill.level} />
                  </Collapsible.Col>
                ))}
              </Collapsible.Row>
            );
          })]
        ))}
      </Collapsible.Grid>
    </Section>
  );
};

export default SkillsContainer;