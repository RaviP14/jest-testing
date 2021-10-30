import caeser from "../code/caesarCipher";

test('cipher1', () => {
    expect(caeser.cipher('abc',2)).toBe('cde');
})

test('wrapping z to a', () => {
    expect(caeser.cipher('the best ever', 24)).toBe('rfc zcqr ctcp');
})

test('cipher puntuation test', () => {
    expect(caeser.cipher('hello, again?', 5)).toBe('mjqqt, flfns?');
})

test('cipher capital letter test', () => {
    expect(caeser.cipher('The World reCords', 12)).toBe('ftq iadxp dqoadpe');
})

test('cipher puntuation & capital letter test', () => {
    expect(caeser.cipher('HeLlo, agAin?', 5)).toBe('mjqqt, flfns?');
})

test('decipher1', () => {
    expect(caeser.decipher('cde', 2)).toBe('abc');
})

test('wrapping a to z', () => {
    expect(caeser.decipher('rfc zcqr ctcp', 24)).toBe('the best ever');
})

test('decipher puntuation test', () => {
    expect(caeser.decipher('mjqqt, flfns?', 5)).toBe('hello, again?');
})

test('decipher capital letter test', () => {
    expect(caeser.decipher('Ftq Iadxp dqOadpe', 12)).toBe('the world records');
})

test('decipher puntuation & capital letter test', () => {
    expect(caeser.decipher('MjQqt, flFns?', 5)).toBe('hello, again?');
})