describe('Arrays - generic methods', function () {
  it('1 - should understand join is a generic method', function () {
    expect(Array.prototype.call('Hello', '.')).toBe('H.e.l.l.o');
    expect(Array.prototype.join.call({ 0: 'Zero', 1: 'First', 2: 'Second', length: 3 }, '-')).toBe('Zero-First-Second');
    expect(Array.prototype.join.call({ length: 3 }, '-')).toBe('');
  });
  it('2 - should understand push is a generic method', function () {
    var obj = { 0: 'Zero', 1: 'First', 2: 'Second', length: 3 };
    expect(Array.prototype.push.call(obj, 'Third', 'Fourth')).toBe(5);
    expect(obj).toEqual({ 0: 'Zero', 1: 'First', 2: 'Second', 3: 'Third', 4:'Fourth', length : 5});
    obj = {};
    expect(Array.prototype.push.call(obj, 'Myamoto', 'Hattori')).toBe(2);
    expect(obj).toEqual({0: 'Myamoto', 1: 'Hattori' , length : 2});
  });
  it('3 - should understand that in order to call/apply push method, the underlying object has to be mutable', function () {
    var hello = 'Hello';
    expect(Array.prototype.push.call(hello, '!')).toBe(__);
    expect(hello).toBe(__);//discuss this with your pair
  });
  it('4 - should understand that pop is generic method', function () {
    var obj = { 0: 'Zero', 1: 'First', 2: 'Second', 3: 'Third', 4: 'Fourth', length: 3 };
    expect(Array.prototype.pop.apply(obj)).toBe(__);
    expect(obj).toEqual(__);
  });
  it('5 - should understand shift is generic method', function () {
    var obj = { 0: 'Zero', 1: 'First', 2: 'Second', 3: 'Third', 4: 'Fourth', length: 3 };
    expect(Array.prototype.shift.apply(obj)).toBe(__);
    expect(obj).toEqual(__);
  });
  it('6 - should understand unshift is generic method', function () {
    var obj = { 0: 'Zero', 1: 'First', 2: 'Second', 3: 'Third', 4: 'Fourth', length: 3, name: 'Myamoto' };
    expect(Array.prototype.unshift.call(obj, 'Fifth', 'Sixth')).toBe(__);
    expect(obj).toEqual(__);
  });
  it('7 - should understand slice is generic method', function () {
    var obj = { 0: 'Zero', 1: 'First', 2: 'Second', 3: 'Third', 4: 'Fourth', length: 3 };
    expect(Array.prototype.slice.call(obj, 1)).toEqual(__);
  });
  it('8 - should understand splice is generic method', function () {
    var returnArguments = function () {
      return arguments;
    }, args, wasError = false;
    try {
      args = returnArguments(1, 2, 3);
      args.splice(0, 1);
    } catch (error) {
      wasError = true;
    }
    expect(wasError).toBe(__);
    expect(Array.prototype.splice.call(args, 0, 1)).toEqual(__);
    console.log(args);
    expect(args).toEqual({0 : 2, 1: 3});
  });
  it('9 - should understand reverse is generic method', function () {
    var obj = { 0: 'Zero', 1: 'First', 2: 'Second', 3: 'Third', 4: 'Fourth', length: 5 };
    Array.prototype.reverse.apply(obj);
    expect(obj).toEqual(__);
  });
  it('10 - should understand sort is generic method', function () {
    var obj = { 0: 'Zero', 1: 'First', 2: 'Second', 3: 'Third', 4: 'Fourth', length: 5 };
    Array.prototype.sort.apply(obj);
    expect(obj).toEqual(__);
  });
});
