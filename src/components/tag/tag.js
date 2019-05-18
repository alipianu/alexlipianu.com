import './tag.scss';
import React from 'react';
import classnames from 'classnames';

/**
 * Renders tag component
 * @param {*} props - the component's properties
 * 
 * usage: <Tag className?="V" type?="W" label?="X" typeMap?={{ color: 'Y', accent: 'X' }} />
 */
const Tag = (props) => {
  const styling = props.typeMap && props.typeMap[props.type];
  return <div style={styling ? { backgroundColor: styling.color, borderColor: styling.accent } : {}} className={classnames('tag', `tag-${props.type || 'none'}`, props.className)}><span>{props.label || ''}</span></div>
};

export default Tag;