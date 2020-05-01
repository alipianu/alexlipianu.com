import config from '../config';

/**
 * GET request
 * @param {String} path the request path
 * @returns {Promise} the request
 */
const get = (service = '', path = '') => {
  return fetch(`${config.api}/${service}${path}`, { redirect: 'follow' })
    .then((response) => {
      let result = response.json();
      if (!response.ok) result = result.then((err) => Promise.reject(err));
      return result;
    });
};

/**
 * POST request
 * @param {String} path the request path
 * @param {*} data the request body
 * @returns {Promise} the request
 */
const post = (service = '', path = '', data = {}) => {
  return fetch(`${config.api}/${service}${path}`, {
    method: 'POST',
    cache: 'no-cache',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: Object.keys(data).map((field) => `${encodeURIComponent(field)}=${encodeURIComponent(data[field])}`).join('&'),
    redirect: 'follow',
    credentials: 'include'
  })
    .then((response) => {
      let result = response.json();
      if (!response.ok) result = result.then((err) => Promise.reject(err));
      return result;
    });
};

/**
 * Send beacon
 * @param {String} path the request path
 * @param {String} data the request data
 */
const beacon = (service = '', path = '', data = '') => {
  navigator.sendBeacon(`${config.api}/${service}${path}`, data);
};

export default {
  get, post, beacon
};