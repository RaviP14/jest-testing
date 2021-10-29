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