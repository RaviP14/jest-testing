import capitalise from "../code/capitalise";

test('capitalise first letter', () => {
    expect(capitalise('project')).toBe('Project');
})