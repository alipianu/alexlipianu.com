import './head.scss';
import React from 'react';
import classnames from 'classnames';

/**
 * Renders collapsible head component
 * 
 * usage: N/A, only used internally by the Col collapsible component
 */
const Head = React.forwardRef((props, ref) => (
  <div ref={ref} className={classnames('head-collapse', (props.body ? 'has-body' : ''), (props.id === props.expandedId ? 'expanded' : ''))} onClick={() => props.body && props.onToggle(props.id)}>
    {props.children}
  </div>
));

export default Head;