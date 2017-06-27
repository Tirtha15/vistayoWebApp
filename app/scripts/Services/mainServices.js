angular.module('vistayoApp')
.factory('Main', function($resource) {
	var baseUrl = 'http://13.126.181.243'
	var mainFactory = {};
	// var token = AuthToken.getToken();
	// mainFactory.invite = $resource('../data/states.json', {}, {
 //        query: { method: 'post', params: {}, isArray: false }
 //      })
	mainFactory.sendInvitation = function(emailId, mobile) {
		console.log(emailId, mobile);
		// $http({
		// 	url: baseUrl+'/api/v1.0/invite/request',
		// 	method:"POST",
		// 	// headers: {
		// 	// 	'content-type': 'application/json'
		// 	// },
			data = {
				'emailId': emailId,
				'mobile': mobile
			}
		// }).then(function(data){
		// 	callback(data);
		// }, function(err) {
		// 	if(err) {
		// 		console.log(err);
		// 	}
		// })
		return $resource(
        baseUrl+'/api/v1.0/invite/request', 
        {}, 
        {
            create: { 
                method: "POST",
                body: {
				'emailId': emailId,
				'mobile': mobile
                },
        		headers: { 'content-type': 'application/json' }
            }
        }
    )
		// $http.post( baseUrl+'/api/v1.0/invite/request', data)
		// .then(function(data) {
		// 	callback(data);
		// }, function(err) {
		// 	console.log(err);
		// })
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