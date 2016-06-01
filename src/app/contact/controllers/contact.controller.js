angular.module('MyApp.Contact')

.controller('ContactController', function(ALLPHOTOS) {
    var self = this;
    self.name = "userR2D2";
    self.Photos = ALLPHOTOS;
    console.log("Contact Controller initialized"); 

})