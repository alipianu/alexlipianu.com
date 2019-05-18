import React from 'react';
import { Col as BootstrapCol } from 'react-bootstrap';
import Body from '../body/body';
import Head from '../head/head';

/**
 * Renders collapsible column component
 * 
 * usage: <Collapsible.Col body?={...}>...</Collapsible.Col>
 */
const Col = React.forwardRef((props, ref) => (
  <BootstrapCol sm={props.sm} md={props.md} lg={props.lg}>
    <Head ref={ref} id={props.id} expandedId={props.expandedId} onToggle={props.onToggle} body={props.body}>
      {props.children}
    </Head>
    {props.body && (
      <Body expanded={props.id === props.expandedId && !props.isDesktop}>
      {props.body}
      </Body>
    )}
  </BootstrapCol>
));

// init display name
Col.displayName = 'Collapsible.Col';

export default Col;