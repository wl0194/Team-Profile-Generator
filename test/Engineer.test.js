const Engineer = require('../lib/Engineer.js');

test ("Can set Github account via constructor", () => {
    const github = 'amyyhh';
    const engineer = new Engineer(github);
    expect(engineer.github).toBe(github);
});
test ("getRole() should return \"Engineer\"", () => {
    const testval = "Engineer"
    const engineer = new Engineer('Sarah', 1, 'test@test.com');
    expect(engineer.getRole()).toBe(testval);
});