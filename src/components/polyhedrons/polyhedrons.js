import './polyhedrons.scss';
import React from 'react';
import { Subject } from 'rxjs';
import { Polyhedron, counter } from './polyhedron';
import Face from './polyhedron-face';

/**
 * Animation container for polyhedrons
 */
class Polyhedrons extends React.Component {
  state = { animated: null, animationChange: new Subject() }

  /**
   * Sets animation interval
   */
  componentDidMount() {
    this.animationInterval = setInterval(() => {
      do {
        var animated = Math.floor(Math.random() * (counter + 1));
      } while (animated === this.state.animated);
      this.setState({ animated }, () => this.state.animationChange.next(animated));
    }, 11000);
  }

  /**
   * Destroys animation interval
   */
  componentWillUnmount() {
    clearInterval(this.animationInterval);
  }

  /**
   * Renders polyhedrons
   */
  render() {
    return (
      <div className="scene">
        <div className="shapes">
          <Polyhedron type="tetrahedron" animated={this.state.animated} animationChange={this.state.animationChange}>
            <Face />
            <Face />
            <Face />
            <Face />
          </Polyhedron>
          <Polyhedron type="triang-prism" animated={this.state.animated} animationChange={this.state.animationChange}>
            <Face />
            <Face />
            <Face />
            <Face />
            <Face type="rect" />
          </Polyhedron>
          <Polyhedron type="cube" animated={this.state.animated} animationChange={this.state.animationChange}>
            <Face type="rect" />
            <Face type="rect" />
            <Face type="rect" />
            <Face type="rect" />
            <Face type="rect" />
            <Face type="rect" />
          </Polyhedron>
          <Polyhedron type="octahedron" animated={this.state.animated} animationChange={this.state.animationChange}>
            <Face />
            <Face />
            <Face />
            <Face />
            <Face />
            <Face />
            <Face />
            <Face />
          </Polyhedron>
        </div>
        {this.props.title && <h3>{this.props.title}</h3>}
      </div>
    );
  }
};

export default Polyhedrons;