'use strict';

describe('Controller: TerminalCtrl', function () {

  // load the controller's module
  beforeEach(module('encontroApp'));

  var TerminalCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TerminalCtrl = $controller('TerminalCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TerminalCtrl.awesomeThings.length).toBe(3);
  });
});
