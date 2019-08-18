import * as properties from 'properties';
import Transformer = jest.Transformer;


const DEFAULT_OPTIONS = {
  namespaces: true
};


const MODULE_EXPORTS_PREFIX = `module.exports = `;


const loader: Transformer = {
  process(sourceText: string, sourcePath: string, config: jest.ProjectConfig, options?: jest.TransformOptions): string | jest.TransformedSource {
    return `${MODULE_EXPORTS_PREFIX}${JSON.stringify(properties.parse(sourceText, DEFAULT_OPTIONS))}`;
  }
};

export = loader;
