const deepEqual = require('../exercises/4.deepValue');

describe('deepEqual()', () => {
    it('should return true when both arguments are primitive values and equal', () => {
        expect(deepEqual(10, 10)).toBe(true);
        expect(deepEqual(null, 10)).toBe(false);
        expect(deepEqual(true, true)).toBe(true);
        expect(deepEqual("aaa", "aaa")).toBe(true);
        expect(deepEqual("aaa", "aba")).toBe(false);
    });

    it('should return false if one of the arguments is an object and the other is null', () => {
       expect(deepEqual({name: "A"}, null)).toBe(false);
       expect(deepEqual(null, {name: "A"})).toBe(false);
    });

    it('should return true when both arguments are objects and are equal in the first level', () => {
       expect(deepEqual({name: "A"}, {name: "A"})).toBe(true);
       expect(deepEqual({name: "A", age: 30}, {name: "A", age: 30})).toBe(true);
    });

    it('should return true when both arguments are objects and are deeply equal', () => {
        const objA = {
            name: "A", 
            child: {
                name: "childOfA" 
            }
        };

        const objB = {
            name: "A", 
            child: {
                name: "childOfA" 
            }
        };

        expect(deepEqual(objA, objB)).toBe(true);
     });
});