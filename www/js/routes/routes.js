angular.module('BlaBlaCar.routes', [])

    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'templates/menu.html',
                controller: 'AppCtrl'
            })
            .state('app.search', {
                url: '/search',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/search.html',
                        controller: 'SearchCtrl'
                    }
                }
            })
            .state('app.results', {
                url: '/results:searchValue',
                views : {
                    'menuContent': {
                        templateUrl: 'templates/results.html',
                        controller: 'ResultsCtrl'
                    }
                }
            })
            .state('app.propose', {
                url: '/propose',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/propose.html',
                        controller: 'TrajetCtrl'
                    }
                }
            })
            .state('app.home', {
                url: '/home',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/home.html',
                        controller: 'TrajetCtrl'
                    }
                }
            })
            .state('app.login', {
                url: '/login',
                views: {
                    'menuContent': {
                        templateUrl : 'templates/login.html',
                        controller: 'LoginCtrl'
                    }
                }
            })
            .state('app.register', {
                url: '/register',
                views: {
                    'menuContent': {
                        templateUrl : 'templates/register.html',
                        controller: 'RegisterCtrl'
                    }
                }
            })

        $urlRouterProvider.otherwise('/app/home')
    });

