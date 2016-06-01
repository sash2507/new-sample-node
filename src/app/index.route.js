(function() {
  'use strict';

  angular
    .module('template')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider, ALLPHOTOS) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'ctrl'
      })

    .state(ALLPHOTOS.kVoteState, {
       url: '/vote',
       templateUrl: 'app/vote/partials/vote.main.html',
       controller: 'VoteController as ctrl'
     })

    .state(ALLPHOTOS.kDiscoverState, {
      url: '/discover',
      templateUrl: 'app/discover/partials/discover.main.html',
      controller: 'DiscoverController as ctrl'
    })

    .state(ALLPHOTOS.kContactState, {
      url: '/contact',
      templateUrl: 'app/contact/partials/contact.main.html',
      controller: 'ContactController as ctrl'
    })


    $urlRouterProvider.otherwise('/');
  }

})();
