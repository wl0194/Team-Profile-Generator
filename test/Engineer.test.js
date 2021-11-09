const Engineer = require('../lib/Engineer.js');

test ("Can we add an employee instance", () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
});