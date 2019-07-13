const properties = require('properties');

const DEFAULT_OPTIONS = {
  namespaces: true
};

const MODULE_EXPORTS_PREFIX = 'module.exports=';

module.exports = {
  process: (content) => {
    return `${MODULE_EXPORTS_PREFIX}${properties.parse(content, DEFAULT_OPTIONS)}`;
  }
};

