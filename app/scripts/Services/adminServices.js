angular.module('adminService', [])
.factory('Admin', function($http, AuthToken) {
	var baseUrl = 'http://localhost:80'
	var adminFactory = {};
	var token = AuthToken.getToken();
	adminFactory.getInvites = function(term, callback) {
		return $http.get('/api/v2/admin/invite/request')
		.success(function(data) {
			return data;
		})
	};

	adminFactory.getInvite = function(requestUuid, callback) {
		return $http.get('/api/v2/admin/invite/request/'+requestUuid)
		.success(function(data) {
			return data;
		})
	};

	adminFactory.deleteInvite = function(requestUuid, callback) {
		return $http.delete('/api/v2/admin/invite/request/'+requestUuid)
		.success(function(data) {
			return data;
		})
	};
	
	adminFactory.deleteInvite = function(requestUuid, callback) {
		return $http.delete('admin/invite/request/'+requestUuid+'/send')
		.success(function(data) {
			return data;
		})
	};
})