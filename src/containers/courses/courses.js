import './courses.scss';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Ribbon, OverflowScroll } from '../../components/components';

const CoursesContainer = (props) => {
  const mid = Math.ceil(props.data.courses.length / 2);
  return (
    <OverflowScroll>
      <div className="container-courses animate__fade-in-down">
        <div className="container-courses__column">
          {[...Array(mid).keys()].map((i) => (
            <Ribbon key={i} type="right" title={props.data.courses[i].subject + ' ' + props.data.courses[i].code}>
              {/* prevent whitespace wrapping of (i) icon at end of course name by grouping desired words into 'blocks' with white-space: no-wrap */}
              {props.data.courses[i].title.split(' ').map((word, i, arr) => (
                <span key={i} className="format__textblock">{word}{i === arr.length - 1 && <a className="themify--active-color-hover" href={props.data.courses[i].url} rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={['fas', 'info-circle']} /></a>}</span>
              ))}
            </Ribbon>
          ))}
        </div>
        <div className="container-courses__column">
          {[...Array(props.data.courses.length - mid).keys()].map((i) => (
            <Ribbon key={i} type="right" title={props.data.courses[mid + i].subject + ' ' + props.data.courses[mid + i].code}>
              {/* prevent whitespace wrapping of (i) icon at end of course name by grouping desired words into 'blocks' with white-space: no-wrap */}
              {props.data.courses[mid + i].title.split(' ').map((word, i, arr) => (
                <span key={i} className="format__textblock">{word}{i === arr.length - 1 && <a className="themify--active-color-hover" href={props.data.courses[mid + i].url} rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={['fas', 'info-circle']} /></a>}</span>
              ))}
            </Ribbon>
          ))}
        </div>
      </div>
    </OverflowScroll>
  );
};

export default CoursesContainer;