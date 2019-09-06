import './footer.scss';
import React from 'react';
import { IconButton } from '../components';

/**
 * Renders footer component
 * 
 * usage: <Footer />
 */
const Footer = (props) => {
  // analytics tags
  const tags = [...(props.analytics || []), 'footer'];
  const year = (new Date()).getFullYear();
  return (
    <footer>
      <div>
        <IconButton analytics={tags} className="footer-button" ariaLabel="Email" href="mailto:alexlipianu@live.ca?subject=Website%20Redirect" icon="envelope" />
        <IconButton analytics={tags} className="footer-button" ariaLabel="LinkedIn" href="https://ca.linkedin.com/in/alipianu" prefix="fab" icon="linkedin" />
        <IconButton analytics={tags} className="footer-button" ariaLabel="GitHub" href="https://github.com/alipianu" prefix="fab" icon="github" />
        <IconButton analytics={tags} className="footer-button" ariaLabel="CodePen" href="https://codepen.io/alipianu/" prefix="fab" icon="codepen" />
      </div>
      <div>
        <p>@ {year} Alexander Lipianu</p>
        <p>All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;