'use strict';

receipt_module.controller('DeveloperController', function ($scope, $state, SettingsFactory) {
    console.log('Hi from Developer Controller');

    var settings = SettingsFactory.get();
    $scope.input = settings;

    $scope.save = function () {
        SettingsFactory.set($scope.input);
//        $ionicHistory.goBack();
        $state.go('root.login');
    };


});
