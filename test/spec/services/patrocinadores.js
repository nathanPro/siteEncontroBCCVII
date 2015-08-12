'use strict';

describe('Service: patrocinadores', function () {

  // load the service's module
  beforeEach(module('encontroApp'));

  // instantiate service
  var patrocinadores;
  beforeEach(inject(function (_patrocinadores_) {
    patrocinadores = _patrocinadores_;
  }));

  it('should do something', function () {
    expect(!!patrocinadores).toBe(true);
  });

});
