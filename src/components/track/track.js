import React from 'react';

/**
 * Renders analytics components
 * 
 * usage: <Track analytics={{name?: 'Y', tags?: 'Z', events=([event, ...] || event)}}>...</Track>
 */
class Track extends React.Component {
 render() {
   return (
    <>{this.props.children}</>
  );
 }
};

/**
 * Analytics events to track
 */
const events = {
  visibility: 'visibility',
  clicks: 'clicks',
  hover: 'hover'
};

export { Track, events };