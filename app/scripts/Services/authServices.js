angular.module('authService', [])
.factory('Auth', function($http, $q, AuthToken) {
	var authFactory = {};
	var baseUrl = 'http://localhost:80'

	authFactory.login = function(mobile, password) {

		return $http.post('/api/v2/user/login', {
			mobile: mobile,
			password: password
		})
		.success(function(data) {
			AuthToken.setToken(data.aToken);
			return data;
		})
	}

	authFactory.signup = function(data) {

		return $http.post('/api/v2/user/signup', data)
		.success(function(data) {
			AuthToken.setToken(data.aToken);
			return data;
		})
	}

	authFactory.adminSignup = function(data) {

		return $http.post('/api/v2/user/login', data)
		.success(function(data) {
			AuthToken.setToken(data.aToken);
			return data;
		})
	}

	authFactory.logout = function() {
		return $http.post('/api/v2/user/logout', {
			mobile: mobile,
			password: password
		})
		.success(function(data) {
			AuthToken.setToken();
			return data;
		})
	}

	authFactory.isLoggedIn = function() {
		if(AuthToken.getToken())
			return true;
		else
			return false;
	}
	return authFactory;
})
.factory('AuthToken', function($window) {
	var authTokenFactory = {};

	authTokenFactory.getToken = function() {
		return $window.localStorage.getItem('token');
	}

	authTokenFactory.setToken = function(token) {
		if(token)
			$window.localStorage.setItem('token', token);
		else
			$window.localStorage.removeItem('token');
	}
	return authTokenFactory;
})
.factory('AuthInterceptor', function($q, $location, AuthToken) {
	var interceptorFactory = {};

	interceptorFactory.request = function(config) {
		var token = AuthToken.getToken();
		if(token) {
			config.headers['a-access-token'] = token;
		}
		return config;
	};
	return interceptorFactory;
});
