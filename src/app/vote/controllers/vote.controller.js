angular.module('MyApp.Vote')

.controller('VoteController', function(ALLPHOTOS) {
	var self = this;
	
	// function showUploadedPhoto(photo) {
	// 	superheroAddResource.get()
	// 	.$promise
	// 	.then(function(response){
	// 		self.photos = response.data;
	// 	})
	// }

	self.name = "Saloni";
	self.Photos = ALLPHOTOS;
	console.log("Vote Controller initialized");

	// self.photoList = [{
	// 	name: "skirt",
	// 	store: "Topshop",
	// 	price: "$50"
	// }, {
	// 	name: "blouse",
	// 	store: "H&M",
	// 	price: "$25"
	// },
	// {
	// 	name: "sandals",
	// 	store: "Barneys",
	// 	price: "$250"
	// },
	// {
	// 	name: "sneakers",
	// 	store: "Nike",
	// 	price: "$75"
	// }];


}) 