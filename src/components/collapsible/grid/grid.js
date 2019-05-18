import React from 'react';
import classnames from 'classnames';

/**
 * Grid collapsible component
 * 
 * usage: <Collapsible.Grid className?="X"><Collapsible.Row ...>...</Collapsible.Row>...</Collapsible.Grid>
 */
class Grid extends React.Component {
  state = { expandedId: null };
  
  /**
   * Handles item expand/collapse toggle
   */
  onToggle(toggledId) {
    this.setState({expandedId: this.state.expandedId && this.state.expandedId === toggledId ? null : toggledId});
  }

  /**
   * Renders grid collapsible component
   */
  render() {
    return (
      <div className={classnames(this.props.className)}>
        {React.Children.map(this.props.children || [], (child, rowId) => (
          child.type.displayName !== 'Collapsible.Row' ? child : React.cloneElement(child, {
            id: rowId,
            expandedId: this.state.expandedId,
            onToggle: this.onToggle.bind(this),
          })
        ))}
      </div>
    );
  }
}

export default Grid;