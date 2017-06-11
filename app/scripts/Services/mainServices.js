angular.module('mainService', [])
.factory('Main', function($http, AuthToken) {
	var baseUrl = 'http://localhost:80'
	var mainFactory = {};
	var token = AuthToken.getToken();
	mainFactory.authSendInvitation = function(term, callback) {
		return $http.post('/api/v2/invite/request', {
			emailId: emailId:,
			mobile: mobile
		})
		.success(function(data) {
			return data;
		})
	};
	
})