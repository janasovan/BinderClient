'use strict';

app.factory('BloService', [
		'$http',
		'$q',
		'$rootScope',
		function($http, $q, $rootScope) {
			console.log("BloService...")

			var BASE_URL = 'http://localhost:8081/BinderServer'
				
			return {
				fetchAllBlogs : function() {
					return $http.get(BASE_URL + '/blogs').then(
							function(response) {
								return response.data;
							}, function(errResponse) {
								console.error('Error while fetching Blogs');
								return $q.reject(errResponse);
							});
				},

				createBlog : function(blog) {
					return $http.post(BASE_URL + '/blog/', blog).then(
							function(response) {
								return response.data;
							}, function(errResponse) {
								console.error('Error while creating blog');
								return $q.reject(errResponse);
							});
				},
				
				
			}
		} ]);