import './footer.scss';
import React from 'react';
import { IconButton } from '../components';
import { Track, events } from '../track/track';
import analytics from '../../general/analytics';

/**
 * Renders footer component
 * 
 * usage: <Footer analytics?={{...}} />
 */
const Footer = (props) => {
  const analyticsObj = analytics.decorate(props.analytics, {tags: 'footer', name: 'footer'});
  const year = (new Date()).getFullYear();
  return (
    <footer>
      <div>
        <IconButton analytics={analyticsObj} className="footer-button" ariaLabel="Email" href="mailto:alexlipianu@live.ca?subject=Website%20Redirect" icon="envelope" />
        <IconButton analytics={analyticsObj} className="footer-button" ariaLabel="LinkedIn" href="https://ca.linkedin.com/in/alipianu" prefix="fab" icon="linkedin" />
        <IconButton analytics={analyticsObj} className="footer-button" ariaLabel="GitHub" href="https://github.com/alipianu" prefix="fab" icon="github" />
        <IconButton analytics={analyticsObj} className="footer-button" ariaLabel="CodePen" href="https://codepen.io/alipianu/" prefix="fab" icon="codepen" />
      </div>
      <div>
        <Track analytics={analytics.decorate(analyticsObj, {tags: 'copyright', name: 'copyright'}, events.visibility)}>
          <p>@ {year} Alexander Lipianu</p>
          <p>All rights reserved</p>
        </Track>
      </div>
    </footer>
  );
};

export default Footer;