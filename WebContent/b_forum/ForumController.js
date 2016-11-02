'use strict';

app.controller('ForumController', [
		'$scope',
		'ForumService',
		'$location',
		'$rootScope',
		function($scope, ForumService, $location, $rootScope) {
			console.log("ForumController...")

			var self = this;
			self.forum = {
				id : '',
				description : '',
				post_date : '',
				userId : '',
				errorCode : '',
				errorMessage : ''
			}
			self.forums = [];

			/**
			 * method definition.....
			 */

			self.getSelectedForum = function(id) {
				console.log("getting forum with id : " + id);
				ForumService.getSelectedForum(id).then(function(d) {
					self.forum = d;
					
					console.log("test  "+d);
					$location.path('/view_forum');
				}, function(errResponse) {
					console.error('Error while fetching Forum...');
				});
			};

			self.fetchAllForums = function() {
				ForumService.fetchAllForums().then(function(d) {
					self.forums = d;
				}, function(errResponse) {
					console.error('Error while fetching Forums...');
				});
			};

			self.createForum = function(forum) {
				ForumService.createForum(forum).then(self.fetchAllForums,
						function(errResponse) {
							console.error('Error while creating forum...');
						});
			};

			self.updateForum = function(forum, id) {
				ForumService.updateForum(forum).then(self.fetchAllForums,
						function(errResponse) {
							console.error('Error while updating forum...')
						});
			};

			self.deleteForum = function(id) {
				ForumService.deleteForum(id).then(self.fetchAllForums,
						function(errResponse) {
							console.error('Error while deleting forum...')
						});
			};

			self.fetchAllForums();

			self.submit = function() {
				{
					console.log('Saving new Forum', self.forum);
					self.createForum(self.forum);
				}
				self.reset();
			};

			self.edit = function(id) {
				console.log('id to be edited', id);
				for (var i = 0; i < self.forums.length; i++) {
					if (self.forums[i].id === id) {
						self.forum = angular.copy(self.forums[i]);
						break;
					}
				}
			};

			self.remove = function(id) {
				console.log('id to be deleted', id);
				if (self.forum.id === id) {
					self.reset();
				}
				self.deleteForum(id);
			};

			self.reset = function() {
				console.log('submit a new Forum', self.forum);
				self.forum = {
						id : '',
						description : '',
						post_date : '',
						userId : '',
						errorCode : '',
						errorMessage : ''
				};
				$scope.myForm.$setPristine(); // reset form...
			};
		} ]);