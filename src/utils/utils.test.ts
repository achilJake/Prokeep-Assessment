import { isValidEmail } from './utils';

describe.each([
  ['example@email.com', true],
  ['test123@gmail.com', true],
  ['user.name@example.co.uk', true],
  ['notanemail', false],
  ['missing@at', false],
  ['missingdot@.com', false],
  ['@missingusername.com', false],
])('isValidEmail(%s)', (email, expected) => {
  it(`should return ${expected} for email "${email}"`, () => {
    expect(isValidEmail(email)).toBe(expected);
  });
});
