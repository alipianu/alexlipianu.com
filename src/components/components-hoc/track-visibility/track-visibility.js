import React from 'react';
import classnames from 'classnames';
import visibility from '../../../general/visibility';

// default tracking options
const defaultOptions = {
  unregisterOnIntersect: false
};

/**
 * 
 * @param {React.Component} WrappedComponent - the component whose visibility is being tracked 
 * @param {*} options - the tracking options object
 */
const trackVisibility = (WrappedComponent, options = {}) => {
  return class Visibility extends React.Component {
    constructor(props) {
      super(props);
      const ref = React.createRef();
      this.state = {
        id: '',
        ref,
        wasIntersected: false,
        isIntersected: false,
        unregisterOnIntersect: options.unregisterOnIntersect || defaultOptions.unregisterOnIntersect,
        options: {
          ...options,
          enterCallback: this.handleEnterVisibility.bind(this),
          exitCallback: this.handleExitVisibility.bind(this)
        }
      }
      this.unregisterTarget = this.unregisterTarget.bind(this);
    }
  
    componentWillUnmount() {
      this.unregisterTarget()
    }

    unregisterTarget() {
      visibility.unregiser(this.state.id);
    }

    componentDidMount() {
      this.setState({id: visibility.register(this.state.ref, this.state.options)});
    }

    handleEnterVisibility() {
      this.setState({wasIntersected: true});
      this.state.unregisterOnIntersect ? this.unregisterTarget() : this.setState({isIntersected: true});
    }

    handleExitVisibility() {
      this.setState({isIntersected: false});
    }
  
    render() {
      return (
        <div id={this.state.id} ref={this.state.ref} className={classnames('visibility', this.state.wasIntersected ? 'was-visible' : '', this.state.isIntersected ? 'is-visible' : '')}>
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  }
};

export default trackVisibility;