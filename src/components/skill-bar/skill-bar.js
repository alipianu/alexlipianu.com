import './skill-bar.scss';
import React from 'react';
import { Hoc } from '../components';

/**
 * Renders skillbar component
 * @param {*} props - the component's properties
 * 
 * usage: <SkillBar level?="X" label?="Y" />
 */
const SkillBar = (props) => (
  <div className={`skill skill-${props.level || 'none'}`}>
    {props.label && <div className="label">{props.label}</div>}
    <div className="skill-bar"><div></div></div>
  </div>
);

export default Hoc.trackVisibility(SkillBar, { unregisterOnIntersect: true });