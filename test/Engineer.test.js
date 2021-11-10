const Engineer = require('../lib/Engineer.js');

test ("Can set Github account via constructor", () => {
    const testval = 'GithubUser';
    const employee = new Engineer('Bob', 1, "test@test.com", testval);
    expect(employee.github).toBe(testval);
});
test ("getRole() should return \"Engineer\"", () => {
    const testval = "Engineer"
    const employee = new Engineer('Bob', 1, 'test@test.com');
    expect(employee.getRole()).toBe(testval);
});
test("Can we get GitHub username via getGithub()", () => {
    const testval = "GithubUser";
    const employee = new Engineer('Bob', 1, "test@test.com", testval);
    expect(employee.getGithub()).toBe(testval);
  });