angular.module('vistayoApp')
.factory('Auth', function($http, $q, AuthToken) {
	var authFactory = {};
	var baseUrl = 'http://localhost:8000'

	authFactory.login = function(mobile, password, callback) {

		$http.post(baseUrl + '/api/v1.0/user/login', {
			mobile: mobile,
			password: password
		})
		.then(function(data) {
			AuthToken.setToken(data.data.aToken);
			callback (null, data);
			}, function(err) {
			AuthToken.setToken();
			callback (err, null);
		})
	}

	authFactory.signup = function(data) {

		return $http.post('/api/v1.0/user/signup', data)
		.then(function(data) {
			AuthToken.setToken(data.data.aToken);
			return data;
		}, function(err) {
			AuthToken.setToken();
			return err;
		})
	}

	authFactory.adminSignup = function(data) {

		return $http.post('/api/v1.0/user/login', data)
		.then(function(data) {
			AuthToken.setToken(data.data.aToken);
			return data;
		}, function(err) {
			AuthToken.setToken();
			return err;
		})
	}

	authFactory.logout = function() {
		return $http.post('/api/v1.0/user/logout', {
			mobile: mobile,
			password: password
		})
		.then(function(data) {
			AuthToken.setToken();
			return data;
		}, function(err) {
			AuthToken.setToken();
			return err;
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
		console.log('called');
		var token = AuthToken.getToken();
		if(token) {
			config.headers['a-access-token'] = token;
		}
		return config;
	};
	return interceptorFactory;
});
