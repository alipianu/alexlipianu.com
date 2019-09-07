import config from '../config';

/**
 * GET request
 */
const get = (path = '') => {
  return fetch(`${config.api}/${path}`).then((response) => response.json());
};

export default {
  get
};