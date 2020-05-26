import './portfolio.scss';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';
import { Ribbon, OverflowScroll } from '../../components/components';

class PortfolioContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeId: 0 };
  }

  selectItem(id) {
    if (id !== this.state.activeId) this.setState({ activeId: id });
  }

  render() {
    return (
      <div className="container-portfolio animate__fade-in-down">
        <div className="carousel">
          <Ribbon key={this.state.activeId} className="carousel__title--mobile">
            <h3>
              {this.props.data.projects[this.state.activeId].title}
              {this.props.data.projects[this.state.activeId].links.map((link, key) => (
                <a key={key} className="carousel__link" href={link.url} rel="noopener noreferrer" target="_blank">
                  <FontAwesomeIcon className="themify--active-color-hover" icon={[link.icon.style, link.icon.name]} />
                </a>
              ))}
            </h3>
          </Ribbon>
          <OverflowScroll>
            <table className="carousel__display">
              <tbody>
                <tr>
                  <td>
                    <img className="carousel__img" alt={this.props.data.projects[this.state.activeId].title} src={this.props.data.projects[this.state.activeId].thumbnail} />
                  </td>
                  <td>
                    <div className="carousel__details">
                      <div className="carousel__title--desktop">
                        <h3>{this.props.data.projects[this.state.activeId].title}</h3>
                        <div className="carousel__links">
                          {this.props.data.projects[this.state.activeId].links.map((link, key) => (
                            <a key={key} className="carousel__link" href={link.url} rel="noopener noreferrer" target="_blank">
                              <FontAwesomeIcon icon={[link.icon.style, link.icon.name]} />
                            </a>
                          ))}
                        </div>
                      </div>
                      <div className="carousel__description">
                        <div className="carousel__text">
                          {this.props.data.projects[this.state.activeId].description}
                        </div>
                        <div className="carousel__tools">
                          {this.props.data.projects[this.state.activeId].tools.map((tool, key) => (
                            <div key={key} className="carousel__tool themify--active-background">{tool}</div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </OverflowScroll>

          <div className="carousel__controls">
            {this.props.data.projects.map((_, key) => (
              <div style={{ width: `calc(${100 / this.props.data.projects.length}% - 0.2em)` }} key={key} className={classnames("carousel__item", this.state.activeId === key ? "themify--active-background" : "themify--inactive-background-hover")} onClick={() => this.selectItem(key)}></div>
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default PortfolioContainer;