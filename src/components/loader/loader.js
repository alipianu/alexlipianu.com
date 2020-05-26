import './loader.scss';
import React from 'react';
import classnames from 'classnames';

const defaultError = 'An unexpected error has occured';

/**
 * Loader component
 * 
 * usage: <Loader loader?={V} animation?={W} onSuccess?={X} onError?={Y} errorMessage?={Z}>...</Loader>
 */
class Loader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { elapsed: 0, maxDots: 4, loaded: false, error: null };
  }

  /**
   * Loads data
   */
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

  /**
   * Builds loading text
   */
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
    return <><span className="loader-text">LOADING</span>{dots}</>;
  }

  /**
   * Renders component
   */
  render() {
    return !this.state.error && this.state.loaded ?
      this.props.children :
      <div className={classnames('loader', this.state.error ? 'error' : '', this.state.loaded ? 'loaded' : 'loading')}>
        {this.props.animation && (
          React.createElement(this.props.animation, { title: this.state.error ? <><h2 className="loader-text">ERROR:</h2><p className="loader-text">{this.props.errorMessage ? this.props.errorMessage : defaultError}</p></> : <h2>{this.loadingText()}</h2> }))}
      </div>
  }
}

export default Loader;