'use strict';

app.controller('TopNavLineController', function($scope) {
    var links = [
        {
            'name': 'Facebook',
            'backgroundSrc': 'assets/img/social_icons/facebook/facebook-24.png',
            'backgroundColor': '3B5998',
            'url': 'https://facebook.com/'
        },
        {
            'name': 'Twitter',
            'backgroundSrc': 'assets/img/social_icons/twitter/twitter-24.png',
            'backgroundColor': '00ACED',
            'url': 'https://twitter.com/'
        },
        {
            'name': 'Youtube',
            'backgroundSrc': 'assets/img/social_icons/youtube/youtube-24.png',
            'backgroundColor': 'CD332D',
            'url': 'https://www.youtube.com/'
        },
        {
            'name': 'Foursquare',
            'backgroundSrc': 'assets/img/social_icons/foursquare/foursquare-24.png',
            'backgroundColor': '2398C9',
            'url': 'https://foursquare.com/'
        },
        {
            'name': 'Google+',
            'backgroundSrc': 'assets/img/social_icons/googleplus/googleplus-24.png',
            'backgroundColor': 'D14836',
            'url': 'https://plus.google.com/'
        }
    ];
    
    $scope.links = links;
});