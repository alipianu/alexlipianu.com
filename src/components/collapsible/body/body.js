import './body.scss';
import React from 'react';
import classnames from 'classnames';

/**
 * Renders collapsible body component
 * 
 * usage: N/A, only used internally by the Row and Col collapsible components
 */
const Body = (props) => (
  <div className={classnames('body-collapse', (props.expanded ? 'expanded' : ''))}>
    {props.children}
  </div>
);

export default Body;