'use strict';

describe('Controller: ColaboreCtrl', function () {

  // load the controller's module
  beforeEach(module('encontroApp'));

  var ColaboreCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ColaboreCtrl = $controller('ColaboreCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ColaboreCtrl.awesomeThings.length).toBe(3);
  });
});
