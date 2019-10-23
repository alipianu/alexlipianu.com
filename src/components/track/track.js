import React from 'react';
import analytics from '../../general/analytics';
import visibility from '../../general/visibility';

/**
 * Analytics events to track
 */
const events = {
  visibility: 'visibility',
  clicks: 'clicks',
  hover: 'hover'
};

/**
 * Renders analytics components
 * 
 * usage: <Track analytics={{name?: 'W', tags?: 'X', events=(['Y', ...] || 'Z')}}>...</Track>
 */
class Track extends React.Component {
  constructor(props) {
    super(props);

    // tracking instance configuration
    let propEvents = !props.analytics ? [] : props.analytics.events;
    propEvents = typeof propEvents === 'string' ? [propEvents] : Array.isArray(propEvents) ? propEvents : [];
    const configuration = {trackVisibility: propEvents.includes(events.visibility), trackClicks: propEvents.includes(events.clicks), trackHover: propEvents.includes(events.hover)};

    // setup state based off of configuration
    this.state = {
      trackId: analytics.track(props.analytics),
      propEvents,
      ref: React.createRef(),
      ...configuration
    };

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    if (this.state.trackVisibility) {
      this.setState({visibilityId: visibility.register(this.state.ref, {enterCallback: this.handleEnterVisibility.bind(this), exitCallback: this.handleExitVisibility.bind(this)})});
    }
  }

  componentWillUnmount() {
    if (this.state.trackVisibility && this.state.visibilityId >= 0) {
      visibility.unregiser(this.state.visibilityId);
    }
  }

  handleEnterVisibility() {
    this.setState({visibleDate: Date.now()});
  }

  handleExitVisibility() {
    if (this.state.visibleDate) {
      analytics.record(events.visibility, this.state.trackId, Date.now() - this.state.visibleDate);
      this.setState({visibleDate: undefined});
    }
  }

  handleMouseEnter() {
    this.setState({hoverDate: Date.now()});
  }

  handleMouseLeave() {
    if (this.state.hoverDate) {
      analytics.record(events.hover, this.state.trackId, Date.now() - this.state.hoverDate);
      this.setState({hoverDate: undefined});
    }
  }

  handleClick() {
    analytics.record(events.clicks, this.state.trackId);
  }

  render() {
    // render props based off of configuration
    return <>{React.Children.map(this.props.children, child => React.cloneElement(child, {
      ...this.state.trackVisibility ? {id: this.state.visibilityId, ref: this.state.ref} : {},
      ...this.state.trackClicks ? {onClick: this.handleClick} : {},
      ...this.state.trackHover ? {onMouseEnter: this.handleMouseEnter, onMouseLeave: this.handleMouseLeave} : {}
    }))}</>;
  }
};

export { Track, events };