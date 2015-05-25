angular.module('ShoutOut', ['ngRoute', 'ngMessages', 'satellizer', 'facebook'])
  .config(function($routeProvider, $authProvider, FacebookProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/shoutstream', {
        templateUrl: 'views/shoutstream.html',
        controller: 'ShoutStreamCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl'
      })
      .when('/photo/:id', {
        templateUrl: 'views/detail.html',
        controller: 'DetailCtrl'
      })
      .otherwise('/');

    $authProvider.loginUrl = 'http://instagram-server.herokuapp.com/auth/login';
    $authProvider.signupUrl = 'http://instagram-server.herokuapp.com/auth/signup';
    $authProvider.oauth2({
       name: 'facebook',
      // url: 'http://instagram-server.herokuapp.com/auth/instagram',
      // redirectUri: 'https://dl.dropboxusercontent.com/u/14131013/instagram/index.html',
       clientId: '1573128146290575',

      // requiredUrlParams: ['scope'],
      // scope: ['likes'],
      // scopeDelimiter: '+',
      // authorizationEndpoint: 'https://api.instagram.com/oauth/authorize'
      url: '/shoutoutfrontend/#/shoutstream',
      authorizationEndpoint: 'https://www.facebook.com/v2.3/dialog/oauth',
      redirectUri: window.location.origin || window.location.protocol + '//' + window.location.host + '/',
      scope: 'email',
      scopeDelimiter: ',',
      requiredUrlParams: ['display', 'scope'],
      display: 'popup',
      type: '2.0',
      popupOptions: { width: 481, height: 269 }
    });

     FacebookProvider.init('1573128146290575');
  })
  .run(function($rootScope, $window, $auth) {
    if ($auth.isAuthenticated()) {
      $rootScope.currentUser = JSON.parse($window.localStorage.currentUser);
    }
  });
