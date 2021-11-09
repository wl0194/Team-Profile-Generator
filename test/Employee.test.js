const Employee = require('../lib/Employee.js');


test ("Can we add an employee instance", () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
});
test ("Can we pass through the name via constructor", () => {
    const name = 'Amy';
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});
test ("Id is set via constructor", () => {
    const testval = 100;
    const employee = new Employee('Bob', testval);
    expect(employee.id).toBe(testval);
});
test ("Can we getName via getName()", () => {
    const testval = 'Amy';
    const employee = new Employee(testval);
    expect(employee.getName()).toBe(testval);
});
test ("Can we getId via getId()", () => {
    const testval = 100;
    const employee = new Employee('Bob', testval);
    expect(employee.getId()).toBe(testval);
});
test ("Can you add email via contstructor", () => {
    const testval = "test@test.com"
    const employee = new Employee('Bob', 1, testval);
    expect(employee.email).toBe(testval);
});
test ("Can we getEmail via getEmail()", () => {
    const testval = "test@test.com"
    const employee = new Employee('Bob', 1, testval);
    expect(employee.getEmail()).toBe(testval);
});
test ("getRole() should return \"Employee\"", () => {
    const testval = "Employee"
    const employee = new Employee('Bob', 1, 'test@test.com');
    expect(employee.getRole()).toBe(testval);
});

