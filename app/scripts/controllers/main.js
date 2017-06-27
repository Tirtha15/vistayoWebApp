'use strict';

angular.module('vistayoApp')
  .controller('MainCtrl', function ($rootScope, $location, Auth, $scope, Main) {
    var vm = this;
    vm.loginError = false;
    vm.inviteMobile = '';
    vm.inviteEmail = '';
    $rootScope.$on('$routeChangeStart', function() {
		vm.HomePage = ($location.path()=='/'? true:false);
		vm.loggedIn = Auth.isLoggedIn();
		if (vm.loggedIn === false && vm.HomePage===false) {
			vm.loginError = true;
		}
	});
    vm.sendInvite = function() {
        console.log('sendInvite', vm.inviteMobile, vm.inviteEmail);
    // 	var response = Main.sendInvitation(vm.inviteEmail, vm.inviteMobile, function(err, response){
    // 	// if(response.responseCode == 200) {
    //         alert(response);                
    // 	// } else {

    // 	// }
    // })
    var response = Main.sendInvitation(vm.inviteEmail, vm.inviteMobile).create();
  }
})