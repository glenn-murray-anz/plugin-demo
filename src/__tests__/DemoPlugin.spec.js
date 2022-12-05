
import DemoPlugin from '../DemoPlugin.js';

describe('demo', () => {
  it('should be a class', () => {
    expect(typeof DemoPlugin).toEqual('function');
  });

  it('should not crash when instantiated', () => {
    new DemoPlugin();
  });
});
