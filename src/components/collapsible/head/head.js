import './head.scss';
import React from 'react';
import classnames from 'classnames';
import analytics from '../../../general/analytics';
import { Track, events } from '../../track/track';

/**
 * Renders collapsible head component
 * 
 * usage: N/A, only used internally by the Col collapsible component
 */
const Head = React.forwardRef((props, ref) => (
  <Track analytics={analytics.decorate(props.analytics, {tags: 'head', name: 'head'}, [events.visibility, events.hover, events.clicks])}>
    {/* note: wrapped in empty div because Track component overrides the onClick handler of children */}
    <div>
      <div ref={ref} className={classnames('head-collapse', (props.body ? 'has-body' : ''), (props.id === props.expandedId ? 'expanded' : ''))} onClick={() => props.body && props.onToggle(props.id)}>
        {props.children}
      </div>
    </div>
  </Track>
));

export default Head;