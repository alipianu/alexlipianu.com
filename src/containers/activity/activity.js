import './activity.scss';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Moment from 'react-moment';
import { Ribbon, OverflowScroll } from '../../components/components';

const ActivityContainer = (props) => (
  <OverflowScroll>
    <div className="container-activity animate__fade-in-down">
      {props.data.projects.map((project, key) => (
          <div key={key} className="container-activity__row">
            <Ribbon type="right" title={project.name}>
            <Moment fromNow>{project.lastActivity}</Moment>
              {project.private
                ?
                <span className="themify--disabled">
                  <FontAwesomeIcon icon={['fas', 'lock']} />
                </span>
                :
                <a className="themify--active-color-hover" href={project.url} rel="noopener noreferrer" target="_blank">
                  <FontAwesomeIcon icon={['fab', project.platform]} />
                </a>
              }
            </Ribbon>
            <p className="container-activity__description">{project.description}</p>
          </div>
        ))}
    </div>
  </OverflowScroll>
);

export default ActivityContainer;