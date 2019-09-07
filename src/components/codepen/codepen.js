import './codepen.scss';
import React from 'react';
import { Track, events } from '../track/track';
import analytics from '../../general/analytics';

/**
 * Renders codepen embed
 * @param {*} props the component's properties
 * 
 * usage: <Codepen analytics?={{...}} height="U" title="V" hash="W" themeId="X" defaultTab="Y" user="Z" />
 */
const Codepen = (props) => (
  <Track analytics={analytics.decorate(props.analytics, {tags: 'pen', name: `pen-${props.hash}`}, [events.visibility, events.hover, events.clicks])}>
    <div className="codepen">
      <iframe height={props.height} style={{ width: '100%' }} scrolling="no" title={props.title} src={`//codepen.io/alipianu/embed/${props.hash}/?height=${props.height}&theme-id=${props.themeId}&default-tab=${props.defaultTab}`} frameBorder="no" allowtransparency="true" allowFullScreen={true}>
        See the Pen <a href={`https://codepen.io/${props.user}/pen/${props.hash}/`}>{props.title}</a>
        by {props.user} (<a href={`https://codepen.io/${props.user}`}>@{props.user}</a>)
            on <a href="https://codepen.io">CodePen</a>.
      </iframe>
    </div>
  </Track>
);

export default Codepen;