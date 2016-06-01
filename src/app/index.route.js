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

      // .state(ALLPHOTOS.kHomeState, {
      //   url: '/',
      //   templateUrl: 'app/home/partials/home.main.html',
      //   controller: 'HomeController as ctrl'
      // })

      .state(ALLPHOTOS.kVoteState, {
        url: '/vote',
        templateUrl: 'app/vote/partials/vote.main.html',
        controller: 'VoteController as ctrl'
      })

      .state(ALLPHOTOS.kUploadState, {
      url: '/upload',
      templateUrl: 'app/upload/partials/upload.main.html',
      controller: 'UploadController as ctrl'
    })

      .state(ALLPHOTOS.kDetailsState, {
      url: '/details',
      templateUrl: 'app/details/partials/details.main.html',
      controller: 'DetailsController as ctrl'
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
