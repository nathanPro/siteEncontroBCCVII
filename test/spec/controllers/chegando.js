'use strict';

describe('Controller: ChegandoCtrl', function () {

  // load the controller's module
  beforeEach(module('encontroApp'));

  var ChegandoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ChegandoCtrl = $controller('ChegandoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ChegandoCtrl.awesomeThings.length).toBe(3);
  });
});
