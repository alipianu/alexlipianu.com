import React from 'react';

/**
 * Renders codepen embed
 * @param {*} props - the component's properties
 * 
 * usage: <Codepen height="U" title="V" hash="W" themeId="X" defaultTab="Y" user="Z" />
 */
const Codepen = (props) => (
  <iframe height={props.height} style={{ width: '100%' }} scrolling="no" title={props.title} src={`//codepen.io/alipianu/embed/${props.hash}/?height=${props.height}&theme-id=${props.themeId}&default-tab=${props.defaultTab}`} frameBorder="no" allowtransparency="true" allowFullScreen={true}>
    See the Pen <a href={`https://codepen.io/${props.user}/pen/${props.hash}/`}>{props.title}</a>
    by {props.user} (<a href={`https://codepen.io/${props.user}`}>@{props.user}</a>)
        on <a href="https://codepen.io">CodePen</a>.
  </iframe>
);

export default Codepen;