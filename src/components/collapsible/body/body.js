import './body.scss';
import React from 'react';
import classnames from 'classnames';
import analytics from '../../../general/analytics';
import { Track, events } from '../../track/track';

/**
 * Renders collapsible body component
 * 
 * usage: N/A, only used internally by the Row and Col collapsible components
 */
const Body = (props) => (
  <Track analytics={analytics.decorate(props.analytics, {tags: 'body', name: 'body'}, events.visibility)}>
    <div className={classnames('body-collapse', (props.expanded ? 'expanded' : ''))}>
      {props.children}
    </div>
  </Track>
);

export default Body;