import './link.scss';
import React from 'react';

/**
 * Renders a link component
 * @param {*} props - the component's properties
 * 
 * usage: <Link ariaLabel?="W" href?="X" target?="Y" rel?="Z">...</Link>
 */
const Link = (props) => (
  <a className="link"
    aria-label={props.ariaLabel || ''}
    href={props.href || '#'}
    target="_blank"
    rel="noopener noreferrer">
  {props.children}
  </a>
);

export default Link;