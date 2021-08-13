const functions = require('./functions');
const initDatabase = () => console.log('Database initialized...');
const closeDatabase = () => console.log('Database closed...');

// Runs only once before the first test, and after the last test
// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());

// Runs every time before the tests, and after the tests
// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());

describe('testing equality on primitive values', () => {
  // Runs only within the describe block, only once before the first test, and after the last test
  // beforeAll(() => initDatabase());
  // afterAll(() => closeDatabase());

  // Runs only within the describe block, every time before the tests, and after the tests
  // beforeEach(() => initDatabase());
  // afterEach(() => closeDatabase());
  test('Adds 2 + 2 equal 4', () => {
    // expect( *the function that we are testing with test parameters*  ). *we add a MATCHER (there's a lot of different matchers in jest)*
    expect(functions.add(2, 2)).toBe(4);

    // run the tests from terminal: "npm test"

    // uncomment to see a test fail
    // expect(functions.add(2, 2)).toBe(5);
  });

  test('Adds 2 + 2 to NOT equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
  });
});

describe('Testing for Truthy & Falsy values', () => {
  // CHECK FOR TRUTHY & FALSY VALUES
  // toBeNull matches only null
  // toBeUndefined matches only undefined
  // toBeDefined is the oposite of toBeUndefined
  // toBeTruthy matches anything that an if statement treats as true
  // toBeFalsy matches anything that an if statement treats as false

  test('Should be null', () => {
    expect(functions.isNull()).toBe(null);
    expect(functions.isNull()).toBeNull();
    expect(functions.isNull()).toBeFalsy();
    expect(functions.isNull()).not.toBeTruthy();
  });

  test('Should be falsey', () => {
    expect(functions.checkValue(null)).toBeFalsy();
    expect(functions.checkValue(undefined)).toBeFalsy();
    expect(functions.checkValue(0)).toBeFalsy();
    expect(functions.checkValue('')).toBeFalsy();
    expect(functions.checkValue(NaN)).toBeFalsy();
    expect(functions.checkValue(false)).toBeFalsy();
  });
});

describe('Testing non-primitive values', () => {
  test('User should be Brad Traversy object', () => {
    // This one failed:  expect(functions.createUser()).toBe({ firstName: 'Brad', lastName: 'Traversy' });
    // toBe() only works on primitive values
    // use toEqual for deep equality
    // toStrictEqual also checks that the two objects have the same type
    expect(functions.createUser()).toEqual({
      firstName: 'Brad',
      lastName: 'Traversy',
    });
  });
});

describe('Testing intervals', () => {
  test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 700;
    const load3 = 800;
    expect(load1 + load2).toBeLessThan(1600);
    expect(load1 + load3).toBeLessThanOrEqual(1600);
  });
});

describe('Testing strings with regular expressions', () => {
  test('There is no I in team', () => {
    // .toMatch( *regular expression* )
    expect('team').not.toMatch(/I/);
    expect('team').toMatch(/t/);
    expect('team').toMatch(/e/);
    expect('team').toMatch(/a/);
    expect('team').toMatch(/m/);
    expect('team').toMatch(/^[aemt]{4}$/);
  });
});

describe('Testing arrays', () => {
  test('Admin should be in usernames', () => {
    let usernames = ['karen', 'john', 'admin'];
    expect(usernames).toContain('admin');
  });
});

describe('Working with async data', () => {
  test('Promise: User fetched name should be Leanne Graham', () => {
    // number of assertations are the number of async calls.
    expect.assertions(1);
    // without the number of assertations, and the return,
    // the test will pass without checking the result
    return functions.fetchUser().then((data) => {
      expect(data.name).toEqual('Leanne Graham');
    });
  });

  test('Async/Await: User fetched name should be Leanne Graham', async () => {
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham');
  });
});
