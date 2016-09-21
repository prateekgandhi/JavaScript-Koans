describe('Arrays - basics', function () {
  var array, isArray = function (value) {
    return value && typeof value === 'object' && value.constructor === Array;
  };
  beforeEach(function () {
    array = [1, 2, 3];
  });
  it('1 - should understand array literals', function () {
    var array = [1, '2', [3], false], returnArguments, args;
    expect(isArray(array)).toBe(true);
    expect(isArray(array[0])).toBe(false);
    expect(isArray(array[1])).toBe(false);
    expect(isArray(array[2])).toBe(true);
    expect(isArray(array[3])).toBe(false);
    returnArguments = function () {
      return arguments;
    };
    args = returnArguments(1, 2, 3);
    expect(isArray(args)).toBe(false);
  });
  it('2 - arguments recap', function () {
    var returnArguments = function () {
      return arguments;
    }, args;
    args = returnArguments(1, 2, 3);
    expect(args[0]).toEqual(1);
    expect(args[1]).toEqual(2);
    expect(args[2]).toEqual(3);
    expect(args.length).toEqual(3);
    expect(isArray(args)).toBe(false);
  });
  it('3 - should understand [] operator', function () {
    expect(array[1]).toBe(2);
    expect(array[3]).toBe(undefined);
  });
  it('4 - should understand [] operator', function () {
    array[3] = 4;
    expect(array[3]).toBe(4);
  });
  it('5 - should understand length property', function () {
    expect(array.length).toBe(3);
    array[2] = undefined;
    expect(array.length).toBe(3);
    array[99] = 100;
    expect(array.length).toBe(100);
    array[200] = undefined;
    expect(array.length).toBe(201);
  });
  it('6 - should understand length property', function () {
    var array = [1, , , , 5, , , , ];
    expect(array.length).toBe(8);
    //Try it in IE and FF
  });
  it('7 - should understand delete operator', function () {
    delete array[1];
    expect(array[1]).toBe(undefined);
    expect(array.length).toBe(3);
  });
  it('8 - should understand delete operator', function () {
    delete array[2];
    expect(array.length).toBe(3);
  });
  it('9 - should understand how for and for..in loops are used for iteration', function () {
    var array = [], i, iterationsFor = 0, name, iterationsForIn = 0;
    array[1000] = 1000; //1001
    for (i = array.length - 1; i >= 0; i -= 1) {
      iterationsFor += 1;
    }
    for (name in array) {
      iterationsForIn += 1;
    }
    expect(iterationsFor).toBe(1001);
    expect(iterationsForIn).toBe(1);
  });
});
