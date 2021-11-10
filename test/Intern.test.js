const Intern = require('../lib/Intern.js');


test ("Can set school via constructor", () => {
    const testval = 'UPENN';
    const employee = new Intern('Bob', 1, "test@test.com", testval);
    expect(employee.school).toBe(testval);
});
test ("getRole() should return \"Intern\"", () => {
    const testval = 'Intern';
    const employee = new Intern('Bob', 1, 'test@test.com');
    expect(employee.getRole()).toBe(testval);
});
test ("Can get school via getSchool()", () => {
    const testval = 'UPENN';
    const employee = new Intern('Bob', 1, "test@test.com", testval);
    expect(employee.getSchool()).toBe(testval);
  });