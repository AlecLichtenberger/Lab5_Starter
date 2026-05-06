// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2


//isPhoneNumber True
test('is a valid phone number', () => {
    expect(isPhoneNumber('(858) 123-4567')).toBe(true);
});
test('is a valid phone number', () => {    
  expect(isPhoneNumber('(677) 353-2331')).toBe(true);
});

//isPhoneNumber False
test('is not a valid phone number', () => {
    expect(isPhoneNumber('1234567890')).toBe(false);
});
test('is not a valid phone number', () => {    
  expect(isPhoneNumber('(123) 456-78')).toBe(false);
});

//isEmail True
test('is a valid email', () => {
    expect(isEmail('test@example.com')).toBe(true);
});
test('is a valid email', () => {
    expect(isEmail('user_name@domain.com')).toBe(true);
});

//isEmail False
test('is not a valid email', () => {
    expect(isEmail('user.name@domain')).toBe(false);
});
test('is not a valid email', () => {
    expect(isEmail('user.name@.com')).toBe(false);
});

//isStrongPassword True
test('is a strong password', () => {
    expect(isStrongPassword('Password1')).toBe(true);
});
test('is a strong password', () => {
    expect(isStrongPassword('hello_world')).toBe(true);
});

//isStrongPassword False
test('is not a strong password', () => {
    expect(isStrongPassword('1password')).toBe(false);
});
test('is not a strong password', () => {
    expect(isStrongPassword('ab')).toBe(false);
});

//isDate True
test('is a valid date', () => {
    expect(isDate('12/25/2023')).toBe(true);
});
test('is a valid date', () => {
    expect(isDate('1/1/2024')).toBe(true);
});

//isDate False
test('is not a valid date', () => {
    expect(isDate('13-25-2023')).toBe(false);
});
test('is not a valid date', () => {
    expect(isDate('2023/12/25')).toBe(false);
});

//isHexColor True
test('is a valid hex color', () => {
    expect(isHexColor('#fff')).toBe(true);
});
test('is a valid hex color', () => {
    expect(isHexColor('a1b2c3')).toBe(true);
});

//isHexColor False
test('is not a valid hex color', () => {
    expect(isHexColor('#gg0000')).toBe(false);
});
test('is not a valid hex color', () => {
    expect(isHexColor('#1234567')).toBe(false);
});
