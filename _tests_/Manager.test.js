const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('name', 'email', 4, 888);
    expect(manager.name).toBe('name');
    expect(manager.email).toBe('email');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('getRole() should return "Manager"', () => {
    const testManager = 'Manager';
    const manager = new Manager('Bri', 'bri@test.com', 3, 888);
    expect(manager.getRole()).toBe(testManager);
  });