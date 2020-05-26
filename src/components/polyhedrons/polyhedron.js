import './polyhedron.scss';
import React from 'react';
import classnames from 'classnames';

// shape counter
let counter = 0;

/**
 * Polyhedron component
 */
class Polyhedron extends React.Component {
  constructor(props) {
    super(props);
    this.id = counter++;
  }

  /**
   * Renders component
   */
  render() {
    return (
      <div className={classnames('shape', this.props.type, this.props.animated === this.id && 'animated')}>
        {React.Children.map(this.props.children || [], child => (
          React.cloneElement(child, { parentId: this.id, animationChange: this.props.animationChange })
          ))}
      </div>
    );
  }
};

export { Polyhedron, counter };