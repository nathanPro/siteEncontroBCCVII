'use strict';

describe('Controller: PalestrantesCtrl', function () {

  // load the controller's module
  beforeEach(module('encontroApp'));

  var PalestrantesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PalestrantesCtrl = $controller('PalestrantesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PalestrantesCtrl.awesomeThings.length).toBe(3);
  });
});
