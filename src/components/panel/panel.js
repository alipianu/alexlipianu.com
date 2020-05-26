import './panel.scss';
import React from 'react';
import { Theme } from '../../models/models';
import ScrollAnimation from 'react-animate-on-scroll';

/**
 * Panel higher-order component
 * 
 * usage: panel(<SomeWrappedComponent/>)
 */
const panel = (WrappedComponent) => (
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = { data: props.data, themeID: -1 };
      this.refPanel = React.createRef();
    }

    /**
     * Registers panel to theme
     */
    componentDidMount() {
      this.setState({ ...this.state, themeID: Theme.register(this.refPanel) });
    }

    /**
     * Unregisters panel from theme
     */
    componentWillUnmount() {
      this.setState({ ...this.state, themeID: Theme.unregister(this.state.themeID) });
    }

    /**
     * Renders component
     */
    render() {
      return (
        <table className="panel">
          <tbody>
            <tr>
              <td>
                <ScrollAnimation animateIn="animate__fade-in-down">
                  <div id={`panel-${this.state.themeID}`} data-themeid={this.state.themeID} ref={this.refPanel} className="panel__wrapped">
                    <WrappedComponent themeID={this.state.themeID} data={this.state.data} />
                  </div>
                </ScrollAnimation>
              </td>
            </tr>
          </tbody>
        </table>
      );
    }
  }
);

export default panel;