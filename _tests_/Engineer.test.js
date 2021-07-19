const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('name', 'email', 2, 'github');
    expect(engineer.name).toBe('name');
    expect(engineer.email).toBe('email');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.github).toBe('github');
});

test('getRole() should return "Engineer"', () => {
    const testEngineer = 'Engineer';
    const engineer = new Engineer('Bri', 'bri@test.com', 2, 'github');
    expect(engineer.getRole()).toBe(testEngineer);
  });