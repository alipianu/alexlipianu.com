import React from 'react';
import { Col as BootstrapCol } from 'react-bootstrap';
import Body from '../body/body';
import Head from '../head/head';
import analytics from '../../../general/analytics';

/**
 * Renders collapsible column component
 * 
 * usage: <Collapsible.Col analytics?={{...}} body?={...}>...</Collapsible.Col>
 */
const Col = React.forwardRef((props, ref) => (
  <BootstrapCol sm={props.sm} md={props.md} lg={props.lg}>
    <Head analytics={analytics.decorate(props.analytics, {tags: 'collapsable', name: 'collapsable'})} ref={ref} id={props.id} expandedId={props.expandedId} onToggle={props.onToggle} body={props.body}>
      {props.children}
    </Head>
    {props.body && (
      <Body analytics={analytics.decorate(props.analytics, {tags: 'mobile > collapsable', name: 'mobile-collapsable'})} expanded={props.id === props.expandedId && !props.isDesktop}>
        {props.body}
      </Body>
    )}
  </BootstrapCol>
));

// init display name
Col.displayName = 'Collapsible.Col';

export default Col;