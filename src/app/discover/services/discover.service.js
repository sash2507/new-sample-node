'use strict';

angular.module('template')

// Superhero resources
.factory('SuperheroListResource', function($resource) {
	return $resource('/api/getSuperheros');
})

/* Upload service being injected is from the ng-file-upload library */
.factory('SuperheroAddResource', function(addToPhotoList) {
	return {
		add: function(toList) {
			return Upload.upload({
				url: '/api/addSuperhero',
				method:'GET',
				data: {content: angular.toJson(toAdd)},
				file: toList.file
			});
		}
	};
});