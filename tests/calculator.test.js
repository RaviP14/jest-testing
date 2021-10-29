import calculator from "../code/calculator";

test('add', () => {
    const sum = new calculator(1, 2);
    expect(sum.add()).toBe(3);
})

test('subtract', () => {
    const sum2 = new calculator(4,1);
    expect(sum2.subtract()).toBe(3);
})

test('multiply', () => {
    const sum3 = new calculator(5, 2);
    expect(sum3.multiply()).toBe(10);
})

test ('divide', () => {
    const sum4 = new calculator(20, 4);
    expect (sum4.divide()).toBe(5);
})