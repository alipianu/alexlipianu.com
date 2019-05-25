import './polyhedrons.scss';
import React from 'react';
import { Subject } from 'rxjs';
import { Polyhedron, counter } from './polyhedron';
import Face from './polyhedron-face';

// get random number in [min, max]
const rand = (min, max) => Math.floor(Math.random() * (max - min)) + min;

// generate random keyframe for polyhedron animation
const randKeyframe = () => {
  const fromTransform = 'rotateY(0deg) rotateX(0deg) scale(0)';
  const toTranform = `rotateY(${rand(-400, 400)}deg) rotateX(${rand(-400, 400)}deg) scale(1)`;
  return `
    @-webkit-keyframes spin-shapes {
      from {
        -webkit-transform: ${fromTransform};
      }
      to {
        -webkit-transform: ${toTranform};
      }
    }
    @-moz-keyframes spin-shapes {
      from {
        -webkit-transform: ${fromTransform};
      }
      to {
        -webkit-transform: ${toTranform};
      }
    }
    @keyframes spin-shapes {
      from {
        -webkit-transform: ${fromTransform};
            -ms-transform: ${fromTransform};
                transform: ${fromTransform};
      }
      to {
        -webkit-transform: ${toTranform};
            -ms-transform: ${toTranform};
                transform: ${toTranform};
      }
    }
  `;
};

/**
 * Animation container for polyhedrons
 */
class Polyhedrons extends React.Component {
  state = { animated: null, animationChange: new Subject(), keyframe: '' }

  /**
   * Starts animation and sets animation interval
   */
  componentDidMount() {
    // begin animation on load
    const startShape = rand(0, counter);
    this.setState({ animated: startShape, keyframe: randKeyframe() }, () => this.state.animationChange.next(startShape))
    
    // interval for updating animated shape
    this.animationInterval = setInterval(() => {
      do {
        var animated = rand(0, counter);
      } while (animated === this.state.animated);
      this.setState({ animated, keyframe: randKeyframe() }, () => this.state.animationChange.next(animated));
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
        {this.props.title}
        <style dangerouslySetInnerHTML={{__html: this.state.keyframe}} />
      </div>
    );
  }
};

export default Polyhedrons;