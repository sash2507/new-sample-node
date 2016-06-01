(function() {
  'use strict';

  angular
    .module('template', [
    	// 'ngCookies',
    	// 'ngSanitize',
    	// 'ngMessages',
    	'ngAnimate', 
    	'ngResource', 
    	'ui.router', 
    	'ui.bootstrap',
        'MyApp.Home',
    	'MyApp.Vote',
    	'MyApp.Upload',
    	'MyApp.Details',
    	'MyApp.Discover',
        'ngFileUpload'
    ]);

})();
