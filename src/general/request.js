import config from '../config';

/**
 * GET request
 */
const get = (path = '') => {
  return fetch(`${config.api}/${path}`).then((response) => response.json());
};

/**
 * POST request
 */
const post = (path = '', body = {}) => {
  return fetch(`${config.api}/${path}`, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    //credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow', // manual, *follow, error
    //referrer: 'no-referrer', // no-referrer, *client
    body: JSON.stringify(body), // body data type must match "Content-Type" header
  }).then((response) => response.json());
};

export default {
  post,
  get
};