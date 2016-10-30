'use strict';

app.controller('BlogController', [
		'$scope',
		'BlogService',
		'$location',
		'$rootScope',
		function($scope, BlogService, $location, $rootScope) {
			console.log("BlogController...")

			var self = this;
			self.blog = {
				id : '',
				title : '',
				reason : '',
				content : '',
				post_date : '',
				userId : '',
				status : '',
				errorCode : '',
				errorMessage : ''
			}
			self.blogs = [];

			/**
			 * method definition.....
			 */
			
			self.getSelectedBlog = function(id) {
				console.log("getting blog with id : " + id)
				BlogService.getBlog(id).then(function(d) {
					self.blog = d;
					$location.path('/view_blog');
				}, function(errResponse) {
					console.error('Error while fetching Blog...');
				});
			};			

			self.fetchAllBlogs = function() {
				BlogService.fetchAllBlogs().then(function(d) {
					self.blogs = d;
				}, function(errResponse) {
					console.error('Error while fetching Blogs...');
				});
			};

			self.createBlog = function(blog) {
				BlogService.createBlog(blog).then(self.fetchAllBlogs,
						function(errResponse) {
							console.error('Error while creating blog...');
						});
			};

			self.updateBlog = function(blog, id) {
				BlogService.updateBlog(blog).then(self.fetchAllBlogs,
						function(errResponse) {
							console.error('Error while updating blog...')
						});
			};

			self.deleteBlog = function(id) {
				BlogService.deleteBlog(id).then(self.fetchAllBlogs,
						function(errResponse) {
							console.error('Error while deleting blog...')
						});
			};

			self.fetchAllBlogs();

			self.submit = function() {
				{
				console.log('Saving new Blog', self.blog);
					self.createBlog(self.blog);
				}
				self.reset();
			};

			self.edit = function(id) {
				console.log('id to be edited', id);
				for (var i = 0; i < self.blogs.length; i++) {
					if (self.blogs[i].id === id) {
						self.blog = angular.copy(self.blogs[i]);
						break;
					}
				}
			};

			self.remove = function(id) {
				console.log('id to be deleted', id);
				if (self.blog.id === id) {
					self.reset();
				}
				self.deleteBlog(id);
			};

			self.reset = function() {
				console.log('submit a new Blog', self.blog);
				self.blog = {
						id : '',
						title : '',
						reason : '',
						content : '',
						post_date : '',
						userId : '',
						status : '',
						errorCode : '',
						errorMessage : ''
				};
				$scope.myForm.$setPristine();	//reset form...
			};
		} ]);