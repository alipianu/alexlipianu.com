import './landing.scss';
import React from 'react';
import { panel, Ribbon, Toggles } from '../../components/components';

class LandingContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mobile: false };
    this.detectMobile = this.detectMobile.bind(this);
    this.refHeadshot = React.createRef();
    this.refRibbon = React.createRef();
  }

  componentDidMount() {
    window.addEventListener('resize', this.detectMobile);
    this.detectMobile();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.detectMobile);
  }

  detectMobile() {
    const mobile = this.refHeadshot.current.getBoundingClientRect().bottom <= this.refRibbon.current.getBoundingClientRect().bottom;
    if (mobile !== this.state.mobile) this.setState({ mobile });
  }

  render() {
    return (
      <div className="container-landing">
        <img ref={this.refHeadshot} className="container-landing__headshot" alt="headshot" src={this.props.data.headshot} />
        <div className="container-landing__info">
          <h1 className="container-landing__name">{this.props.data.name}</h1>
          <h2 className="container-landing__title">{this.props.data.title}</h2>
          <Ribbon ref={this.refRibbon} type={!this.state.mobile && "right"} className="container-landing__status">
            {/* prevent whitespace wrapping by grouping desired words into 'blocks' with white-space: no-wrap */}
            {this.props.data.status.map((block, key) => (
              <span key={key} className="format__textblock">
                {block}
              </span>
            ))}
          </Ribbon>
          <p className="container-landing__education">{this.props.data.education}</p>
          <h5 className="container-landing__past">
            {/* prevent whitespace wrapping of company names by grouping desired words into 'blocks' with white-space: no-wrap */}
            {this.props.data.past.map((block, key) => (
              <span key={key} className="format__textblock format__textblock--bar">
                {block}
              </span>
            ))}
          </h5>
          <Toggles isMobile={this.state.mobile} themeID={this.props.themeID} type="sm" data={this.props.data.social} />
        </div>
      </div>
    );
  }
};

export default panel(LandingContainer);