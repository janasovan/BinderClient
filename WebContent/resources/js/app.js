var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider

	/**
	 * Home page mapping
	 */
	
	/*.when('/', {
		templateUrl	: 'b_home/home.html',
		controller : 'HomeController'
	})*/
	
	/**
	 * Admin related mapping
	 */
	
	/*.when('/manage_users', {
		templateUrl : 'b_admin/manage_users.html',
		controller : 'AdminController'
	})*/
		
	/**
	 * User login and register mapping
	 */
	.when('/login', {
		templateUrl : 'b_user/login.html'
	})
	
	.when('/register', {
		templateUrl : 'b_user/register.html'
	})
	
	/**
	 * Blog related mapping
	 */
	
	.when('/create_blog', {
		templateUrl : 'b_blog/create_blog.html'/*,
		controller : 'BlogController'*/
	})
	/*
	.when('/list_blog', {
		templateUrl : 'b_blog/list_blog.html',
		controller : 'BlogController'
	})
	
	.when('/view_blog', {
		templateUrl : 'b_blog/view_blog.html',
		controller : 'BlogController'
	})
	
	.when('/list_blogs', {
		templateUrl : 'b_blog/list_blogs.html',
		controller : 'BlogController'
	})*/
	
	/**
	 * Forum related mapping
	 */
	
	/*.when('/create_forum', {
		templateUrl : 'b_forum/create_forum.html',
		controller : 'ForumController'
	})
	
	.when('/list_forum', {
		templateUrl : 'b_forum/list_forum.html',
		controller : 'ForumController'
	})
	
	.when('/view_forum', {
		templateUrl : 'b_forum/view_forum.html',
		controller : 'ForumController'
	})*/
	
	/**
	 * Friend related mapping
	 */
	
	/*.when('/add_friend', {
		templateUrl : 'b_friend/add_friend.html',
		controller : 'FriendController'
	})
	
	.when('/search_friend', {
		templateUrl : 'b_friend/search_friend.html',
		controller : 'FriendController'
	})
	
	.when('/view_friend', {
		templateUrl : 'b_friend/view_friend.html',
		controller : 'FriendController'
	})*/
	
	/**
	 * Job related mapping
	 */
	
	/*.when('/job_opportunities', {
		templateUrl : 'b_job/job.html',
		controller : 'JobController'
	})*/	
	
	/**
	 * Event related mapping
	 */
	
	/*.when('/event', {
		templateUrl : 'b_event/event.html',
		controller : 'EventController'
	})*/
	
	/**
	 * About mapping
	 */
	
	/*.when('/about', {
		templateUrl : 'b_about/about.html',
		controller : 'AboutController'
	})*/
	
	/**
	 * If anything goes wrong then this mapping will handle the request...
	 */
		
	.otherwise({redirectTo : '/'});
	
});