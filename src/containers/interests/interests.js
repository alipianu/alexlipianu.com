import './interests.scss';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { OverflowScroll } from '../../components/components';

const InterestsContainer = (props) => {
  const mid = Math.floor(props.data.interests.length / 2);
  return (
    <OverflowScroll>
      <div className="container-interests animate__fade-in-down">
        <div className="container-interests__column">
          {[...Array(mid).keys()].map((i) => (
            <p key={i}>
              <FontAwesomeIcon className="container-interests__icon" icon={[props.data.interests[i].icon.style || 'fas', props.data.interests[i].icon.name]} />
              {props.data.interests[i].text}
            </p>
          ))}
        </div>
        <div className="container-interests__column">
          {[...Array(props.data.interests.length - mid).keys()].map((i) => (
            <p key={i}>
              <FontAwesomeIcon className="container-interests__icon" icon={[props.data.interests[mid + i].icon.style || 'fas', props.data.interests[mid + i].icon.name]} />
              {props.data.interests[mid + i].text}
            </p>
          ))}
        </div>
      </div>
    </OverflowScroll>
  );
};

export default InterestsContainer;