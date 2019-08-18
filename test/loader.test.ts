import * as path from 'path';
import * as fs from 'fs';
import * as loader from '@/index';

const sampleSource = fs.readFileSync(path.join(__dirname, './__fixtures__/sample.properties')).toString();

describe('jest-property-loader', () => {

  it('# should load properties file in jest correctly', () => {
    const transformedResult = loader.process(sampleSource, null, null);

    expect(transformedResult).toMatchSnapshot();
  });
});
