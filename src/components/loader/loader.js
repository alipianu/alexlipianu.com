import './loader.scss';
import React from 'react';
import classnames from 'classnames';

class Loader extends React.Component {
  state = { elapsed: 0, maxDots: 4, loaded: false, error: null };

  componentDidMount() {
    const loadingTextInterval = setInterval(() => this.setState({elapsed: (this.state.elapsed + 1) % this.state.maxDots}), 2000);

    if (this.props.loader) {
      this.props.loader().then(
        (result) => {
          if (this.props.onSuccess) {
            this.props.onSuccess(result);
          }
          this.setState({ loaded: true }, () => clearInterval(loadingTextInterval));
        },
        (error) => {
          if (this.props.onError) {
            this.props.onSuccess(error);
          }
          this.setState({ error }, () => clearInterval(loadingTextInterval));
        }
      );
    } else {
      this.setState({ loaded: true }, () => clearInterval(loadingTextInterval));
    }
  }

  loadingText() {
    let dots = [];
    let visible = false;
    const elapsed = this.state.elapsed;
    for (let i = this.state.maxDots; i > 0; --i) {
      if (!visible && !(elapsed % i) && elapsed !== 0) {
        visible = true;
      }
      dots = [<span key={i} className={classnames('loader-text', !visible ? 'hidden' : '')}>.</span>, ...dots];
    }
    return <><span className="loader-text">Loading</span>{dots}</>;
  }

  render() {
    return !this.state.error && this.state.loaded ?
      this.props.children :
      <div className={classnames('loader', this.state.error ? 'error' : '', this.state.loaded ? 'loaded' : 'loading')}>
        {this.props.animation && (
          React.createElement(this.props.animation, { title: this.state.error ? <span className="loader-text">ERROR: An error occured</span> : this.loadingText() }))}
      </div>
  }
}

export default Loader;