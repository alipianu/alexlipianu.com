import './overflow-scroll.scss';
import React from 'react';

/**
 * Overflow scroll component
 * 
 * usage: <OverflowScroll>...</OverflowScroll>
 */
const OverflowScroll = (props) => (props.children &&
  <div className="overflow-scroll">
    <div className="overflow-scroll__child">
      {props.children}
    </div>
  </div>
);

export default OverflowScroll;