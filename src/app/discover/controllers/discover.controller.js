angular.module('MyApp.Discover')

.controller('DiscoverController', function(ALLPHOTOS) {
	var self = this;
	self.name = "Saloni";
	self.Photos = ALLPHOTOS;
	console.log("Discover Controller initialized");

})