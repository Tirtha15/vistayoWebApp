angular.module('vistayoApp')
.factory('Main', function($http) {
	var baseUrl = 'http://localhost:8000'
	var mainFactory = {};
	// var token = AuthToken.getToken();
	// mainFactory.invite = $resource('../data/states.json', {}, {
 //        query: { method: 'post', params: {}, isArray: false }
 //      })
	mainFactory.sendInvitation = function(emailId, mobile) {
		data = {
			'emailId': emailId,
			'mobile': mobile
		}
		
		return $http.post( baseUrl+'/api/v1.0/invite/request', data)
		.then(function(data) {
			data
		}, function(err) {
			console.log(err);
		})
		// $resource('http://13.126.181.243/api/v1.0/invite/request', {
		// 			'emailId': emailId,
		// 			'mobile': mobile
		// 		},
		// 		{
		// 			update: {method : "POST"}
		// 		})
		// .then(function(data) {
		// 	callback(data);
		// }, function(err) {
		// 	callback(err);
		// });
	}
	return mainFactory;
})