const Employee = require('../lib/Employee')

test('creates an employee object', () => {
    const employee = new Employee('name', 'email', 1);
    expect(employee.name).toBe('name');
    expect(employee.email).toBe('email');
    expect(employee.id).toEqual(expect.any(Number));
});


test('getRole() should return "Employee"', () => {
    const testEmployee = 'Employee';
    const employee = new Employee('Bri', 'bri@test.com', 1);
    expect(employee.getRole()).toBe(testEmployee);
  });