import calculator from "../code/calculator";

test('add', () => {
    const sum = new calculator(1, 2)
    expect(sum.add()).toBe(3);
})