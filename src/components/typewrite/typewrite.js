import './typewrite.scss';
import React from 'react';
import { Hoc } from '../components';

/**
 * Renders typewrite component
 * @param {*} props the component's properties
 * 
 * usage: <Typewrite width="X%">...</Typewrite>
 */
const Typewrite = (props) => (
  <>
    {React.Children.map(props.children, child => (React.cloneElement(child, { className: 'typewrite' })))}
    <style dangerouslySetInnerHTML={{__html: `
      .track-visible.was-visible .typewrite {
        width: ${props.width || '100%'};
      }
    `}} />
  </>
)

export default Hoc.trackVisibility(Typewrite, { unregisterOnIntersect: true });