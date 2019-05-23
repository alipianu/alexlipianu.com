import './polyhedron-face.scss';
import React from 'react';
import classnames from 'classnames';

/**
 * Polyhedron face component
 */
class PolyhedronFace extends React.Component {
  state = { color: {} };

  /**
   * Subscribes face to animation change handler
   */
  componentDidMount() {
    this.subscription = this.props.animationChange.subscribe({ next: (id) => this.props.parentId === id && this.updateColor() });
  }

  /**
   * Unsubscribes face to animation change handler
   */
  componentWillUnmount() {
    this.subscription.unsubscribe();
  }

  /**
   * Updates face's color
   */
  updateColor() {
    const rgba = () => {
      const x = () => Math.floor(Math.random() * 256);
      return `rgba(${x()}, ${x()}, ${x()}, 0.7)`;
    };
    const color = this.props.type === 'rect' ? { backgroundColor: rgba() } : { borderColor: `transparent transparent ${rgba()} transparent` };
    this.setState({ color });
  }

  /**
   * Renders face
   */
  render() {
    return (
      <div className={classnames('shape-face', this.props.type)} style={this.state.color}></div>
    );
  }
}

export default PolyhedronFace;