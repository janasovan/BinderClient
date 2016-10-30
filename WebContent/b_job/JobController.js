'use strict'

app.controller('JobController', ['JobService', '$scope', '$location', '$rootScope',
	function(JobService, $scope, $location, $rootScope) {
		console.log('JobController...');

		var self = this;
		self.job = {
			id : '', 
			companyName : '', 
			location : '', 
			description : '',
			date : '', 
			status : '', 
			noOfApplicants : '',
			errorCode : '', 
			errorMessage : ''
		};

		self.jobs = [];

		self.applyForJob = function (jobId) {
			console.log('calling the method applyForJob...');
			var currentUser = $rootScope.currentUser
			if (typeof currentUser == 'undefined') {
				alert("Please Login to apply for a Job...")
				console.log('User not logged in , can not apply for job...');
				$location.path('/login');
			};
			JobService
						.applyForJob(jobId)
						.then(function(d) {
							self.job = d;
							alert("You have successfully applied for the job...")
						},
						function(errResponse) {
							console.error('Error while applying for job...')
						});

		};

		self.getMyAppliedJobs = function() {
			console.log('calling the method getMyAppliedJobs...');
			JobService
						.getMyAppliedJobs()
						.then(function(d) {
							self.jobs = d;
						},
						function(errResponse) {
							console.error('Error while fetching all applied jobs...');
						});
		};

		self.postNewJob = function(job) {
			console.log('submit a new Job', self.job);
			JobService
						.postNewJob(job)
						.then(function(d) {
							self.job = d;
							alert('You have successfully posted the Job...')
						},
						function(errResponse) {
							console.error('Error while posting new Job...');
						});
		};

		self.rejectJobApplication = function(userId) {
			console.log('calling the method rejectJobApplication...');
			var jobId = $rootScope.selectedJob.id;
			JobService
						.rejectJobApplication(userId, jobId)
						.then(function(d) {
							self.job = d;
							alert('Application status changed as R(Reject)...')
						},
						function(errResponse) {
							console.error('Error while changing the status...');
						});
		};

		self.callForInterview = function(userId) {
			console.log('calling the method callForInterview...');
			var jobId = $rootScope.selectedJob.id;
			JobService
						.callForInterview(userId, jobId)
						.then(function(d) {
							self.job = d;
							alert('Application status changed as C(CallForInterview)...')
						},
						function(errResponse) {
							console.error('Error while changing the status...')
						});
		};

		self.selectForJob = function(userId) {
			console.log('calling the method selectForJob...');
			var jobId = $rootScope.selectedJob.id;
			JobService
						.selectForJob(userId, jobId)
						.then(function(d) {
							self.job = d;
							alert('Application status changed as S(Selected)...')
						},
						function(errResponse) {
							console.error('Error while changing the status...')
						});
		};

		self.getAllJobs = function() {
			console.log('calling the method getAllJobs...');
			JobService
						.getAllJobs()
						.then(function(d) {
							self.job = d;
						},
						function(errResponse) {
							console.error('Error while fetching all jobs...');
						});
		};

		self.getAllJobs();

		self.getJobDetails = function(jobId) {
			console.log('calling the method getJobDetails...');
			JobService
						.getJobDetails(jobId)
						.then(function(d) {
							self.job = d;

							$location.path('/view_job_details');
						},
						function(errResponse) {
							console.error('Error while fetching Job details...');
						});
		};
		
		self.submit = function() {
			{
				console.log('submit a new Job', self.job);
				self.postNewJob(self.job);
			}
			self.reset();
		};

		self.reset = function() {
			console.log('submit a new job', self.job);
			self.job = {
					id : '', 
					companyName : '', 
					location : '', 
					description : '',
					date : '', 
					status : '', 
					noOfApplicants : '',
					errorCode : '', 
					errorMessage : ''
			};
			$scope.myForm.$setPristine();	//reset form...
		};

	}]);