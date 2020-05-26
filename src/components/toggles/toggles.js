import './toggles.scss';
import React from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Theme } from '../../models/models';
import { Ribbon } from '../components';

const NONE = -1;
const SM = 'sm';
const LG = 'lg';


/**
 * Ribbon component
 * 
 * usage: <Ribbon innerRef?={W} type?={X} title?={Y} className?={Z}>...</Ribbon>
 */
const Toggle = React.forwardRef((props, ref) => (
  props.onClick
  ? // build spans with onClick handler
  <span ref={ref} className={classnames("toggles__toggle", 'toggles__toggle--' + props.type, props.isActive && 'toggles__toggle--active', props.isHovered && 'toggles__toggle--hover')}
      onClick={() => props.onClick(props.id, props.type)} onMouseEnter={() => props.onMouseEnter(props.id, props.type)} onMouseLeave={() => props.onMouseLeave(props.id, props.type)}>
    <div className="toggles__toggle__icon" style={props.transform && { transform: props.transform }}>
      <FontAwesomeIcon icon={[props.icon.style || 'fas', props.icon.name || 'question-circle']} />
    </div>
    {props.type === LG && props.name && <Ribbon><h2>{props.name}</h2></Ribbon>}
  </span>
  : // build anchors with href
  <a ref={ref} className={classnames("toggles__toggle", 'toggles__toggle--' + props.type, props.isActive && 'toggles__toggle--active', props.isHovered && 'toggles__toggle--hover')}
    aria-label={props.ariaLabel || props.name || `${props.icon || 'question-circle'} button`} href={props.url || props.href || '#'} rel="noopener noreferrer" target="_blank"
    onMouseEnter={() => props.onMouseEnter(props.id, props.type)} onMouseLeave={() => props.onMouseLeave(props.id, props.type)}>
    <div style={props.transform && { transform: props.transform }}>
      <FontAwesomeIcon style={props.transform && { transform: props.transform }} icon={[props.icon.style || 'fas', props.icon.name || 'question-circle']} />
    </div>
    {props.type === LG && props.name && <Ribbon><h2>{props.name}</h2></Ribbon>}
  </a>
));


/**
 * Ribbon component
 * 
 * usage: <Ribbon innerRef?={W} type?={X} title?={Y} className?={Z}>...</Ribbon>
 */
class Toggles extends React.Component {
  constructor(props) {
    super(props);
    this.state = { transforms: { sm: null, lg: null }, activeId: NONE, hover: { id: NONE, type: NONE } };
    this.mouseEnterToggle = this.mouseEnterToggle.bind(this);
    this.mouseLeaveToggle = this.mouseLeaveToggle.bind(this);
    this.clickToggle = this.clickToggle.bind(this);
    this.refsLG = [];
    this.refsSM = [];
    props.data.forEach((_) => {
      this.refsSM.push(React.createRef());
      this.refsLG.push(React.createRef());
    });
  }

  /**
   * 
   * @param {*} id active.
   */
  mouseEnterToggle(id, type) {
    this.setState({...this.state, hover: { id, type }}, () => Theme.startHover(this.props.themeID, this.props.data[this.state.hover.id].theme));
  }

  /**
   * 
   */
  mouseLeaveToggle() {
    this.setState({...this.state, hover: { id: NONE, type: NONE }}, () => Theme.endHover(this.props.themeID));
  }

  /**
   * 
   * @param {*} id 
   */
  clickToggle(id, type) {
    // clear currently active
    if (this.state.activeId === id) {
      this.setState({...this.state, activeId: NONE});
      Theme.resetActive(this.props.themeID);
      this.props.onClick(id, type);
    }
    // set new active
    else {
      this.setState({...this.state, activeId: id});
      Theme.setActive(this.props.themeID, this.props.data[id].theme);
      this.props.onClick(id, type);
    }
  }

  /**
   * 
   */
  render() {
    return (
      <>
        {(this.props.type === LG || (this.props.type !== SM && this.props.type !== LG && this.state.activeId === NONE)) && (
          <div ref={this.props.type === LG && this.props.innerRef} className="toggles toggles--lg">
            {this.props.data.map((toggle, key) => (
            <Toggle {...toggle} ref={this.refsLG[key]} transform={this.state.transforms.lg && this.state.transforms.lg[key]} id={key} key={key} type={LG} onClick={this.props.onClick && this.clickToggle}
                    isActive={this.state.activeId === key} isHovered={this.state.hover.id === key && this.state.hover.type === LG}
                    onMouseEnter={this.mouseEnterToggle} onMouseLeave={this.mouseLeaveToggle} />
            ))}
          </div>
        )}
        {(this.props.type === SM || (this.props.type !== SM && this.props.type !== LG && this.state.activeId !== NONE)) && ( // this.props.type !== SM && this.state.activeId === NONE && 'toggles--hidden'
          <div ref={this.props.innerRef} className={classnames('toggles', 'toggles--sm', this.props.isMobile && 'toggles--mobile')}>
            {this.props.data.map((toggle, key) => (
              <Toggle {...toggle} ref={this.refsSM[key]} transform={this.state.transforms.sm && this.state.transforms.sm[key]} id={key} key={key} type={SM} onClick={this.props.onClick && this.clickToggle}
                      isActive={this.state.activeId === key} isHovered={this.state.hover.id === key && this.state.hover.type === SM}
                      onMouseEnter={this.mouseEnterToggle} onMouseLeave={this.mouseLeaveToggle} />
            ))}
          </div>
        )}
      </>
    );
  }
};

export default React.forwardRef((props, ref) => <Toggles innerRef={ref} {...props} />);