import './options.scss';
import React from 'react';
import containers from '../containers';
import { panel, Toggles } from '../../components/components';

const NONE = -1;
const MARGINFACTOR = 14;

class OptionsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedId: NONE, mobile: false };
    this.detectMobile = this.detectMobile.bind(this);
    this.toggleOption = this.toggleOption.bind(this);
    this.refToggles = React.createRef();
    this.refContainer = React.createRef();
    this.refTitle = React.createRef();
  }

  toggleOption(id) {
    // clear currently active
    if (this.state.selectedId === id) {
      this.setState({ selectedId: NONE }, () => window.removeEventListener('resize', this.detectMobile));
    }
    // set new active
    else {
      window.addEventListener('resize', this.detectMobile);
      this.setState({ selectedId: id }, this.detectMobile);
    }
  }

  componentWillUnmount() {
    if (this.state.selectedId !== NONE) {
      window.removeEventListener('resize', this.detectMobile);
    }
  }

  detectMobile() {
    const mobile = (this.refContainer.current.getBoundingClientRect().width - this.refTitle.current.getBoundingClientRect().width) / 2 - MARGINFACTOR <= this.refToggles.current.getBoundingClientRect().width;
    if (mobile !== this.state.mobile) this.setState({ mobile });
  }

  render() {
    return (
      <div ref={this.refContainer} className="container-options">
        <h1 ref={this.refTitle}>{(this.state.selectedId >= 0 && this.props.data.options[this.state.selectedId].toggle.name) || this.props.data.title}</h1>
        {this.state.selectedId >= 0 && (
          React.createElement(containers[this.props.data.options[this.state.selectedId].container.name], { key: this.state.selectedId, data: this.props.data.options[this.state.selectedId].container.data })
        )}
        <Toggles ref={this.refToggles} isMobile={this.state.mobile} onClick={this.toggleOption} themeID={this.props.themeID} data={this.props.data.options.map((option) => option.toggle)} />
      </div>
    );
  }
};

export default panel(OptionsContainer);