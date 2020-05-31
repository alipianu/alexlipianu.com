import './cookies-popup.scss';
import React from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SCROLL_THRESHOLD = 100;

class CookiesPopup extends React.Component {
  _firstScrollY = null;

  constructor(props) {
    super(props);
    this.state = { accepted: document.cookie.includes('_ga=') };
    this.acceptCookies = this.acceptCookies.bind(this);
    this.acceptCookiesScroll = this.acceptCookiesScroll.bind(this);
  }

  acceptCookies() {
    this.setState({ accepted: true });
    window.removeEventListener("scroll", this.acceptCookiesScroll);
    window.loadGoogleAnalytics();
  }

  acceptCookiesScroll() {
    if (this._firstScrollY === null) {
      this._firstScrollY = window.scrollY;
    } else if (Math.abs(window.scrollY - this._firstScrollY) >= SCROLL_THRESHOLD) {
      this.acceptCookies();
    }
  }

  componentDidMount() {
    if (!this.state.accepted) {
      window.addEventListener("scroll", this.acceptCookiesScroll);
    }
  }

  render() {
    return (
      <span className={classnames('cookies', `cookies--${this.state.accepted ? 'accepted' : 'unaccepted'}`)}>
        <div className="cookies__popup">
          <FontAwesomeIcon className="cookies__close" icon={['fas', 'times']} onClick={this.acceptCookies} />
          <h4 className="cookies__title">Cookies Notice</h4>
          <h5 className="cookies__description">
            Continuing to browse this site automatically accepts the use of cookies.
          </h5>
        </div>
      </span>
    );
  }
};

export default CookiesPopup;