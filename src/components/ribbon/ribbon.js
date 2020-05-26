import './ribbon.scss';
import React from 'react';
import classnames from 'classnames';

/**
 * Ribbon component
 * 
 * usage: <Ribbon innerRef?={W} type?={X} title?={Y} className?={Z}>...</Ribbon>
 */
class Ribbon extends React.Component {
  constructor(props) {
    super(props);
    this.refParent = React.createRef();
    this.updateRibbonCSS = this.updateRibbonCSS.bind(this);
    this.state = { borderWidth: { left: null, right: null } };
  }

  /**
   * Registers ribbon update listener
   */
  componentDidMount() {
    window.addEventListener('resize', this.updateRibbonCSS);
    this.updateRibbonCSS();
  }

  /**
   * Unregisters ribbon update listener
   */
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateRibbonCSS);
  }

  /**
   * Updates ribbon ends
   */
  updateRibbonCSS() {
    const height = this.refParent.current.clientHeight;
    if (height === 0) return;
    this.setState({ ...this.state, borderWidth: { left: `${height/2}px 0 ${height/2}px ${height / 3}px`, right: `${height/2}px ${height / 3}px ${height/2}px 0` } });
  }

  /**
   * Renders component
   */
  render() {
    return (
      <div ref={this.props.innerRef} className={classnames('ribbon', 'ribbon--' + (this.props.type || 'double'), 'ribbon--' + (this.props.title ? 'titled' : 'untitled'))}>
        <div ref={this.refParent} className={classnames(this.props.className)}>
          {this.props.title && <span className="ribbon__title">{this.props.title}</span>}
          <span className="ribbon__text">{this.props.children}</span>
          <div style={{ borderWidth: this.state.borderWidth.left }} className="ribbon__left"></div>
          <div style={{ borderWidth: this.state.borderWidth.right }} className="ribbon__right"></div>
        </div>
      </div>
    );
  }
};

export default React.forwardRef((props, ref) => <Ribbon innerRef={ref} {...props} />);