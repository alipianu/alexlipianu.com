import './skills.scss';
import React from 'react';
import { Section, Collapsible, SkillBar } from '../../components/components';

/**
 * Container for skills section
 * 
 * usage: <SkillsContainer />
 */
class SkillsContainer extends React.Component {
  state = { loaded: false };

  /**
   * Loads container data
   */
  componentDidMount() {
    // TODO: move to DB
    const data = {
      title: 'Skills',
      description: 'With over one year of work experience and several completed projects, I\'ve managed to accumulate experience with a large variety of languages, frameworks, and technologies.',
      entriesPerRow: 4,
      data: [
        {
          title: 'Languages',
          skills: [
            {
              label: 'JavaScript',
              level: 'expert',
              details: ''
            },
            {
              label: 'C#',
              level: 'advanced',
              details: ''
            },
            {
              label: 'C++',
              level: 'advanced',
              details: ''
            },
            {
              label: 'C',
              level: 'intermediate',
              details: ''
            },
            {
              label: 'PHP',
              level: 'intermediate',
              details: ''
            },
            {
              label: 'Bash',
              level: 'intermediate',
              details: ''
            }
          ]
        },
        {
          title: 'Frameworks & Libraries',
          skills: [
            {
              label: 'Bootstrap',
              level: 'expert',
              details: ''
            },
            {
              label: 'Angular',
              level: 'advanced',
              details: ''
            },
            {
              label: 'Angular.js',
              level: 'advanced',
              details: ''
            },
            {
              label: 'RxJS',
              level: 'advanced',
              details: ''
            },
            {
              label: 'ASP.NET MVC',
              level: 'advanced',
              details: ''
            },
            {
              label: 'jQuery',
              level: 'advanced',
              details: ''
            },
            {
              label: 'React',
              level: 'intermediate',
              details: ''
            }
          ]
        },
        {
          title: 'Databases',
          skills: [
            {
              label: 'SQL',
              level: 'intermediate',
              details: ''
            },
            {
              label: 'MongoDB',
              level: 'novice',
              details: ''
            }
          ]
        },
        {
          title: 'Other',
          skills: [
            {
              label: 'HTML/PUG',
              level: 'expert',
              details: ''
            },
            {
              label: 'CSS/SCSS',
              level: 'expert',
              details: ''
            },
            {
              label: 'Node.js',
              level: 'intermediate',
              details: ''
            },
            {
              label: 'LINQ',
              level: 'intermediate',
              details: ''
            },
            {
              label: 'Docker',
              level: 'novice',
              details: ''
            },
            {
              label: 'Kubernetes',
              level: 'novice',
              details: ''
            }
          ]
        }
      ]
    };
    const entriesPerRow = Math.round(data.entriesPerRow || 0);
    this.setState({ ...data, entriesPerRow: entriesPerRow, colWidth: Math.floor(12 / entriesPerRow), loaded: true });
  }

  /**
   * Renders skills section
   */
  render() {
    return this.state.loaded && (
      <Section theme="dark" title={this.state.title} description={this.state.description}>
        <Collapsible.Grid className="grid-skills">
          {this.state.data.map((data) => (
            [<h6>{data.title}</h6>, ...[...Array(Math.ceil(data.skills.length / this.state.entriesPerRow)).keys()].map((row) => {
              const start = row * this.state.entriesPerRow;
              return (
                <Collapsible.Row key={row}>
                  {data.skills.slice(start, start + this.state.entriesPerRow).map((skill, col) => (
                    <Collapsible.Col key={col} md={this.state.colWidth} body={skill.details}>
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
  }
};

export default SkillsContainer;