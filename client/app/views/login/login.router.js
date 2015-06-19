'use strict';

(function () {
  angular
    .module('rex')
    .config(function ($stateProvider) {
      $stateProvider
        .state('main.login', {
          url: '/login',
          templateUrl: 'app/views/login/login.view.html',
          controller: 'LoginCtrl',
          controllerAs: 'login',
          title: 'Login'
        });
    });

}());
