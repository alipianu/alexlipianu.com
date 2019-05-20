import './splash.scss';
import React from 'react';
import { Splash } from '../../components/components';

/**
 * Renders splash section
 * @param {*} props - the component's properties
 * 
 * usage: <SplashContainer name?="X" title?="Y" src="Z" />
 */
const SplashContainer = (props) => (
  <Splash src={props.src}>
    <h1 id="name">{props.name || ''}</h1>
    <p id="title">{props.title || ''}</p>
  </Splash>
);

export default SplashContainer;