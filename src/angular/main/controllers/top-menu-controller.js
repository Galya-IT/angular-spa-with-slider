'use strict';

app.controller('TopMenuController', function($scope, $location) {
    var menuItemInfos = [
        {
            'title': 'Начало',
            'subtitle': 'Актуално',
            'href': '/'
        },
        {
            'title': 'За нас',
            'subtitle': 'Мисия и цел',
            'href': '/about'
        },
        {
            'title': 'Видео',
            'subtitle': 'Архив',
            'href': '/video'
        },
        {
            'title': 'Контакти',
            'subtitle': 'Email и адрес',
            'href': '/contacts'
        }
    ];
    
    var scrollToAnchor = function(anchorId){
        var $element = $(anchorId);
        $('html,body').animate({scrollTop: $element.offset().top}, 'slow', 'easeOutExpo');
    };
    
    var redirect = function(href) {
        $location.path(href);
    };
    
    $(document).ready(function() {
        $('#top-menu li').click(function(){
            scrollToAnchor('#main-section');
            return false;
        });
    });

    $scope.menuItemInfos = menuItemInfos;
    $scope.redirect = redirect;
});