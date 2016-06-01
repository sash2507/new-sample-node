angular.module('MyApp.Details')

.controller('DetailsController', function(ALLPHOTOS) {
	var self = this;
	self.name = "Saloni";
	self.Photos = ALLPHOTOS;
	console.log("Details Controller initialized");

})