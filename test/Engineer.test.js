const Engineer = require('../lib/Engineer.js');

test ("Can set Github account via constructor", () => {
    const testval = 'GithubUser';
    const engineer = new Engineer('Bob', 1, "test@test.com", testval);
    expect(engineer.github()).toBe(testval);
});
test ("getRole() should return \"Engineer\"", () => {
    const testval = "Engineer"
    const engineer = new Engineer('Sarah', 1, 'test@test.com');
    expect(engineer.getRole()).toBe(testval);
});
test("Can we get GitHub username via getGithub()", () => {
    const testval = "GithubUser";
    const engineer = new Engineer('Bob', 1, "test@test.com", testval);
    expect(engineer.getGithub()).toBe(testval);
  });