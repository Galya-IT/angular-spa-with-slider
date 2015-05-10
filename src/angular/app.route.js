'use strict';

/*
 * You need to add rewrite rule to the server in .htaccess file.
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteRule ^ index.html [QSA,L]
 */
app.config(function appConfig($routeProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    //$locationProvider.hashPrefix('!');
    
    $routeProvider.when('/', {
        templateUrl : './assets/partials/home.html'
    });
    
    $routeProvider.when('/about', {
        templateUrl : './assets/partials/about.html'
    });
    
    $routeProvider.when('/video', {
        templateUrl : './assets/partials/video.html'
    });
    
    $routeProvider.when('/contacts', {
        templateUrl : './assets/partials/contacts.html'
    });
    
    $routeProvider.when('/not_found', {
        templateUrl : './assets/partials/not_found.html'
    });

    $routeProvider.otherwise({redirectTo: '/not_found'});
});