import './icon-button.scss';
import React from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Track, events } from '../track/track';
import analytics from '../../general/analytics';

/**
 * Renders icon button component
 * @param {*} props the component's properties
 * 
 * usage: <IconButton analytics?={{...}} ariaLabel?="X" href?="Y" icon="Z" />
 */
const IconButton = (props) => (
  <Track analytics={analytics.decorate(props.analytics, {tags: 'iconbtn', name: `iconbtn-${(props.icon + '').toLowerCase().replace(/\s/g, '')}`}, [events.clicks, events.hover])}>
    <a className={classnames('icon-button', props.className)}
      aria-label={props.ariaLabel || `${props.icon} button`}
      href={props.href || '#'}
      rel="noopener noreferrer"
      target="_blank">
      <FontAwesomeIcon icon={[props.prefix || 'fas', props.icon]} />
    </a>
  </Track>
);

export default IconButton;