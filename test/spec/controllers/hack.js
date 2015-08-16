'use strict';

describe('Controller: HackCtrl', function () {

  // load the controller's module
  beforeEach(module('encontroApp'));

  var HackCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HackCtrl = $controller('HackCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(HackCtrl.awesomeThings.length).toBe(3);
  });
});
