const properties = require('properties');

const DEFAULT_OPTIONS = {
  namespaces: true
};

module.exports = {
  process: (content) => {
    return properties.parse(content, DEFAULT_OPTIONS);
  }
};

