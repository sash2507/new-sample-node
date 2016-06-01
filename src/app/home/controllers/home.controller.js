angular.module('MyApp.Home')

.controller('HomeController', function(ALLPHOTOS) {
	var self = this;
	self.name = "Saloni";
	self.Photos = ALLPHOTOS;
	console.log("Home Controller initialized");

})