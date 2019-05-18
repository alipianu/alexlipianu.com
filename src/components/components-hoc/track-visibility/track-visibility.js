import React from 'react';
import classnames from 'classnames';

// visibility element counter
let counter = 0;

// Map intersection targetId => updateVisibility callback
const targetMap = {};

// Create intersection observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const callback = targetMap[entry.target.getAttribute('id')];
    if (callback) {
      callback(entry);
    }
  });
});

// default tracking options
const defaultOptions = {
  threshold: 0,
  unregisterOnIntersect: false
};

/**
 * 
 * @param {React.Component} WrappedComponent - the component whose visibility is being tracked 
 * @param {*} options - the tracking options object
 *            options.unregisterOnIntersect - if true, unregisters the element on first intersect (good for components that animate only on first time visible in viewport)
 *            options.threshold - the intersectionRatio threshold that defines if element is intersected
 */
const trackVisibility = (WrappedComponent, options = {}) => {
  return class Visibility extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        id: `track-visible-${counter++}`,
        ref: React.createRef(),
        threshold: options.threshold || defaultOptions.threshold,
        wasIntersected: false,
        isIntersected: false,
        unregisterOnIntersect: options.unregisterOnIntersect || defaultOptions.unregisterOnIntersect
      }
      this.updateVisibility = this.updateVisibility.bind(this);
    }
  
    componentWillUnmount() {
      this.unregisterTarget();
    }

    componentDidMount() {
      this.registerTarget();
    }

    unregisterTarget() {
      delete targetMap[this.state.id];
      observer.unobserve(this.state.ref.current);
    }
  
    registerTarget() {
      targetMap[this.state.id] = this.updateVisibility;
      observer.observe(this.state.ref.current);
    }
  
    updateVisibility(entry) {
      if (entry.intersectionRatio > this.state.threshold) {
        if (this.state.unregisterOnIntersect) {
          this.setState({wasIntersected: true});
          this.unregisterTarget();
        }
        else {
          this.setState({wasIntersected: true, isIntersected: true});
        }
      }
      else {
        this.setState({isIntersected: false});
      }
    }
  
    render() {
      return (
        <div id={this.state.id} ref={this.state.ref} className={classnames('track-visible', this.state.wasIntersected ? 'was-visible' : '', this.state.isIntersected ? 'is-visible' : '')}>
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  }
};

export default trackVisibility;