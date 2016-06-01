'use strict';

angular.module('MyApp.Discover')

.controller('DiscoverController', function(ALLPHOTOS) {
    var self = this;
    self.name = "userR2D2";
    self.Photos = ALLPHOTOS;
    console.log("Discover Controller initialized");
})

.controller('SuperheroController', function(SuperheroListResource, SuperheroAddResource) { 
  var self = this;
  (function getList() {
    SuperheroListResource.get().$promise
    .then(function(response) {
      self.superheros = response.data;
      console.log(response);
    });
  })();
 
  self.getSuperhero = function(superhero) { 
    SuperheroAddResource.get(superhero)
    .then(function(response) {
      // self.superhero.profileImage = response.data.profileImage;
      // self.superheros.push(superhero);
      self.superhero = {};
    });
  };
})