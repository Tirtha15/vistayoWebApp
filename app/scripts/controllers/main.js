'use strict';

angular.module('mainController', [])
  .controller('MainCtrl', function ($rootScope, $location, Auth, $scope, Main) {
    var vm = this;
    vm.loginError = false;
    $rootScope.$on('$routeChangeStart', function() {
		vm.HomePage = ($location.path()=='/'? true:false);
		vm.loggedIn = Auth.isLoggedIn();
		if (vm.loggedIn === false && vm.HomePage===false) {
			vm.loginError = true;
		}
	});
    vm.sendInvite = function(mobile, email) {
    	var response = Main.sendInvitation(mobile, email);
    	if(response.responseCode == 200) {

    	} else {

    	}
    }
  })
