import analyse from "../code/arrayAnalysis";


test('test for object', () => {
    const obj = analyse.arrayObject([1,2,3,4,5]);
    expect (obj).toMatchObject({
        average: 3,
        min: 1,
        max: 5,
        length: 5
    });
})

test('analysing object values from array', () => {
   const object = analyse.arrayObject([1,6,4,3,9,12,5]);
   expect(object.average).toBeCloseTo(5.7);
   expect(object.min).toBe(1);
   expect(object.max).toBe(12);
   expect(object.length).toBe(7);
})