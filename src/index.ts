import * as properties from 'properties';


const DEFAULT_OPTIONS = {
  namespaces: true
};


const MODULE_EXPORTS_PREFIX = `module.exports = `;


const loader = {
  process(sourceText: string, sourcePath: string, config, options?): string {
    return `${MODULE_EXPORTS_PREFIX}${JSON.stringify(properties.parse(sourceText, DEFAULT_OPTIONS))}`;
  }
};

export = loader;
