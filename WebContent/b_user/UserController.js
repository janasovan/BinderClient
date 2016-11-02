'use strict';

app.controller('UserController', [
		'$scope',
		'UserService',
		'$location',
		'$rootScope',
		function($scope, UserService, $location, $rootScope) {
			console.log("UserController....")
			var self = this;
			self.user = {
				"errorCode": '',
				"errorMessage": '',
				"id": '',
				"name": '',
				"password": '',
				"gender": '',
				"email": '',
				"phone": '',
				"role": '',
				"isOnline": '',
				"image": '',
				"photos": ''
			};
			self.users = [];

			self.fetchAllUsers = function() {
				UserService.fetchAllUsers().then(function(d) {
					self.users = d;
				}, function(errResponse) {
					console.error('Error while fetching Users...');
				});
			};

			self.createUser = function(users) {
				UserService.createUser(users).then(self.fetchAllUsers,
						function(errResponse) {
							console.error('Error while creating User...');
						});
			};

			self.updateUser = function(users, id) {
				UserService.updateUser(users, id).then(self.fetchAllUsers,
						function(errResponse) {
							console.error('Error while updating User...');
						});
			};

			self.authenticate = function(users) {
				UserService.authenticate(users).then(function(d) {
					self.users = d;
					if ($rootScope.currentUser) {
						$location.path('/');
					}
				}, function(errResponse) {
					console.error('Error while authenticate User...');
				});
			};

			self.deleteUser = function(id) {
				UserService.deleteUser(id).then(self.fetchAllUsers,
						function(errResponse) {
							console.error('Error while deleting User...');
						});
			};

			self.fetchAllUsers();

			self.login = function() {
				{
					console.log('login validation ??????????', self.users);
					self.authenticate(self.users);
				}
			};

			self.submit = function() {
				{
					console.log('Saving new user...', self.users);
					self.createUser(self.users);
				}
				self.reset();
			};
			
			self.reset = function() {
				self.users = {
						id : '',
						name : '',
						password : '',
						email : '',
						phone : '',
						role : '',
						errorMessage : ''
				};
				$scope.myForm.$setPristine();
			};

		} ]);