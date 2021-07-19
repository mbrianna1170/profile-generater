const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern ('name', 'email', 3, 'school');
    expect(intern.name).toBe('name');
    expect(intern.email).toBe('email');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.school).toBe('school');
});