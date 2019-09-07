import './splash.scss';
import React from 'react';

/**
 * Renders splash component
 * @param {*} props the component's properties
 * 
 * usage: <Splash src="X">...</Splash>
 */
const Splash = (props) => (
  <div className="splash" style={{ backgroundImage: `url(${props.src})` }}>
    <table>
      <tbody>
        <tr>
          <td>
            {props.children}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default Splash;