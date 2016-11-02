'use strict';

app.factory('JobService', ['$http', '$q', '$rootScope',
    function($http, $q, $rootScope) {
	console.log("JobService...");

		var BASE_URL='http://localhost:8081/BinderClient'
			return {

			applyForJob : function(jobId) {
				return $http
							.post(BASE_URL+'/applyForJob/'+jobId)
							.then(function(response) {
								return response.data;
							},
							function(errResponse) {
								console.error('Error while applying for Job...');
								return $q.reject(errResponse);
							});
			},
		

			getJobDetails : function(jobId) {
				console.log('Getting job details of'+jobId)
				return $http
							.get(BASE_URL+'/getJobDetails/'+jobId)
							.then(function(response) {
								$rootScope.selectedJob = response.data
								return response.data;
							},
							function(errResponse) {
								console.error('Error while getting job details');
								return $q.reject(errResponse);
							});
			},

			getMyAppliedJobs : function() {
				return $http
							.get(BASE_URL+'/getMyAppliedJobs/')
							.then(function(response) {
								return response.data;
							},
							function(errResponse) {
								console.error('Error while getting all applied jobs...');
								return $q.reject(errResponse);
							});
			},

			postNewJob : function(job) {
				return $http
							.post(BASE_URL+'/postNewJob/', job)
							.then(function(response) {
								return response.data;
							},
							function(errResponse) {
								console.error('Error while posting new Job...');
								return $q.reject(errResponse);
							});
			},

			rejectJobApplication : function(userId, jobId) {
				return $http
							.put(BASE_URL+'/rejectJobApplication/'+userId+'/'+jobId)
							.then(function(response) {
								return response.data;
							},
							function(errResponse) {
								console.error('Error while updating Job Application...');
								return $q.reject(errResponse);
							});
			},

			callForInterview : function(id) {
				return $http
							.put(BASE_URL+'/callForInterview/'+userId+'/'+jobId)
							.then(function(response) {
								return response.data;
							},
							function(errResponse) {
								console.error('Error while updating Job Application...');
								return $q.reject(errResponse);
							});
			},

			selectForJob : function(id) {
				return $http
							.put(BASE_URL+'/selectForJob/'+userId+'/'+jobId)
							.then(function(response) {
								return response.data;
							},
							function(errResponse) {
								console.error('Error while updating Job Application...');
								return $q.reject(errResponse);
							});
			},

			getAllJobs : function() {
				return $http
							.get(BASE_URL+'/getAllJobs/')
							.then(function(response) {
								return response.data;
							},
							function(errResponse) {
								console.error('Error while getting Job list...');
								return $q.reject(errResponse);
							});
			}
		};
}]);