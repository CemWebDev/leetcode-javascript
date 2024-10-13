const createHelloWorld = require('../easy/create-hello-world-function');

describe('Create hello world function', () => {
  test('should return hello world', () => {
    const createHelloWorldFunc = createHelloWorld();
    expect(createHelloWorldFunc()).toBe('Hello World');
    expect(createHelloWorldFunc()).toBe('Hello World');
    expect(createHelloWorldFunc()).toBe('Hello World');
  });
});
