'use strict';

app.factory('ForumService', ['$http', '$q', '$rootScope',
		function($http, $q, $rootScope) {
			console.log("ForumService...")

			var BASE_URL = 'http://localhost:8081/Binder'
				return {
				
				getSelectedForum : function(id) {
					return $http
								.get(BASE_URL+'/forum/'+ id)
								.then(function(response) {
									return response.data;
								},
								function(errResponse) {
									console.error('Error while Fetching Forum.');
									return $q.reject(errResponse);
								});
				},
				
				fetchAllForums : function() {
					return $http
								.get(BASE_URL + '/forums')
								.then(function(response) {
									return response.data;
								}, 
								function(errResponse) {
									console.error('Error while fetching Forums');
									return $q.reject(errResponse);
								});
				},

				createForum : function(forum) {
					return $http
								.post(BASE_URL + '/forum/', forum)
								.then(function(response) {
									return response.data;
								}, 
								function(errResponse) {
									console.error('Error while creating forum');
									return $q.reject(errResponse);
								});
				},
				
				updateForum : function(forum, id) {
					return $http
								.put(BASE_URL+'/forum/'+id)
								.then(function(response) {
									return response.data;
								},
								function(errResponse) {
									console.error('Error while updating Forum');
									return $q.reject(errResponse);
								});
				},
				
				deleteForum : function(id) {
					return $http
								.delete(BASE_URL+'/forum/'+id)
								.then(function(response) {
									return response.data;
								},
								function(errResponse) {
									console.log('Error while deleting Forum');
									return $q.reject(errResponse);
								});
				}
				
			};
		} ]);