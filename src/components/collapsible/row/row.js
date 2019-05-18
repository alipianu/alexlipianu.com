import React from 'react';
import classnames from 'classnames';
import { Row as BootstrapRow } from 'react-bootstrap';
import Body from '../body/body';

/**
 * Row collapsible component
 * 
 * usage: <Collapsible.Row className?="W" id="X" expandedId="Y" onToggle="Z"><Collapsible.Col>...</Collapsible.Col>...</Collapsible.Row>
 */
class Row extends React.Component {
  state = { isDesktop: false, headList: [] };

  /**
   * Updates whether row expand is in desktop mode
   */
  updateIsDesktop() {
    const headLen = this.state.headList.length;
    if (headLen > 1) {
      this.setState({isDesktop: this.state.headList[0].getBoundingClientRect().top === this.state.headList[headLen - 1].getBoundingClientRect().top});
    }
  }

  /**
   * Adds window resize event listener
   */
  componentDidMount() {
    this.updateIsDesktop();
    window.addEventListener("resize", this.updateIsDesktop.bind(this));
  }

  /**
   * Removes window resize event listener
   */
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateIsDesktop.bind(this));
  }

  /**
   * Renders collapsible row component
   */
  render() {
    return (
      <>
        <BootstrapRow className={classnames(this.props.className)}>
          {React.Children.map(this.props.children || [], (child, colId) => (
            child.type.displayName !== 'Collapsible.Col' ? child : React.cloneElement(child, {
              id: `${this.props.id}-${colId}`,
              expandedId: this.props.expandedId,
              isDesktop: this.state.isDesktop,
              onToggle: this.props.onToggle,
              ref: (node) => node && this.state.headList.push(node)
            })
          ))}
        </BootstrapRow>
        {React.Children.map(this.props.children || [], (child, colId) => (
          child.props.body && (
            <Body expanded={`${this.props.id}-${colId}` === this.props.expandedId && this.state.isDesktop}>
              {child.props.body}
            </Body>
          )
        ))}
      </>
    );
  }
}

// init display name
Row.displayName = 'Collapsible.Row';

export default Row;