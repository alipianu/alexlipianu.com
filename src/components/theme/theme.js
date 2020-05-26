import './theme.scss';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Parallax from 'parallax-js';
import Particles from 'react-particles-js';
import classnames from 'classnames';
import particlesData from './particles.json';
import jump from 'jump.js'
import { Theme as ThemeModel } from '../../models/models';


const ANIMATION_TIME = 400;

/**
 * Renders panel background component
 * @param {*} props - the component's properties
 * 
 * usage: <Theme ... />
 */
class Theme extends React.Component {
  _intersectObserver = null;
  _navObserver = null;

  _clickOberserver = null;
  _hoverOberserver = null;
  _hovered = null;
  _animatingForward = false;

  constructor(props) {
    super(props);
    this.state = { animating: false, nav: { down: -1, up: -1 }, transforms: { background: null, foreground: null }, theme: { current: ThemeModel.get(0), animating: {}, hover: {}, clicked: {} } };
    this.updateUI = this.updateUI.bind(this);
    this.triggerClick = this.triggerClick.bind(this);
    this.triggerHover = this.triggerHover.bind(this);
    this.refParallax = React.createRef();
    this.updateCurrent = this.updateCurrent.bind(this);
    this.updateNav = this.updateNav.bind(this);
    // check if user is a mobile device
    this._isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  componentDidMount() {
    this._intersectObserver = ThemeModel.intersectObservable().subscribe({next: this.updateCurrent});
    this._navObserver = ThemeModel.navObservable().subscribe({next: this.updateNav});

    this.parallax = new Parallax(this.refParallax.current);
    window.addEventListener('resize', this.updateUI);
    this.updateUI();
    this._clickOberserver = ThemeModel.clickObservable().subscribe({next: this.triggerClick});
    this._hoverOberserver = ThemeModel.hoverObservable().subscribe({next: this.triggerHover});
  }

  componentWillUnmount() {
    if (this._intersectObserver) this._intersectObserver.unsubscribe();

    this.parallax.disable();
    window.removeEventListener('resize', this.updateUI);
    if (this._clickOberserver) this._clickOberserver.unsubscribe();
    if (this._hoverOberserver) this._hoverOberserver.unsubscribe();
  }

  updateCurrent(theme) {
    this.setState({...this.state, theme: {...this.state.theme, current: {...theme}}});
  }

  updateNav(nav) {
    if (nav.up !== this.state.nav.up || nav.down !== this.state.nav.down) {
      this.setState({...this.state, nav});
    }
  }

  triggerClick({id, theme}) {
    // set click theme
    if (this._timeout || this._animatingForward) {
      this.setState({...this.state, theme: {...this.state.theme, clicked: {...theme} }});
    }

    // finish active animation, then set new current theme
    if (this._animatingForward) {
      this._timeout = setTimeout(() => {
        this.setState({...this.state, animating: false, theme: {...this.state.theme, current: {...theme}, clicked: {}, animating: {}, hover: {}}}, () => this._animatingForward = false);
        this._timeout = null;
      }, ANIMATION_TIME - Math.min(Date.now() - this._animationStart, ANIMATION_TIME))
    }
    // otherwise perform animation, then set new current theme
    else {
      this.setState({...this.state, animating: true, theme: {...this.state.theme, animating: {...theme}, clicked: {...theme}}}, () => this._animatingForward = true);
      this._timeout = setTimeout(() => {
        this.setState({...this.state, animating: false, theme: {...this.state.theme, current: {...theme}, clicked: {}, animating: {}, hover: {}}}, () => this._animatingForward = false);
        this._timeout = null;
      }, ANIMATION_TIME);
    }
  }

  triggerHover({id, theme}) {
    // perform animation
    if (!this._animatingForward && !this._timeout) {
      if (ThemeModel.isNone(theme) || ThemeModel.isEqual(theme, this.state.theme.current)) return;
      this._animatingForward = true;
      this._animationStart = Date.now();
      this.setState({...this.state, animating: true, theme: {...this.state.theme, animating: {...theme}, hover: {...theme}}});
      return;
    }

    // wait for animation to end
    this.setState({...this.state, theme: {...this.state.theme, hover: {...theme}}});
    this._hovered = {id, theme};
    if (!this._timeout) {
      this._timeout = setTimeout(() => {
        if (!ThemeModel.isNone(this.state.theme.clicked)) {
          this._hovered = null;
          this._timeout = null;
          this.triggerClick({theme: this.state.theme.clicked});
          return;
        }
        this.setState({...this.state, animating: false}, () => this._animatingForward = false);
        this._timeout = setTimeout(() => {
          const next = this._hovered;
          this._hovered = null;
          this._timeout = null;
          if (!ThemeModel.isNone(this.state.theme.clicked)) {
            this.triggerClick({theme: this.state.theme.clicked});
            return;
          }
          else if (next) this.triggerHover(next);
        }, ANIMATION_TIME);
      }, ANIMATION_TIME - Math.min(Date.now() - this._animationStart, ANIMATION_TIME));
    }
  }

  updateUI() {
    this.updateBackground();
  }

  updateBackground() {
    // if only height has changed and user is using mobile device, do nothing
    // NOTE: this is a workaround for the mobile address bars modifying window.innerHeight
    if (this._prevWidth === window.innerWidth && this._isMobile) return;
    const offsetY = window.innerHeight / 2;
    const angle = -Math.atan(window.innerHeight / window.innerWidth) * (180 / Math.PI);
    this.setState({ transforms: {background: `translateY(${offsetY}px) skewY(${angle}deg)`, foreground: `translateY(${-offsetY}px) skewY(${-angle}deg)`}});
    this._prevWidth = window.innerWidth;
  }

  render() {
    return (
      <div className="theme__bg-primary" style={{ backgroundColor: this.state.theme.current.primary }}>
        <style dangerouslySetInnerHTML={{ __html: `.toggles__toggle--sm.toggles__toggle--active svg { background-color: ${this.state.theme.clicked.primary || this.state.theme.current.primary}; } .toggles__toggle--hover.toggles__toggle--lg .ribbon > div, .toggles__toggle--hover.toggles__toggle--lg .ribbon .ribbon__left, .toggles__toggle--hover.toggles__toggle--lg .ribbon__right, .toggles__toggle--hover.toggles__toggle--sm svg { background-color: ${this.state.theme.hover.secondary}; } .toggles__toggle--hover.toggles__toggle--lg:not(.toggles__toggle--animating) svg { color: ${this.state.theme.hover.secondary}; } .themify--active-color, .themify--active-color-hover, .themify--inactive-color-invert-hover:hover {color: ${this.state.theme.clicked.primary || this.state.theme.current.primary};} .themify--active-color-hover:hover {color: ${this.state.theme.clicked.secondary || this.state.theme.current.secondary};} .themify--active-background {background-color: ${this.state.theme.clicked.primary || this.state.theme.current.primary};} .themify--active-background-hover:hover, .themify--inactive-background-hover:hover {background-color: ${this.state.theme.clicked.secondary || this.state.theme.current.secondary};}` }} />
        <div className={classnames('theme__bg-secondary', this.state.animating && 'animating')} style={{ backgroundColor: this.state.theme.current.secondary, transform: this.state.transforms.background }}>
          <div className="theme__bg-secondary-top" style={{ backgroundColor: this.state.theme.animating.primary }}></div>
          <div className="theme__bg-secondary-bottom" style={{ backgroundColor: this.state.theme.animating.secondary }}></div>
          <div style={{ transform: this.state.transforms.foreground }}>
            <div ref={this.refParallax}>
              <div data-depth="0.3">
                <Particles data-invert-y="true" data-invert-x="true" params={particlesData} />
              </div>
            </div>
            <span onClick={() => this.state.nav.up >= 0 && jump(`#panel-${this.state.nav.up}`, { duration: 0 })} className={classnames('theme__nav', 'theme__nav--up', this.state.nav.up < 0 && 'theme__nav--hidden')}>
              <FontAwesomeIcon icon={['fas', 'chevron-up']} />
            </span>
            <span onClick={() => this.state.nav.down >= 0 && jump(`#panel-${this.state.nav.down}`, { duration: 0 })} className={classnames('theme__nav', 'theme__nav--down', this.state.nav.down < 0 && 'theme__nav--hidden')}>
              <FontAwesomeIcon icon={['fas', 'chevron-down']} />
            </span>
            <span className="theme__credits">
              <h6>
                Designed by <a className="themify--inactive-color-invert-hover" href="https://github.com/alipianu" rel="noopener noreferrer" target="_blank">@alipianu</a>
              </h6>
            </span>
          </div>
        </div>
      </div>
    );
  }
};

export default Theme;