const Manager = require('../lib/Manager.js');

test ("Can set office number via constructor", () => {
    const testval = '100';
    const employee = new Manager('Bob', 1, "test@test.com", testval);
    expect(employee.officeNumber).toBe(testval);
});
test ("getRole() should return \"Manager\"", () => {
    const testval = 'Manager';
    const employee = new Manager('Bob', 1, 'test@test.com', 100);
    expect(employee.getRole()).toBe(testval);
});
