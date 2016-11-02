var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider

	/**
	 * Home page mapping
	 */
	.when('/', {
		templateUrl	: 'b_home/home.html',
		controller : 'HomeController as ctrl'
	})
	
	/**
	 * Admin related mapping
	 */
	
	.when('/manage_users', {
		templateUrl : 'b_admin/manage_users.html',
		controller : 'AdminController as ctrl'
	})
		
	/**
	 * User login and register mapping
	 */
	
	.when('/login', {
		templateUrl : 'b_user/login.html',
		controller: 'UserController as ctrl'
	})
	
	.when('/register', {
		templateUrl : 'b_user/register.html',
		controller: 'UserController as ctrl'
	})
	
	/**
	 * Blog related mapping
	 */
	
	.when('/create_blog', {
		templateUrl : 'b_blog/create_blog.html',
		controller : 'BlogController as ctrl'
	})
	
	.when('/list_blog', {
		templateUrl : 'b_blog/list_blogs.html',
		controller : 'BlogController as ctrl'
	})
	
	.when('/view_blog', {
		templateUrl : 'b_blog/view_blog.html',
		controller : 'BlogController as ctrl'
	})
	
	/**
	 * Forum related mapping
	 */
	
	.when('/create_forum', {
		templateUrl : 'b_forum/create_forum.html',
		controller : 'ForumController as ctrl'
	})
	
	.when('/list_forum', {
		templateUrl : 'b_forum/list_forum.html',
		controller : 'ForumController as ctrl'
	})
	
	.when('/view_forum', {
		templateUrl : 'b_forum/view_forum.html',
		controller : 'ForumController as ctrl'
	})
	
	/**
	 * Friend related mapping
	 */
	
	.when('/add_friend', {
		templateUrl : 'b_friend/add_friend.html',
		controller : 'FriendController as ctrl'
	})
	
	.when('/search_friend', {
		templateUrl : 'b_friend/search_friend.html',
		controller : 'FriendController as ctrl'
	})
	
	.when('/view_friend', {
		templateUrl : 'b_friend/view_friend.html',
		controller : 'FriendController as ctrl'
	})
	
	/**
	 * Job related mapping
	 */
	
	.when('/job_opportunities', {
		templateUrl : 'b_job/job.html',
		controller : 'JobController as ctrl'
	})	
	
	/**
	 * About related mapping
	 */
	
	.when('/about', {
		templateUrl : 'b_about/about.html',
		controller : 'AboutController as ctrl'
	})
	
	/**
	 *  Chat related mapping
	 */
	.when('/chat', {
		templateUrl: 'b_chat/chat.html',
		controller: 'ChatController as ctrl'
	})
	
	/**
	 *  Event related mapping
	 */
	.when('/event', {
		templateUrl: 'b_event/event.html',
		controller: 'EventController as ctrl'
	})
	
	/**
	 * If anything goes wrong then this mapping will handle the request...
	 */
		
	.otherwise({redirectTo : '/'});
	
});