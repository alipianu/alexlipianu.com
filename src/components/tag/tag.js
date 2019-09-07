import './tag.scss';
import React from 'react';
import classnames from 'classnames';
import { Track, events } from '../track/track';
import analytics from '../../general/analytics';

/**
 * Renders tag component
 * @param {*} props - the component's properties
 * 
 * usage: <Tag analytics?={{...}} className?="V" type?="W" label?="X" typeMap?={{ color: 'Y', accent: 'X' }} />
 */
const Tag = (props) => {
  const styling = props.typeMap && props.typeMap[props.type];
  return (
    <Track analytics={analytics.decorate(props.analytics, {tags: 'tool', name: `tool-${(props.label + '').toLowerCase().replace(/\s/g, '')}`}, [events.clicks, events.hover])}>
      <div style={styling ? { backgroundColor: styling.color, borderColor: styling.accent } : {}} className={classnames('tag', `tag-${props.type || 'none'}`, props.className)}>
        <span>{props.label || ''}</span>
      </div>
    </Track>
  );
};

export default Tag;