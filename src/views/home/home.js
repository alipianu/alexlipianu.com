import './home.scss';
import React from 'react';
import containers from '../../containers/containers';
import { Theme, Loader, Polyhedrons } from '../../components/components';
import { Static } from '../../models/models';

/**
 * Home view
 * 
 * usage: <Home />
 */
class Home extends React.Component {
  _contentID = 0;
  state = { data: null };

  render() {
    return (
      <Loader animation={Polyhedrons} loader={() => Static.getContent(this._contentID)} onSuccess={({data}) => this.setState({data})}>
        {this.state.data && (
          <>
            <Theme />
            {this.state.data.containers.map(({name, data}, key) => React.createElement(containers[name], {key, data}))}
          </>
        )}
      </Loader>
    );
  }
};

export default Home;