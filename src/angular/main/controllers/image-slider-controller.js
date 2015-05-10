'use strict';

app.controller('ImageSliderController', function ($scope, $window, $http, $timeout, $location) {
    (function initialSetup() {
        var recalculateSliderHeight = function () {
            var $slider = $('#slider');
            var sliderNewWidth = $slider.width();
            var sliderNewHeight = sliderNewWidth / 4;
            $slider.height(sliderNewHeight);
        };

        $(window).resize(function () {
            recalculateSliderHeight();
        });

        recalculateSliderHeight();
    }());

    var SLIDE_CHANGE_INTERVAL_MILLISECONDS = 4000; /*4000 */

    var Z_INDEX = {
        ABOVE: 2,
        BELOW: 1
    };

    var OPACITY = {
        INITIAL: 0.4,
        SELECTED: 1
    };

    var setInitialSliderValues = function () {
        $('.slide').css('opacity', OPACITY.INITIAL);

        var firstSlide = $('.slide').first();
        firstSlide.addClass('slide-selected');
        firstSlide.css('z-index', Z_INDEX.ABOVE);
        firstSlide.css('opacity', OPACITY.SELECTED);

        var timer = setInterval(function () {
            changeSlideToNext();
        }, SLIDE_CHANGE_INTERVAL_MILLISECONDS);

        /* Stops the slideshow on hover */
        $('#slider').hover(function (event) {
            console.log("slider hover");
            clearInterval(timer);
        }, function (event) {
            console.log("slider hover over");
            timer = setInterval(function () {
                changeSlideToNext();
            }, SLIDE_CHANGE_INTERVAL_MILLISECONDS);
        }
        );
    };

//    var slideInfos = [];
//    $scope.slideInfos = slideInfos;
//
//    var responsePromise = $http.get("http://213.16.62.58:88/Slim/application/image_slider");
//
//    responsePromise.success(function (data, status, headers, config) {
//        slideInfos = data;
//        $scope.slideInfos = slideInfos;
//        $timeout(function () {
//            setInitialSliderValues();
//        });
//    });
//
//    responsePromise.error(function (data, status, headers, config) {
//        console.log("AJAX failed!");
//    });

    var slideInfos = [{
            "imageSrc": "./assets/img/slider5.jpg",
            "showSlideText": true,
            "title": "Company",
            "text": "that cares for you...",
            "isLinkAvailable": true,
            "isLinkInNewTab": true,
            "href": "https://facebook.com"
        },
        {
            "imageSrc": "./assets/img/slider3.jpg",
            "showSlideText": false,
            "title": "Heading",
            "text": "Hsdfsa asdfafsa Hsdfsa asdfafsa Hsdfsa asdfafsa Hsdfsa asdfafsa Hsdfsa asdfafsa",
            "isLinkAvailable": true,
            "isLinkInNewTab": false,
            "href": "#"
        },
        {
            "imageSrc": "./assets/img/slider9.jpg",
            "showSlideText": true,
            "title": "Heading",
            "text": "Hsdfsa asdfasdfsa",
            "isLinkAvailable": false,
            "isLinkInNewTab": false,
            "href": "#"
        }];
    $scope.slideInfos = slideInfos;
    $timeout(function () {
        setInitialSliderValues();
    });

    var getCurrentSelectedSlideId = function () {
        var currentSlideId = $('.slide-selected').attr('id');
        return currentSlideId;
    };

    var getCurrentSelectedSlideIndex = function () {
        var currentSlideId = getCurrentSelectedSlideId();
        var currentSlideIndex = parseInt(currentSlideId.replace('slide-', ''));
        return currentSlideIndex;
    };

    var changeSlide = function (slideIndex) {
        var oldSelectedSlide = $('.slide-selected');
        oldSelectedSlide.css('z-index', Z_INDEX.BELOW);
        oldSelectedSlide.fadeTo('fast', OPACITY.INITIAL);
        oldSelectedSlide.removeClass('slide-selected');

        var newVisibleSlide = $('#slide-' + slideIndex);
        newVisibleSlide.css('z-index', Z_INDEX.ABOVE);
        newVisibleSlide.fadeTo('normal', OPACITY.SELECTED);
        newVisibleSlide.addClass('slide-selected');

        $('#slider-checkboxes').children().each(function (index, element) {
            if (index === slideIndex) {
                $(element).css('background-color', 'rgba(124, 26, 141, 0.6)');
            } else {
                $(element).css('background-color', 'rgba(255, 255, 255, 0.3)');
            }
        });
    };

    var changeSlideTo = function (slideIndex) {
        changeSlide(slideIndex);
    };

    var changeSlideToPrevious = function () {
        var currentSlideIndex = getCurrentSelectedSlideIndex();
        var previousIndex = (currentSlideIndex + slideInfos.length - 1) % slideInfos.length;
        changeSlide(previousIndex);
    };

    var changeSlideToNext = function () {
        var currentSlideIndex = getCurrentSelectedSlideIndex();
        var nextIndex = (currentSlideIndex + slideInfos.length + 1) % slideInfos.length;
        changeSlide(nextIndex);
    };

    var openLink = function (url, isLinkInNewTab) {
        var target = isLinkInNewTab ? '_blank' : '_self';
        $window.open(url, target);
        //$location.path('/video').replace();
    };

    $scope.changeSlideToNext = changeSlideToNext;
    $scope.changeSlideToPrevious = changeSlideToPrevious;
    $scope.changeSlideTo = changeSlideTo;
    $scope.openLink = openLink;
});