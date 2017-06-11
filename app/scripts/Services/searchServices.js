angular.module('searchService', [])
.factory('Search', function($http, AuthToken) {
	var baseUrl = 'http://localhost:80'
	var searchFactory = {};
	var token = AuthToken.getToken();
	searchFactory.authCompleteSearch = function(term, callback) {
		$http({
			url:'api/v2/holidays/suggest',
			method:'GET',
			headers:{'a-access-token': token},
			params: {
			term: term
			}
		})
		.success(function(response){
			callback(response);
		})
	};
	searchFactory.ThemeSearch = function(keyword, params, callback) {
		$http({
			url:'api/v2/holidays/theme/'+'keyword',
			method:'GET',
			headers:{'a-access-token': token},
			params: {
				from: params.from || 0,
				limit: params.limit || 20,
				isInternational: params.isInternational,
				isDomestic: params.isDomestic,
				monthOfTravel: params.monthOfTravel,
				idealFor: params.idealFor,
				attractions: params.attractions
			}
		})
		.success(function(response){
			callback(response);
		})
	};
	searchFactory.Themedestination = function(keyword, params, callback) {
		$http({
			url:'api/v2/holidays/destination/'+'keyword',
			method:'GET',
			headers:{'a-access-token': token},
			params: {
				from: params.from || 0,
				limit: params.limit || 20,
			}
		})
		.success(function(response){
			callback(response);
		})
	};
})