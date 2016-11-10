'use strict';

app.factory('FriendService', [
		'$http',
		'$q',
		'$rootScope',
		function($http, $q, $rootScope) {
			console.log("FriendService...");

			var BASE_URL = 'http://localhost:8081/Binder/user'
			return {
				getMyFriends : function() {
					console.log("--> FriendService : calling 'getMyFriends' method.");
					return $http.get(BASE_URL + '/myFriends').then(
							function(response) {
								return response.data;
							}, function(errResponse) {
								console.error("-->FriendService : Error while fetching all my friends.)");
								return $q.reject(errResponse);
							});
				},
				
				sendFriendRequest : function(friendId) {
					console.log("--> FriendService : calling 'sendFriendRequest' method.");
					return $http.post(BASE_URL + '/addFriend/' + friendId).then(
							function(response) {
								return response.data;
							},
							function(errResponse) {
								console.error("-->FriendService : Error while sending friend request.")
								return $q.reject(errResponse);
							}
						);
				},
				
				updateFriendRequest : function(friend, id) {
					console.log("--> FriendService : calling 'updateFriendRequest' method.");
					return $http.put(BASE_URL+'/unFriend/'+friend.id).then(
							function(response) {
								return response.data;
							},
							function(errResponse) {
								console.error("-->FriendService : Error while unFriend existing friend.")
							}
						);
				}				
			};
		} ]);