describe('Enumerating properties', function () {
  it('1 - should understand for-in loop', function () {
    var samurai = {
      name: 'Myamoto',
      age: 32,
      address: {
        street: 'Samurai Way',
        postcode: '18+'
      },
      toString: function () {
        return 'I\'m a Samurai!';
      }
    }, name, properties = 0, ownProperties = 0, enumerableProperties = 0;
    for (name in samurai) {
      properties += 1;
      if (samurai.hasOwnProperty(name)) {
        ownProperties += 1;
      }
      if (samurai.propertyIsEnumerable(name)) {
        enumerableProperties += 1;
      }
    }
    expect(properties).toBe(4);
    expect(ownProperties).toBe(4);
    expect(enumerableProperties).toBe(4);
  });
});
