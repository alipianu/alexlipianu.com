import './project.scss';
import React from 'react';
import { Card } from 'react-bootstrap';
import { IconButton, Tag } from '../components';
import { Track, events } from '../track/track';
import analytics from '../../general/analytics';

/**
 * Renders project component
 * @param {*} props the component's properties
 * 
 * usage: <Project analytics?={{...}} image?="R" title?="S" description?="T" links?={{download?: 'U', github?: 'V'}} tools?={{..., W: ['X', ...]}} tagMap={{..., W: {color?: 'Y', accent?: 'Z'}}} />
 */
const Project = (props) => {
  const analyticsObj = analytics.decorate(props.analytics, {tags: 'project', name: `project-${(props.title + '').toLowerCase().replace(/\s/g, '')}`}, events.visibility);
  return (
    <Track analytics={analyticsObj}>
      <Card className='project'>
        <div>
          {props.image && <Card.Img variant="top" src={props.image} alt={`${props.title} thumbnail`} />}
        </div>
        {props.links && (
          <div className="card-buttons">
            {props.links.download && <IconButton analytics={analyticsObj} className="project-button" ariaLabel="Download" href={props.links.download} prefix="fas" icon="download" />}
            {props.links.github && <IconButton analytics={analyticsObj} className="project-button" ariaLabel="GitHub" href={props.links.github} prefix="fab" icon="github" />}
          </div>
        )}
        <Card.Body>
          {props.title && <Card.Title>{props.title}</Card.Title>}
          {props.description && <Card.Text>{props.description}</Card.Text>}
          {props.tools && (
            <div className="tools">
              {Object.keys(props.tools).map((type) => props.tools[type].map((tool, i) => <Tag key={i} analytics={analyticsObj} type={type} typeMap={props.tagMap} label={tool} />))}
            </div>
          )}
        </Card.Body>
      </Card>
    </Track>
  );
}
            
export default Project;