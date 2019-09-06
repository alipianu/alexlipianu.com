import './icon-button.scss';
import React from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 * Renders icon button component
 * @param {*} props the component's properties
 * 
 * usage: <IconButton ariaLabel?="X" href?="Y" icon="Z" />
 */
const IconButton = (props) => (
  <a className={classnames('icon-button', props.className)}
    aria-label={props.ariaLabel || `${props.icon} button`}
    href={props.href || '#'}
    rel="noopener noreferrer"
    target="_blank">
    <FontAwesomeIcon icon={[props.prefix || 'fas', props.icon]} />
  </a>
);

export default IconButton;