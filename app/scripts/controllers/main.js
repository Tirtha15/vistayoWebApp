'use strict';

angular.module('vistayoApp')
  .controller('MainCtrl', function ($rootScope, $location, Auth, $scope, Main) {
    var vm = this;
    vm.loginError = false;
    vm.inviteMobile = '';
    vm.inviteEmail = '';

    $rootScope.$on('$routeChangeStart', function() {
		vm.homePage = ($location.path()=='/'? true:false);
        console.log(vm.homePage, Auth.isLoggedIn());
		vm.loggedIn = Auth.isLoggedIn();
		if (vm.loggedIn === false && vm.homePage === false) {
			// vm.loginError = true;
            $location.path('/');

		}
	});
    vm.loggedIn = Auth.isLoggedIn();
    vm.sendInvite = function() {
        console.log('sendInvite', vm.inviteMobile, vm.inviteEmail);
    	var response = Main.sendInvitation(vm.inviteEmail, vm.inviteMobile, function(err, response){
    	   console.log('response', response);
           if(response.responseCode == 200) {
                
    	   } else {

           }
        })
    }
    vm.login = function(mobile, pass) {
        console.log(mobile, pass)
        Auth.login(mobile, pass, function(err, data) {
            if(!err && data) {
                console.log(vm.loggedIn);
                vm.loggedIn = Auth.isLoggedIn();
                console.log(vm.loggedIn);
            } else {
                vm.loggedIn = Auth.isLoggedIn();
                console.log(err);
            }
        });

    }
    // var response = Main.sendInvitation(vm.inviteEmail, vm.inviteMobile).create();
})