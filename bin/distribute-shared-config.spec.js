const chai = require('chai');

const distribute = require('./distribute-shared-config');

const expect = chai.expect;

describe('distribute-shared-config', () => {

  describe('processBreakpointsForSass() function', () => {

    let breakpointData;
    beforeEach(() => {
      breakpointData = [
        {
          "name": "bkpt-site--x-narrow",
          "threshold": 320
        },
        {
          "name": "bkpt-site--narrow",
          "threshold": 480
        }
      ]
    });

    it('is a function', () => {
      const observed = distribute.processBreakpointsForSass(breakpointData);
      const expected = "$bkpt-site--x-narrow: 320;\n$bkpt-site--narrow: 480;\n";
      expect(observed).to.equal(expected);
    });

  });

  describe('getConfigPath() function', () => {

    it('by default returns a file path with the filename component of "shared-config.json"', () => {
      expect(distribute.getConfigPath([])).to.match(/^.*[^\/]*shared-config.json$/);
    });

    it('can be overridden to return a different filename component', () => {
      const customFilenameArgs = ['--sharedConfig=some-non-default-file.json'];
      expect(distribute.getConfigPath(customFilenameArgs)).to.match(/^.*[^\/]*some-non-default-file.json$/);
    });

  });

});
