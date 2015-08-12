'use strict';

describe('Service: locaisComida', function () {

  // load the service's module
  beforeEach(module('encontroApp'));

  // instantiate service
  var locaisComida;
  beforeEach(inject(function (_locaisComida_) {
    locaisComida = _locaisComida_;
  }));

  it('should do something', function () {
    expect(!!locaisComida).toBe(true);
  });

});
