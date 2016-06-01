angular.module('MyApp.Upload')

.controller('UploadController', function(ALLPHOTOS) {
	var self = this;
	self.name = "Saloni";
	self.Photos = ALLPHOTOS;
	console.log("Upload Controller initialized");

	self.photosArray = [];
	self.displayPhoto = function() {
		self.photosArray.push({
			image: self.photo
		});
	} 
})
	
	.controller('SuperheroController', function(SuperheroListResource, SuperheroAddResource) { 
		var self = this;
		// gets list of superhero from resource object
		// sets the superhero variable to the response
		(function getList() {
		    SuperheroListResource.get()
		    .$promise
		    .then(function(response) {
		    	self.superheros = response.data;
		   	});
		 })();

  		self.addSuperhero = function(superhero) {
  			SuperheroAddResource.add(superhero)
	    	.then(function(response) {
			    superhero.profileImage = response.data.profileImage;
			    self.superheros.push(superhero);
			    self.superhero = {};
	    	});
		};
	})
 