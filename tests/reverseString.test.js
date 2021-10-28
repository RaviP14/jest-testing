import reverseString from "../code/reverseString";

test('reversed string', () => {
    expect(reverseString('string')).toBe('gnirts');
})

test('longer string', () => {
    expect(reverseString('welcome home')).toBe('emoh emoclew');
})