'use strict';

angular.module('template')

// Photo Upload resources:

// .factory('PhotoListResource', function($resource) {
// 	return $resource('path/to/some/jsondata');
// })

.factory('SuperheroListResource', function($resource) {
	return $resource('/api/getSuperheros');
})

/* Upload service being injected is from the ng-file-upload library */
.factory('SuperheroAddResource', function(Upload) {
	return {
		add: function(toAdd) {
			return Upload.upload({
				// the URL will change if no server-side/using firebase
				url: '/api/addSuperhero',
				method:'PUT',
				data: {content: angular.toJson(toAdd)},
				file: toAdd.file
			});
		}
	};
});
