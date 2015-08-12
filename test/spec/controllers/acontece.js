'use strict';

describe('Controller: AconteceCtrl', function () {

  // load the controller's module
  beforeEach(module('encontroApp'));

  var AconteceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AconteceCtrl = $controller('AconteceCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AconteceCtrl.awesomeThings.length).toBe(3);
  });
});
