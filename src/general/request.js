import config from '../config';

// preload cache for assets
const preloadCache = {};
const imageRegex = RegExp(/https:\/\/[^"]+\.(jpg|jpeg|png)/g);

/**
 * GET request
 * @param {String} path the request path
 * @returns {Promise} the request
 */
const get = (service = '', path = '') => {
  return fetch(`${config.api}/${service}${path}`, { redirect: 'follow' })
    .then((response) => (response.ok) ? response.text() : response.json().then((body) => Promise.reject(body)))
    .then((text) => {
      // get json body for result
      const body = JSON.parse(text);

      // preload any image urls in the body
      const preload = [];
      text.match(imageRegex).forEach((url) => {
        if (!preloadCache[url]) {
          preloadCache[url] = new Image();
          preload.push(new Promise((resolve) => {
            preloadCache[url].onload = () => resolve(url);
            preloadCache[url].onerror = () => resolve(url);
          }));
          preloadCache[url].src = url;
        }
      });

      // once all images have been loaded, return JSON result
      return Promise.all(preload).then(() => Promise.resolve(body));
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