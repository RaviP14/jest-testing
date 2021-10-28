import capitalise from "../code/capitalise";

test('capitalise first letter', () => {
    expect(capitalise('project')).toBe('Project');
})

test('two word string', () => {
    expect(capitalise('one two')).toBe('One Two');
})

test('Multiple word string', () => {
    expect(capitalise('one two three four')).toBe('One Two Three Four');
})

test('random capitol letters', () => {
    expect(capitalise('heLLo WoRld')).toBe('Hello World');
})