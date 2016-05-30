'use strict';

angular.module('template')

.factory('TodoAddResource', function($resource) {
	return $resource('/api/addTodo', null, {
		addTodo: {
			method: 'PUT'
		}
	});
})

.factory('TodoListResource', function($resource) {
	return $resource('/api/getTodos');
})

.factory('TodoDetailsResource', function($resource) {
	return $resource('/api/getTodoDetails/:id');
})

.factory('TodoUpdateResource', function($resource) {
	return $resource('/api/updateTodo');
})


// Superhero resources
.factory('SuperheroListResource', function($resource) {
	return $resource('/api/getSuperheros');
})

/* Upload service being injected is from the ng-file-upload library */
.factory('SuperheroAddResource', function(Upload) {
	return {
		add: function(toAdd) {
			return Upload.upload({
				url: '/api/addSuperhero',
				method:'PUT',
				data: {content: angular.toJson(toAdd)},
				file: toAdd.file
			});
		}
	};
});
