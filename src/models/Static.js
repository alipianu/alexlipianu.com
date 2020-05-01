import request from '../general/request';
import config from '../config.json';

/**
 * Get content
 * @param {number} contentID - the content ID
 * @returns {Promise} the content request
 */
export const getContent = (contentID) => request.get('v1/static', `/content/${contentID}/version/${config.version.replace(/\./g, '0')}`);

export default {
  getContent
};