import request from './request';
import config from '../config';

/**
 * Analytics class
 */
class Analytics {
  /**
   * Create analytics
   */
  constructor() {
    this.tracking = [];
  }
  
  /**
   * Start session
   * @returns {Promise} the session start promise
   */
  start() {
    if (this.sessionId == null)
      return request.post('session/start', { version: config.version })
        .then((sessionId) => this.sessionId = sessionId);
  }

  /**
   * End session
   * @returns {Promise} the session end promise
   */
  end() {
    if (this.sessionId != null)
      return request.post('session/end', { data: this.tracking });
  }

  /**
   * Add item to tracking
   * @param {string} name item name
   * @param {string[]} tags tags used to identify/categorize item
   * @returns {number} the item id
   */
  track({name, tags}) {
    if (name || tags) {
      const _id = this.tracking.length;
      this.tracking.push({ _id, name: name || '', tags: tags || '', events: {} });
      return _id;
    }
    return null;
  }

  /**
   * Record item event
   * @param {string} event the name of the event being recorded
   * @param {number} id the id of the item that the event is being recorded for
   * @param {number} amount the amount to increment
   */
  record(event, id, amount = 1) {
    let events = this.tracking[id].events;
    events[event] = (events[event]) ? events[event] + amount : amount;
  }


  /**
   * Decorate existing analytics object
   * @param {obj} parentAnalytics the parent's analytics
   * @param {obj} childAnalytics the child's analytics
   * @param {Array<obj>||obj} events the events to track
   */
  decorate(parentAnalytics = {}, childAnalytics = {}, events = null) {
    return {
      name: (parentAnalytics.name || '') + (parentAnalytics.name && childAnalytics.name ? '-' : '') + (childAnalytics.name || ''),
      tags: (parentAnalytics.tags || '') + (parentAnalytics.tags && childAnalytics.tags ? ' > ' : '') + (childAnalytics.tags || ''),
      events
    };
  }
}

export default (new Analytics());