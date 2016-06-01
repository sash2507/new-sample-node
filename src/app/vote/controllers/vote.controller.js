angular.module('MyApp.Vote')

.controller('VoteController', function(ALLPHOTOS) {
    var self = this;
    self.name = "George";
    self.Photos = ALLPHOTOS;
    console.log("Vote Controller initialized"); 
    self.upvote = 0;
    self.downvote = 0;

    self.currentCount = 1;
    self.voteUp = function() {
    	self.upvote = self.upvote + self.currentCount;
    }

    self.currentDownCount = 1;
    self.voteDown = function() {
        self.downvote = self.downvote + self.currentDownCount;
    }
})