const _ = require('lodash');
const path = require('path');
const fs = require('fs');
const jestPropertyLoader = require('../lib');

const sampleSource = fs.readFileSync(path.join(__dirname, './__fixtures__/sample.properties')).toString();

describe('jest-property-loader', () => {

  it('# should load properties file in jest correctly', () => {
    const transformedResult = jestPropertyLoader.process(sampleSource);

    expect(transformedResult).not.toBeUndefined();
    expect(_.get(transformedResult, 'foo.bar')).toEqual('foobar');
  });
});
